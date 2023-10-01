declare class NextCrypto {
  constructor(secret: string);

  static async encrypt(plain: string): Promise<string>;
  static async decrypt(encrypted: string): Promise<string | null>;
}

export default NextCrypto;
