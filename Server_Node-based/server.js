require('app-module-path').addPath(__dirname);

const httpLoader = require('./loaders/http/app')
const {initSocket, addKlineWSListener} = require('./loaders/websocket/socket')
const define = require('config/define')
const env = require('config/env');
// const aggT = require('services/binance/websocket/spot/aggTradeWS');

// const klines = require('services/binance/spot/market/klines');
var io;

function startServer() {
    if (define.LOAD_WEBSOCKET) {
        io = initSocket(httpLoader)
        // console.log("1")
        //
        const result = require("services/hbase-client/hbaseService").insertKline("555")
            .then((param) =>{
                console.log("6")
                console.log(param)
            })
            .catch((err)=>{
                console.log("3")
                console.log(err)
            })
        console.log(result)
        console.log("8")

        // const service = require("services/hbase-client/hbaseService")
        // service.selectKline()
        // serv()
        // addKlineWSListener()
    }
}

function addWSListener() {

}

startServer()