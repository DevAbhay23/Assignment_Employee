import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class UtilsProvider {

    constructor() {

    }
    /**
     * Descp:Function to check whether cordova platforms is ready for device.
     */
    isDeviceReady() {
        return new Promise((resolve) => {
            document.addEventListener('deviceready', (onDeviceReady) => {
                resolve(true);
            }, false);
        });
    }


}

