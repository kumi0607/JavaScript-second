// head要素を取得し中身を出力する
console.log(document.head);
// body要素を取得し中身を出力する
console.log(document.body);

// windowオブジェクトの中身を出力する
console.log(window);

// html要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'));
// html要素をclassで取得し、中身を出力する
console.log(document.getElementsByClassName('list'));

console.log(document.getElementsByClassName('heading'));

// 複数のhtml要素を取得し、定数に代入する
const headings =document.getElementsByClassName('heading');

// 複数のhtml要素を1つずつ取得し、中身を出力する
for (let i=0; i < headings.length; i++) {
    console.log(headings[i]);
}

// 新しくli要素を作成し、定数に代入する
const li = document.createElement('li');

// 新しく作成したliにテキストを追加する
li.textContent = 'javascriptで新しく作成したリスト';

// ui要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);