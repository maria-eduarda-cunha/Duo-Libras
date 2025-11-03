// import { Injectable } from '@angular/core';
// import * as CryptoJS from 'crypto-js';
// import { environment } from '../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })

// export class EncryptService {

//   constructor() { }

//   encrypt(value: string): string {

//     var key = CryptoJS.enc.Utf8.parse(environment.cryptoKey);

//     var iv = CryptoJS.enc.Utf8.parse(environment.cryptoKey);

//     let encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value), key,  {
//       keySize: 128 / 8,
//       iv: iv,
//       mode: CryptoJS.mode.CFB,
//       padding: CryptoJS.pad.NoPadding
//     });

//     return encrypted.toString()
//   }

//   decrypt(value: string) {

//     var key = CryptoJS.enc.Utf8.parse(environment.cryptoKey);

//     var iv = CryptoJS.enc.Utf8.parse(environment.cryptoKey);

//     let decrypted  = CryptoJS.AES.decrypt(value, key,  {
//       keySize: 128 / 8,
//       iv: iv,
//       mode: CryptoJS.mode.CFB,
//       padding: CryptoJS.pad.NoPadding
//     });

//     return decrypted.toString(CryptoJS.enc.Utf8)
//   }

// }
