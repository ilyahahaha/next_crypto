class NextCrypto {
  constructor(secret) {
    this.secret = secret;
  }

  static async encrypt(plain) {
    const iv = crypto.getRandomValues(new Uint8Array(12));

    const alg = { name: 'AES-GCM', iv };
    const keyHash = crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(this.secret),
    );

    const encodedPlaintext = new TextEncoder().encode(plain);

    const secretKey = await crypto.subtle.importKey(
      'raw',
      keyHash,
      alg,
      false,
      ['encrypt'],
    );

    const ciphertext = await crypto.subtle.encrypt(
      {
        name: 'AES-GCM',
        iv,
      },
      secretKey,
      encodedPlaintext,
    );

    return `${Buffer.from(ciphertext).toString('base64')};${Buffer.from(
      iv,
    ).toString('base64')}`;
  }

  static async decrypt(encrypted) {
    const ciphertext = encrypted.split(';')[0];
    const iv = encrypted.split(';')[1];

    if (!ciphertext || !iv) {
      return null;
    }

    const alg = { name: 'AES-GCM', iv };
    const keyHash = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(this.secret),
    );

    const secretKey = await crypto.subtle.importKey(
      'raw',
      keyHash,
      alg,
      false,
      ['decrypt'],
    );

    try {
      const cleartext = await crypto.subtle.decrypt(
        {
          name: 'AES-GCM',
          iv: Buffer.from(iv, 'base64'),
        },
        secretKey,
        Buffer.from(ciphertext, 'base64'),
      );

      return new TextDecoder().decode(cleartext);
    } catch (e) {
      return null;
    }
  }
}

module.exports = NextCrypto;
