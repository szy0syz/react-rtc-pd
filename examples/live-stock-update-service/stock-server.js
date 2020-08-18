const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const randomStocksObject = require("./random-stock-values");

const port = process.env.PORT || 9090;

io.on('connection', socket => {
    getStockValues(socket);
    setInterval(() => {
        getStockValues(socket);
    }, 5000);
});
function getStockValues(socket){
    socket.emit("appleStocks", randomStocksObject.getAppleStockValues());
    socket.emit("googleStocks", randomStocksObject.getGoogleStockValues());
    socket.emit("microsoftStocks", randomStocksObject.getMicrosoftStockValues());
}
http.listen(port, () => {
    console.log(`Listening on port ${port}`);
});