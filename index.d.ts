declare class NextCrypto {
  constructor(secret: string);

  encrypt(plain: string): Promise<string>;
  decrypt(encrypted: string): Promise<string | null>;
}

export default NextCrypto;
