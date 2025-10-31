const defaultFolder = "Musavisa4/"
const mimeType = ".mp3";

let currAudio;

const audioObjects = [
    {
        fn: "bonnie_holding_out",
        answer: "Holding Out for a Hero - Bonnie Tyler"
    },
    {
        fn: "britney_baby_one_more",
        answer: "Baby One More Time - Britney Spears"
    },
    {
        fn: "frederik_volga",
        answer: "Volga - Frederik"
    },
    {
        fn: "indica_ikuinen",
        answer: "Ikuinen Virta - Indica"
    },
    {
        fn: "irwin_harmalainen",
        answer: "Härmäläinen perusjuntti - Irwin Goodman"
    },
    {
        fn: "maustetytot_taksilla",
        answer: "Taksilla Vaalaan - Maustetytöt"
    },
    {
        fn: "tauski_sina",
        answer: "Sinä vain - Tauski"
    },
    {
        fn: "teflon_maradona",
        answer: "Maradona 86 - Teflon Brothers"
    },
    {
        fn: "yankee_gasolina",
        answer: "Gasolina - Daddy Yankee"
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
                        <button onclick="toggleAnswer('${obj.answer}', ${i})" class="musavisa-toggle" id="toggleBtn${i}">
                            <i class="fas fa-eye"></i> SHOW ANSWER ${name}
                        </button>
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

// New toggle functionality
const answerStates = {};

function toggleAnswer(answer, i) {
    const isShown = answerStates[i] || false;
    const answerId = `rightAnswer${i}`;
    const btnId = `toggleBtn${i}`;
    const answerElement = document.getElementById(answerId);
    const buttonElement = document.getElementById(btnId);
    
    if (isShown) {
        // Hide answer
        answerElement.textContent = "";
        buttonElement.classList.remove('hidden');
        buttonElement.innerHTML = `<i class="fas fa-eye"></i> SHOW ANSWER ${i + 1}`;
        answerStates[i] = false;
    } else {
        // Show answer
        answerElement.textContent = `${i + 1}. ${answer}`;
        buttonElement.classList.add('hidden');
        buttonElement.innerHTML = `<i class="fas fa-eye-slash"></i> HIDE ANSWER ${i + 1}`;
        answerStates[i] = true;
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