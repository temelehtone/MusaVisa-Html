const audio1 = new Audio("Musavisa1/MikkoHarju.mp3")
const audio2 = new Audio("Musavisa1/JKarjalainen.mp3")
const audio3 = new Audio("Musavisa1/JohannaKurkela.mp3")
const audio4 = new Audio("Musavisa1/JVG.mp3")
const audio5 = new Audio("Musavisa1/KaijaKoo.mp3")
const audio6 = new Audio("Musavisa1/LauraNarhi.mp3")
const audio7 = new Audio("Musavisa1/MikaelGabriel.mp3")
const audio8 = new Audio("Musavisa1/ZenCafe.mp3")
const audio9 = new Audio("Musavisa1/OlliHalonen.mp3")
const audio10 = new Audio("Musavisa1/Pyhimys.mp3")
const bonusAudio = new Audio("Musavisa1/BonusBiisi.mp3")

const rightAnswer1 = document.getElementById("rightAnswer1")
const rightAnswer2 = document.getElementById("rightAnswer2")
const rightAnswer3 = document.getElementById("rightAnswer3")
const rightAnswer4 = document.getElementById("rightAnswer4")
const rightAnswer5 = document.getElementById("rightAnswer5")
const rightAnswer6 = document.getElementById("rightAnswer6")
const rightAnswer7 = document.getElementById("rightAnswer7")
const rightAnswer8 = document.getElementById("rightAnswer8")
const rightAnswer9 = document.getElementById("rightAnswer9")
const rightAnswer10 = document.getElementById("rightAnswer10")
const rightAnswerBonus = document.getElementById("rightAnswerBonus")

const playAudio1 = () => {
    audio1.play();
}
const playAudio2 = () => {
    audio2.play();
}
const playAudio3 = () => {
    audio3.play();
}
const playAudio4 = () => {
    audio4.play();
}
const playAudio5 = () => {
    audio5.play();
}
const playAudio6 = () => {
    audio6.play();
}
const playAudio7 = () => {
    audio7.play();
}
const playAudio8 = () => {
    audio8.play();
}
const playAudio9 = () => {
    audio9.play();
}
const playAudio10 = () => {
    audio10.play();
}
const playBonus = () => {
    bonusAudio.play();
}
const stopBonus = () => {
    bonusAudio.pause();
}



const showAnswer1 = () => {
    rightAnswer1.textContent = "1. Mikko Harju - Mä olen tässä"
}
const showAnswer2 = () => {
    rightAnswer2.textContent = "2. J. Karjalainen - Mennyt mies"
}
const showAnswer3 = () => {
    rightAnswer3.textContent = "3. Johanna Kurkela - Oothan tässä vielä huomenna"
}
const showAnswer4 = () => {
    rightAnswer4.textContent = "4. JVG - Vamos"
}
const showAnswer5 = () => {
    rightAnswer5.textContent = "5. Kaija Koo - Vapaa"
}
const showAnswer6 = () => {
    rightAnswer6.textContent = "6. Laura Närhi - Supersankari"
}
const showAnswer7 = () => {
    rightAnswer7.textContent = "7. Mikael Gabriel - Nallekarkit"
}
const showAnswer8 = () => {
    rightAnswer8.textContent = "8. Zen Cafe - Todella kaunis"
}
const showAnswer9 = () => {
    rightAnswer9.textContent = "9. Olli Halonen - Pohjola"
}
const showAnswer10 = () => {
    rightAnswer10.textContent = "10. Pyhimys - v!@%#mikko (Vittumikko)"
}
const showBonusAnswer = () => {
    rightAnswerBonus.textContent = "Bonus: Anna Erikkson - Kaikista kasvoista"
}

// New toggle functionality
const answers = {
    1: "1. Mikko Harju - Mä olen tässä",
    2: "2. J. Karjalainen - Mennyt mies",
    3: "3. Johanna Kurkela - Oothan tässä vielä huomenna",
    4: "4. JVG - Vamos",
    5: "5. Kaija Koo - Vapaa",
    6: "6. Laura Närhi - Supersankari",
    7: "7. Mikael Gabriel - Nallekarkit",
    8: "8. Zen Cafe - Todella kaunis",
    9: "9. Olli Halonen - Pohjola",
    10: "10. Pyhimys - v!@%#mikko (Vittumikko)",
    bonus: "Bonus: Anna Erikkson - Kaikista kasvoista"
};

const answerStates = {};

function toggleAnswer(id) {
    const isShown = answerStates[id] || false;
    const answerId = id === 'bonus' ? 'rightAnswerBonus' : `rightAnswer${id}`;
    const btnId = id === 'bonus' ? 'toggleBtnBonus' : `toggleBtn${id}`;
    const answerElement = document.getElementById(answerId);
    const buttonElement = document.getElementById(btnId);
    const iconElement = buttonElement.querySelector('i');
    
    if (isShown) {
        // Hide answer
        answerElement.textContent = "";
        buttonElement.classList.remove('hidden');
        iconElement.className = "fas fa-eye";
        buttonElement.innerHTML = `<i class="fas fa-eye"></i> SHOW ANSWER ${id === 'bonus' ? 'BONUS' : id}`;
        answerStates[id] = false;
    } else {
        // Show answer
        answerElement.textContent = answers[id];
        buttonElement.classList.add('hidden');
        iconElement.className = "fas fa-eye-slash";
        buttonElement.innerHTML = `<i class="fas fa-eye-slash"></i> HIDE ANSWER ${id === 'bonus' ? 'BONUS' : id}`;
        answerStates[id] = true;
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }