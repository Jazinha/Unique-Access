let numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specialChars = ['@','%','$','^','?','(','}','{',']','~','-',':',',',')','_','\\','/',"'",'.','[','+','!','#'];
let lowerCaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


function getRandomChar(chars) {
  let randIndex = Math.floor(Math.random() * chars.length);
  let randElement = chars[randIndex];
  return randElement;
}


function promptOptions() {
  let length = parseInt(
    prompt('Enter number of characters for your password: ')
  );

  if (Number.isNaN(length)) {
    alert('Please try again by entering a number!');
    return null;
  }

  if (length < 8) {
    alert('Password must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password must less than 128 characters');
    return null;
  }

  let includedSpecialChar = confirm(
    'Click OK include special characters.'
  );

  let includedNumericChars = confirm(
    'Click OK to include numeric characters.'
  );

  let includedLowercaseChars = confirm(
    'Click OK to include lowercase characters.'
  );

  let includedUppercaseChars = confirm(
    'Click OK to include uppercase characters.'
  );

  if (
    includedSpecialChar === false &&
    includedNumericChars === false &&
    includedLowercaseChars === false &&
    includedUppercaseChars === false
  ) {
    alert('At least one character type must be selected');
    return None;
  }

  let pwParameter = {
    length: length,
    includedSpecialChar: includedSpecialChar,
    includedNumericChars: includedNumericChars,
    includedLowercaseChars: includedLowercaseChars,
    includedUppercaseChars: includedUppercaseChars
  };

  return pwParameter;
}

function generatePassword() {
  let options = promptOptions();
  let result = [];
  let includedChars = [];
  let selectedChars = [];
  if (!options) return null;

  if (options.includedSpecialChar) {
    includedChars = includedChars.concat(specialChars);
    selectedChars.push(getRandomChar(specialChars));
  }

  if (options.includedNumericChars) {
    includedChars = includedChars.concat(numericChars);
    selectedChars.push(getRandomChar(numericChars));
  }

  if (options.includedLowercaseChars) {
    includedChars = includedChars.concat(lowerCaseChars);
    selectedChars.push(getRandomChar(lowerCaseChars));
  }

  if (options.includedUppercaseChars) {
    includedChars = includedChars.concat(upperCaseChars);
    selectedChars.push(getRandomChar(upperCaseChars));
  }

  for (let i = 0; i < options.length; i++) {
    let possibleCharacter = getRandomChar(includedChars);
    result.push(possibleCharacter);
  }

  for (let i = 0; i < selectedChars.length; i++) {
    result[i] = selectedChars[i];
  }

  return result.join('');
}

let generateBtn = document.querySelector('#generate');
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}
generateBtn.addEventListener('click', writePassword);
