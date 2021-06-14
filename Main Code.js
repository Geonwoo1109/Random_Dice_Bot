const kalingModule = require('kaling').Kakao();
const Kakao = new kalingModule();
Kakao.init(''); //자스키
Kakao.login('',''); //아디•비번

const allsee = "\u200d".repeat (500);
const Dice_url = {
  "1":"https://i.ibb.co/hg5cy76/240px-Dice-1-svg.png",
  "2":"https://i.ibb.co/jhmz9JX/240px-Dice-2-svg.png",
  "3":"https://i.ibb.co/1rgmRD2/240px-Dice-3-svg.png",
  "4":"https://i.ibb.co/6nHJFD6/240px-Dice-4-svg.png",
  "5":"https://i.ibb.co/d568my6/557px-Dice-5-svg.png",
  "6":"https://i.ibb.co/KX7c1cb/240px-Dice-6-svg.png"};
let Count = 0;
let Dice = ["⚀","⚁","⚂","⚃","⚄","⚅"];
var Dice_arr = [];
var Sum_arr = [];
var Sum = 0;
var Random = 0;

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {


if (msg.startsWith(".주사위 ")) {
  Count = Number(msg.substr(5));
  if (Count > 0 && Count < 6) {
    for (i=0; i<Count; i++) {
      Random = Math.floor(Math.random()*6);
      replier.reply(Dice[Random]);
      Sum_arr.push(Random + 1);
      Sum = Sum + Random + 1;
    }
    replier.reply("[결과]\n"+Sum_arr.join("+") + " = " + Sum);
    Sum_arr = [];
    Sum = 0;
  } else if (Count > 0 && Count < 1001) { //1000개 
    for (i=0; i<Count; i++) {
      Random = Math.floor(Math.random()*6);
      Dice_arr.push(Dice[Random]);
      Sum_arr.push(Random + 1);
      Sum = Sum + Random + 1;
    }
    replier.reply("["+Count+"개의 주사위 결과]\n" + allsee + "\n\n"
    + Dice_arr.join("") +"\n" + Sum_arr.join("+") + " = " + Sum);
    Dice_arr = [];
    Sum_arr = [];
    Sum = 0;
  }
}

if (msg == "..주사위")
  try {
Kakao.send(room, {"link_ver" : "4.0",
                  "template_id" : 47989,
                  "template_args" : {
                    Dice1: "",
                    Dice1_Img: Dice_url[String(Math.floor(Math.random()*6)+1)],
                    Dice2: "",
                    Dice2_Img: Dice_url[String(Math.floor(Math.random()*6)+1)],
                    Dice3: "",
                    Dice3_Img: Dice_url[String(Math.floor(Math.random()*6)+1)],
                    Dice4: "",
                    Dice4_Img: Dice_url[String(Math.floor(Math.random()*6)+1)],
                    Dice5: "",
                    Dice5_Img: Dice_url[String(Math.floor(Math.random()*6)+1)]
                 }
                 }, "custom");

} catch(e) {
  replier.reply(e);
}


} 

