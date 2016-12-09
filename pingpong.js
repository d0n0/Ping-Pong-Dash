// sudo node pingpong.js で実行


const DashButton = require("dash-button");
const COMMAND = "mpg321 ./pingpong.mp3";
const DASH_BUTTON_MAC_ADDR = "34:d2:70:17:3a:ab";
const LISTEN_INTERFACE = "wlx003a9daa7c68";

let button = new DashButton(DASH_BUTTON_MAC_ADDR, {networkInterface: LISTEN_INTERFACE});

console.log("listening...");


// 発火イベント
button.addListener(() => {

    const exec = require('child_process').exec;
    exec(COMMAND, (err,stdout, stderr) => {
        if(err) { console.log(err); }
        console.log('ﾋﾟｰｰｰﾝ ﾎﾟｰｰｰﾝ.. ﾋﾟｰｰｰﾝ ﾎﾟｰｰｰﾝ..');
        console.log(stdout);
    });

});
