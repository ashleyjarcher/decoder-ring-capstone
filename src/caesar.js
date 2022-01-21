// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
  const shifter = encode ? shift : -shift ;
  if (shifter === 0 || shifter > 25 || shifter < -25 || !shifter || shifter === NaN){
    return false
  }; 
  const sourceString = input.toLowerCase();
  let result = ""
  for (let i = 0; i < sourceString.length; i++){
    let charCode = sourceString.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122){
      charCode += shifter;
      if(charCode > 122){
        charCode -= 26;
      }
      if(charCode < 97){
        charCode += 26;
      }
      result += String.fromCharCode(charCode);
    }
    else { result += sourceString[i]
    }
  }
return result;
   }

    return {
      caesar,
    };
  })();

  module.exports = { caesar: caesarModule.caesar };
