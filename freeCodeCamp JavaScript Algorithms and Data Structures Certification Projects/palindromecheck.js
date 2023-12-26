function palindrome(str) {
    str = str.replace(/\W|_/g, "").toLowerCase();
    let reverse = str.split("").reverse().join("").toLowerCase();
    if (str === reverse) {
      return true;
    } 
    return false; 
  }
  
  palindrome("eye");