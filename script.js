// All the word to guess
//aseppp

const words = [
  "apel",
  "pisang",
  "jeruk",
  "anggur",
  "mangga",
  "semangka",
  "melon",
  "pepaya",
  "markisa",
  "nanas",
  "stroberi",
  "jambu",
  "durian",
  "alpukat",
  'kuini',
  'kiwi',
];

// Random word to display when user guessed correct letter
const trueLetterWords = [
  "Benar!",
  "Nice!",
  "Betul!",
  "Pas!",
  "Tepat sekali!",
  "Bagus!",
  "Benar!",
];

// Random word to display when user guessed incorrect letter
const falseLetterWords = [
  "Sayang sekali",
  "Coba huruf yang lain",
  "Hampir saja",
  "Coba pikir-pikir dulu deh",
  "Masih belum benar nih",
  "Huruf kamu sepertinya salah",
  "Pilihan kamu kurang tepat",
];

// random image to display when user lost
const hutaoExpression = [
  "assets/images/HuTao14.png",
  "assets/images/HuTao16.png",
];

// random iamge to display when user guessed incorrect letter
const hutaoExpressionFalse = [
  "assets/images/false/HuTao7.png",
  "assets/images/false/HuTao9.png",
  "assets/images/false/HuTao10.png",
  "assets/images/false/HuTao12.png",
  "assets/images/false/HuTao15.png",
];

// random image to display when user guessed correct letter
const hutaoExpressionTrue = [
  "assets/images/true/HuTao2.png",
  "assets/images/true/HuTao3.png",
  "assets/images/true/HuTao4.png",
  "assets/images/true/HuTao6.png",
  "assets/images/true/HuTao8.png",
];

// random word to display when user won
const winLetters = [
  "Wah, kamu benar. Nih hadiahmu ❤",
  "Kamu jago juga ya. Aku ada angpao ni!",
  "Hebat, ini hadiahmu 💕",
  "Boleh juga, ni aku ada sesuatu 😁",
  "Selamat kamu benar, ni angpao buatmu 🔥",
];


let word = words[Math.floor(Math.random() * words.length)];

// random word to display when user don't have any attempts left
let loseLetters = [
  `Yah, kesempatan kamu habis. 😓 Jawabannya "${word}"`,
  `Jawabannya "${word}" Semoga beruntung lain waktu 😢`,
  `Sayang sekali kesempatan kamu habis 😴 Jawabannya "${word}"`,
  `Jawabannya "${word}" Jangan menyerah, ayo coba lagi 😭`,
  `Kamu kurang beruntung 😔 Jawabannya "${word}"`,
];

let remainingAttempts = 10;
let guessedLetters = [];
let guessButton = document.getElementById('guessButton');
let attempstLeft = document.getElementById('attemptsLeft');
attemptsLeft.innerText = remainingAttempts;
let hutao = document.getElementById('hutao');


// Single word input, so user only can put one letter in input box
document
  .getElementById("letterInput")
  .addEventListener("input", function (event) {
    let inputValue = event.target.value;
    if (inputValue.length > 1 ) {
      event.target.value = inputValue.slice(0, 1);
    }
  });

  function checkInput() {
    const inputValue = document.getElementById("letterInput").value.trim(); // Get the trimmed input value
    if (!inputValue) { // Check if the input value is empty after trimming
      alert("Kamu belum memasukkan huruf, silakan masukkan satu huruf.");
      return false; // Return false to indicate that input is blank
    }
    return true; // Return true if input is not blank
  }

  function guessLetter() {
    if (!checkInput()) { // Check if input is blank
      return; // Exit the function if input is blank
    }
    
    // Rest of your guessLetter() function code...
  }
  
  const hintLetterIndex = Math.floor(Math.random() * word.length);
  const hintLetter = word[hintLetterIndex];


  // Initialize the word to guess
  let displayWord = "";
  for (let i = 0; i < word.length; i++)  {
  if (i === hintLetterIndex) {
    displayWord += hintLetter + ' ';
  } else {
    displayWord += '_ ';
  } 
}
  
  
document.getElementById("wordToGuess").innerText = displayWord.trim();
document.getElementById("gameStatus").innerText =
"Input sebuah huruf pada kolom input dan kamu memiliki ❤ x 10 nyawa, semoga beruntung :3";

