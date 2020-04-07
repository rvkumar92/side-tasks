(function () {
  const generatorBtn = document.querySelector("#generatePwd");
  generatorBtn.addEventListener("click", generatePassword, false);
  const password = document.querySelector("#password");
  function generatePassword(event) {
    const pwdRequirements = {
      length: 16,
      content: {
        digits: [5, 6, 4, 7, 3, 8, 2, 9, 1, 0],
        uppercase: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
        ],
        lowercase: [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ],
        special: ["!", "@", "#", "$", "*", "~", "^", ",", ".", "?"],
      },
    };
    let index = 1;
    const pwdContent = Object.keys(pwdRequirements.content);
    let generatedPassword = "";
    do {
      const pwdContentNum = (Math.random() * pwdContent.length) | 0;
      // I have got random number to select any of the password content
      const charactersSelection =
        pwdRequirements.content[pwdContent[pwdContentNum]];
      generatedPassword +=
        charactersSelection[(Math.random() * charactersSelection.length) | 0];
      index++;
    } while (index <= pwdRequirements.length);
    password.appendChild(document.createTextNode(generatedPassword));
  }
})();
/* 
    Thinking of taking random selection between the requirements and 
    from the taken object again taking a random value and append it 
    to the password and finally reveal the password to the user.

    An algorithm I came up with :) 
*/
