'use strict'

let catalog = ["スマホ脳","オーデュボンの祈り","嫌われる勇気","探偵ガリレオ","星の王子様","史上最強の哲学入門"];

// ランダムに数字を入れる配列
let randoms = [];

// 本の数
let max = 6;

// 重複していないかチェックしながら配列にランダムに数字をいれていく
for(let a = 1; a <= max; a++){
  while(true){
    let tmp = Math.floor( Math.random() * max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
}

for (let i = 1; i <= 4; i++) {
  // 各ブロックに配列内の本の名前をいれていく
  document.getElementById('Bname' + i).textContent = catalog[randoms[i - 1]];
  // 配列が0からカウントされるのでマイナス１している

  // リンク先の指定（各題名のidに飛ばす）
  document.getElementById('Bname' + i).href = "sub/catalog.html#" + catalog[randoms[i - 1]]
}

