// 変数numに0~4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);

console.log(num);

if (num === 4) {
  console.log("1等です");
} else if (num === 3) {
  console.log("2等です");
} else {
  console.log("はずれです");
}

// 変数を書き換えたいときはletの宣言をせず変数の中身の身を変更する
num = Math.floor(Math.random() * 5);

console.log(num);

switch (num) {
  case 2:
    console.log("小吉です");
    break;
  case 3:
    console.log("中吉です");
    break;
  case 4:
    console.log("大吉です");
    break;
  default:
    console.log("末吉です");
    break;
}
