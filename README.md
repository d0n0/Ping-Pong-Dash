# Ping-Pong-Dash
### 駆け抜けろ ☆．。．:*･*ﾟ.:｡+ﾟ┌(　・。・)┘.☆
<br />

## description
Amazon Dash Buttonと連携してベルを鳴らす簡単なプログラムです
<br />

## require
- Amazon Dash Button
- nodejs 6.x
- npm
- mpg321
- libpcap-dev

## install 
```
$ sudo apt install -y mpg321 libpcap-dev
$ git clone https://github.com/d0n0/Ping-Pong-Dash.git
$ cd ./Ping-Pong-Dash
$ npm install
```

## configure
config.jsonに、listenするインターフェース名とボタンのMACアドレスを書き込む
<br />

- インターフェースを確認
```
$ ifconfig
or
$ ip a
```
- Dash ButtonのMACアドレスを確認
```
要root権限
$ sudo npm run scan
コマンド入力後にボタンを押す
```
<br />

example)
```
$ cat ./config.json
{
  "listen_interface" : "wlan0",
  "button_mac_addr"  : "34:d2:70:a4:8c:85"
}
```

## run
```
要root権限
$ sudo node pingpong.js
```
<br />

永続的にバックグラウンドで動かしたい場合  
<br />

- forever利用
```
$ sudo npm install forever -g
$ sudo forever pingpong.js
```
- systemd利用
```
$ sudo cp Ping-Pong-Dash.service /etc/systemd/system/
$ sudo systemctl daemon-reload
$ sudo systemctl start Ping-Pong-Dash
```
