const audio1 = new Audio("Audio/MikkoHarju.mp3")
const audio2 = new Audio("Audio/JKarjalainen.mp3")
const audio3 = new Audio("Audio/JohannaKurkela.mp3")
const audio4 = new Audio("Audio/JVG.mp3")
const audio5 = new Audio("Audio/KaijaKoo.mp3")
const audio6 = new Audio("Audio/LauraNarhi.mp3")
const audio7 = new Audio("Audio/MikaelGabriel.mp3")
const audio8 = new Audio("Audio/ZenCafe.mp3")
const audio9 = new Audio("Audio/OlliHalonen.mp3")
const audio10 = new Audio("Audio/Pyhimys.mp3")
const bonusAudio = new Audio("Audio/BonusBiisi.mp3")

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