function guessLetter() {
  const letter = document
    .getElementById("letterInput")
    .value.toLowerCase();
  document.getElementById("letterInput").value = ""; // Clear the input field

  if (!letter) {
    setTimeout(function() {
    alert("Sepertinya kamu belum memasukkan huruf, mohon masukkan minimal 1 huruf di kolom input")
    },600);
    return; // Exit the function if input is blank
  }

  if (guessedLetters.includes(letter)) {
    alert(`Kamu udah input huruf "${letter}" deh, coba huruf yang lain .`);
     return;   
    }

  guessedLetters.push(letter);

  let newDisplayWord = "";
  let correctGuess = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      newDisplayWord += letter + " ";
      correctGuess = true;

      const randomIndexLetterTrue = Math.floor(
        Math.random() * trueLetterWords.length
      );
      const randomTrueLetterWord = trueLetterWords[randomIndexLetterTrue];
      document.getElementById("gameStatus").innerText =
        randomTrueLetterWord;

      const randomIndexHutaoTrue = Math.floor(
        Math.random() * hutaoExpressionTrue.length
      );
      const hutaoExTrue = hutaoExpressionTrue[randomIndexHutaoTrue];
      const imgTrue = document.getElementById("hutao");
      imgTrue.src = hutaoExTrue;
    } else {
      newDisplayWord += displayWord[2 * i] + " ";
    }
  }
  displayWord = newDisplayWord.trim();
  document.getElementById("wordToGuess").innerText = displayWord;

  if (!correctGuess) {
    remainingAttempts--;
    
    attemptsLeft.innerText = remainingAttempts;

    const randomIndexLetterFalse = Math.floor(
      Math.random() * trueLetterWords.length
    );
    const randomFalseLetterWord =
      falseLetterWords[randomIndexLetterFalse];
    document.getElementById("gameStatus").innerText =
      randomFalseLetterWord;

    const randomIndexHutaoFalse = Math.floor(
      Math.random() * hutaoExpressionFalse.length
    );
    const hutaoExFalse = hutaoExpressionFalse[randomIndexHutaoFalse];
    const imgFalse = document.getElementById("hutao");
    imgFalse.src = hutaoExFalse;
  }

  if (displayWord === word.split("").join(" ")) {

    let win = document.getElementById("hutao");
    win.src = "assets/images/true/HuTao1.png";

    const randomIndexWinLetter = Math.floor(
      Math.random() * winLetters.length
    );
    guessButton.disabled = true;
    guessButton.style.color = "black";

    const randomWinLetter = winLetters[randomIndexWinLetter];
    document.getElementById("gameStatus").innerText = randomWinLetter;
  } else if (remainingAttempts === 0) {

    const randomIndexLoseLetter = Math.floor(
      Math.random() * loseLetters.length
    );
    const randomLoseLetter = loseLetters[randomIndexLoseLetter];
    document.getElementById("gameStatus").innerText =
      randomLoseLetter;

    const randomIndexHutaoEx = Math.floor(
      Math.random() * hutaoExpression.length
    );
    const hutaoEx = hutaoExpression[randomIndexHutaoEx];
    const imgHutaoEx = document.getElementById("hutao");
    imgHutaoEx.src = hutaoEx;
  }
}

function refreshButton() {
  // location.reload();
  resetGame();
}

let body = document.body;
let themeButton = document.getElementById('themeButton');
let popup = document.getElementById('popup');
let  resetAlert = document.getElementById('resetAlert');

function darkMode(){
  body.classList.toggle('modegelap');

  if (body.classList == 'modegelap'){
    themeButton.textContent = ('Mode Terang');
    popup.style.backgroundColor = ('#121212');
    popup.style.color = ('white');
    welcome.style.backgroundColor = ('#121212');
    welcome.style.color = ('white');
    resetAlert.style.backgroundColor = ('#121212');
    resetAlert.style.color = ('white');

  } else if (body.classList != 'modegelap') {
    themeButton.textContent = ('Mode Gelap');
    popup.style.backgroundColor = ('white');
    popup.style.color = ('black');
    welcome.style.backgroundColor = ('white');
    welcome.style.color = ('black');
    resetAlert.style.backgroundColor = ('white');
    resetAlert.style.color = ('black');
  }
}
showWelcomeGate(); 
//Function to show welcome gate massage
function showWelcomeGate() {
  let welcome = document.getElementById('welcome');
  welcome.style.display = 'block';
}

//Function to close welcome gate massage
function closeWelcomeGate() {
  welcome.style.display = 'none';
  showPopup();
}

  // Function to show the popup
  function showPopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'block';
  }

  // Function to close the popup
  function closePopup() {
    popup.style.display = 'none';
  }

    // Function to show the alert when reset
    function showResetAlert() {
      let resetAlert = document.getElementById('resetAlert');
      resetAlert.style.display = 'block';
    }
  
    // Function to close the alert when reset
    function closeResetAlert() {
      resetAlert.style.display = 'none';
    }

  function resetGame() {
    // Reset game state
    word = words[Math.floor(Math.random() * words.length)];
    remainingAttempts = 10;
    guessedLetters = [];
    
    // Initialize display word
    const hintLetterIndex = Math.floor(Math.random() * word.length);
  const hintLetter = word[hintLetterIndex];
    displayWord = "";
    for (let i = 0; i < word.length; i++) {
      if (i === hintLetterIndex) {
        displayWord += hintLetter + ' ';
      } else {
        displayWord += '_ ';
      } 
    }
  
    // Update UI
    document.getElementById("wordToGuess").innerText = displayWord.trim();
    document.getElementById("gameStatus").innerText = "Input sebuah huruf pada kolom input dan kamu memiliki ❤ x 10 nyawa, semoga beruntung :3";
    attemptsLeft.innerText = remainingAttempts;
    guessButton.disabled = false;
    hutao.src = "assets/images/HuTao11.png";

    closeResetAlert();
  }

  darkMode();
  closeResetAlert();