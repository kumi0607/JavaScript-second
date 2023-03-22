// output-btnと言うidを持つHTML要素を取得し定数に代入する
const btn = document.getElementById("output-btn");

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener("click", () => {
  console.log("クリックされました");
});

// add-btnというidを持つHTML要素を取得し定数に代入する
const addBtn = document.getElementById("add-btn");

// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById("parent-list");

// html要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener("click", () => {
  const childList = document.createElement("li");
  // 作成したli要素に文字を入れる
  childList.textContent = "これはlist要素です";

  // 作成したli要素をul要素の子要素として末尾に追加する
  parentList.appendChild(childList);
});

// count-btnというidを持つHTML要素を取得し定数に代入する
const countBtn = document.getElementById("count-btn");

// HTML要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener("click", () => {
  // テキストボックスに入力された文字列を取得する
  const text = document.forms.textForm.textBox.value;

  // 取得した文字列の文字数を出力する
  console.log(text.length + "文字");
});

const areaBtn = document.getElementById("area-btn");

areaBtn.addEventListener("click", () => {
  // 選択されたラジオボタンの値を出力する
  const area = document.forms.areaForm.area.value;

  // 取得した値を出力する
  console.log(area);
});

const os = document;
