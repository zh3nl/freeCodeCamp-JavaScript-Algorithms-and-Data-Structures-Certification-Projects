function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = ""; 
    for (let i = 0; i < str.length; i++) {
      if(alphabet.indexOf(str[i]) >= 13) {
        result += alphabet[alphabet.indexOf(str[i]) - 13];
      } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) {
        result += alphabet[alphabet.indexOf(str[i]) + 13]; 
      } else {
        result += str[i]; 
      }
    }
    return result;
  }
  
  let answer = rot13("SERR PBQR PNZC");
  console.log(answer);