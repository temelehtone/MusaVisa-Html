const audio1 = new Audio("Musavisa2/AnssiKela1972.mp3")
const audio2 = new Audio("Musavisa2/Faija.mp3")
const audio3 = new Audio("Musavisa2/XTC.mp3")
const audio4 = new Audio("Musavisa2/KaunisRietasOnnellinen.mp3")
const audio5 = new Audio("Musavisa2/SurullinenKlovni.mp3")
const audio6 = new Audio("Musavisa2/NeitiKesäheinä.mp3")
const audio7 = new Audio("Musavisa2/MaailmaOnSun.mp3")
const audio8 = new Audio("Musavisa2/KesäYö.mp3")
const audio9 = new Audio("Musavisa2/LevotonTuhkimo.mp3")
const audio10 = new Audio("Musavisa2/HetkenTäsKaikesOnJärkee.mp3")
const audio11 = new Audio("Musavisa2/LokinPäälläLokki.mp3")
const bonusAudio = new Audio("Musavisa2/BonusBiisi.mp3")

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
const rightAnswer11 = document.getElementById("rightAnswer11")
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
const playAudio11 = () => {
    audio11.play();
}
const playBonus = () => {
    bonusAudio.play();
}
const stopBonus = () => {
    bonusAudio.pause();
}



const showAnswer1 = () => {
    rightAnswer1.textContent = "1. Anssi Kela - 1972"
}
const showAnswer2 = () => {
    rightAnswer2.textContent = "2. JVG, Nopsajalka - Faija"
}
const showAnswer3 = () => {
    rightAnswer3.textContent = "3. Lukas Leon, Cheek, Etta - XTC"
}
const showAnswer4 = () => {
    rightAnswer4.textContent = "4. Kaija Koo - Kaunis Rietas Onnellinen"
}
const showAnswer5 = () => {
    rightAnswer5.textContent = "5. MKDMSK, Pyhimys - Surullinen Klovni"
}
const showAnswer6 = () => {
    rightAnswer6.textContent = "6. Intiaanikesä - Neiti Kesäheinä"
}
const showAnswer7 = () => {
    rightAnswer7.textContent = "7. Tehosekoitin - Maailma On Sun"
}
const showAnswer8 = () => {
    rightAnswer8.textContent = "8. Pariisin Kevät - Kesäyö"
}
const showAnswer9 = () => {
    rightAnswer9.textContent = "9. Dingo - Levoton Tuhkimo"
}
const showAnswer10 = () => {
    rightAnswer10.textContent = "10. Elastinen, Johanna Kurkela - Hetken tässä kaikes on järkee"
}
const showAnswer11 = () => {
    rightAnswer11.textContent = "11. Apulanta - Lokin päällä lokki"
}
const showBonusAnswer = () => {
    rightAnswerBonus.textContent = "Bonus: Eppu Normaali - Baarikärpänen"
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }