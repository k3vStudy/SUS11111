const fs =  require('fs'); 
let str = "!"
for(let i = 0; i < 100000000;i++){
  let rand = Math.random();
  switch (true) {
    case rand >= 0.5:
      str+="!"
      break;
    case rand <= 0.5:
      str+="1"
  }
  fs.appendFileSync("susfile.txt",str)
  str="";
}
//console.log(str)