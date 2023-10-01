declare class NextCrypto {
  constructor(secret: string);

  static encrypt(plain: string): string;
  static decrypt(encrypted: string): string;
}

export = NextCrypto;
