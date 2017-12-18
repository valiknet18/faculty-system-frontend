import CryptoJS from 'crypto-js';
import parameters from '../../config/parameters';

export default class Crypto {
    static KEY = 'test';

    static encrypt(data) {
        let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), parameters.secretKey);

        localStorage.setItem(Crypto.KEY, ciphertext.toString());
    }

    static descrypt() {
        let ciphertext = localStorage.getItem(Crypto.KEY);

        if (!ciphertext) {
            return {};
        }

        let bytes  = CryptoJS.AES.decrypt(ciphertext, parameters.secretKey);

        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
}
