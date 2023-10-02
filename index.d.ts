declare class NextCrypto {
  constructor(secret: string);

  async encrypt(plain: string): Promise<string>;
  async decrypt(encrypted: string): Promise<string | null>;
}

export default NextCrypto;
