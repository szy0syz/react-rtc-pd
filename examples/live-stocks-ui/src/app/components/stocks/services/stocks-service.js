import * as io from "socket.io-client";
import { Observable } from "rxjs";

class StocksService {
    constructor() {
        this._socketUrl = "http://localhost:9090";
        this._socket = io(this._socketUrl);
    }

    getAppleStockValues() {
        return new Observable(observer => {
            this._socket.on("appleStocks", appleStock => {
                observer.next(appleStock);
            });
        });
    }
    getGoogleStockValues() {
        return new Observable(observer => {
            this._socket.on("googleStocks", googleStock => {
                observer.next(googleStock);
            });
        });
    }
    getMicrosoftStockValues() {
        return new Observable(observer => {
            this._socket.on("microsoftStocks", msStock => {
                observer.next(msStock);
            });
        });
    }
}

export default new StocksService();