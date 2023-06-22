const defaultFolder = "Musavisa3/"
const mimeType = ".mp3";

let currAudio;


const audioObjects = [
    {
        fn: "satasen_laina",
        answer: "Nylon Beat - Satasen laina"
    },
    {
        fn: "timantit_on_ikuisia",
        answer: "Cheek - Timantit on ikuisia"
    },
    {
        fn: "rafaelin_enkeli",
        answer: "Pekka Ruuska - Rafaelin enkeli"
    },
    {
        fn: "elaman_nalka",
        answer: "Elämän nälkä - Pave Maijanen"
    },
    {
        fn: "saannot_rakkaudelle",
        answer: "Anna Puu - Säännöt rakkaudelle"
    },
    {
        fn: "esson_baariin",
        answer: "Esson baariin - Poju"
    },
    {
        fn: "viimeinen_tanssi",
        answer: "BEHM, Olavi Uusivirta - Viimeinen tanssi"
    },
    {
        fn: "armo",
        answer: "Apulanta - Armo"
    },
    {
        fn: "puistossa",
        answer: "Anssi Kela - Puistossa"
    },
    {
        fn: "juodaan_viinaa",
        answer: "Hector - Juodaan viinaa"
    },
    {
        fn: "sata_kesaa",
        answer: "Paula Koivuniemi - Sata kesää, tuhat yötä",
        isBonus: true
    },
]

const audios = [];

function init() {
    audioObjects.forEach((obj, i) => {
        addElement(obj, i)
    })
}

init()

function addElement(obj, i) {
    const name = obj.isBonus ? "BONUS" : (i + 1);
    const wrapper = `<div class="musavisa-buttons-div">
                        <button onclick="playAudio('${obj.fn}')" class="musavisa-play">PLAY ${name}</button>
                        <button onclick="showAnswer('${obj.answer}', ${i})" class="musavisa-show">SHOW ANSWER ${name}</button>
                        <button onclick="hideAnswer(${i})" class="musavisa-hide">HIDE ANSWER ${name}</button>
                        <h3 class="musavisa-right-answer-text" id="rightAnswer${i}"></h3>
                    </div>`
    $(wrapper).appendTo($("#musavisa-songs"))
}

function playAudio(fn) {
    if (currAudio) {
        stopAudio()
    }
    currAudio = new Audio(defaultFolder + fn + mimeType)
    currAudio.play();
}

const stopAudio = () => {
    if (!currAudio) return;
    currAudio.pause();
    currAudio = null;
}

function showAnswer(answer, i) {
    $(`#rightAnswer${i}`).text(`${i + 1}. ${answer}`)
}

function hideAnswer(i) {
    $(`#rightAnswer${i}`).text("")
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }