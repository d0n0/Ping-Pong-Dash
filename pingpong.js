const DashButton = require('dash-button');
const moment = require('moment');
const config = require('./config.json');

const LISTEN_INTERFACE = config.listen_interface;
const BUTTON_MAC_ADDR = config.button_mac_addr;
const COMMAND = "mpg321 ./pingpong.mp3";
let button = new DashButton(BUTTON_MAC_ADDR, {networkInterface: LISTEN_INTERFACE});

console.log('interface       : %s', config.listen_interface);
console.log('button_mac_addr : %s', config.button_mac_addr);
console.log('\nlistening...\n');

// event
button.addListener(() => {
  const exec = require('child_process').exec;
  exec(COMMAND, (err,stdout, stderr) => {
    if(err) { console.log(err); }
    let now = moment().format('YYYY/MM/DD HH:mm:ss');
    console.log('Button is pressed (%s)', now);
  });
});
