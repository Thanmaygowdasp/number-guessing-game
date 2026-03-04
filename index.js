let maxattempt = document.getElementById("Maxattempt")
let maxchancebtn = document.getElementById("maxchancebtn")
let userattempt = document.getElementById("userattempt")
let userattemptasked = document.getElementById("userattemptasked") 
let computergenerated = document.getElementById("computergenerated")
let generatebtn = document.getElementById("generatebtn")
let userguessingnumber = document.getElementById("userguessingnumber")
let userguessingbtn = document.getElementById("userguessingbtn")
let userguessed = document.getElementById("userguessed")
let reset = document.getElementById("resetbtn")
let difference = document.getElementById("difference")
let winner = document.getElementById("winner")

// user chances
let user_asked_chance = 0
let attempts = 0
maxchancebtn.addEventListener("click", function(){
    user_asked_chance = Number(maxattempt.value)
    attempts = user_asked_chance
    userattemptasked.textContent = attempts
})

//computer generated
let generated_number = 0
generatebtn.addEventListener("click", function(){
    generated_number = Math.floor(Math.random()*100)+1
    computergenerated.textContent = "Generated"
    if(attempts === 0){
        generatebtn.disabled = true
        userguessingbtn.disabled = true
        alert("Please select Your Chances First! please Refresh and play")
    }
})

// user number
let user_guessing_number = 0
userguessingbtn.addEventListener("click", function(){

    if(attempts==0){
        userattemptasked.textContent = "Sorry Try Again"
        return 0
    }
    user_guessing_number = Number(userguessingnumber.value)
    userguessed.textContent = user_guessing_number

    findingdifference()

    attempts--
    userattemptasked.textContent = attempts

    if(attempts == 0 && user_guessing_number!=generated_number){
        difference.textContent = "You Failed"
        userattemptasked.textContent = "Sorry Try Again"
        userguessingbtn.disabled = true
        generatebtn.disabled = true
    }

    if(user_guessing_number == generated_number){
        userattemptasked.textContent = "You Won! Try Again By resetting"
        userguessingbtn.disabled = true
        generatebtn.disabled = true
    }
})

function findingdifference(){

    let subtracted = Math.abs(user_guessing_number - generated_number)

    if(user_guessing_number>generated_number){
        difference.textContent = "Your Far From = " + subtracted
    }else if(generated_number>user_guessing_number){
        difference.textContent = "Your Far From = " + subtracted
    }else{
        difference.textContent = ""
        winner.textContent = "You Won The Game"
        userattemptasked.textContent = "You Won"
        computergenerated.textContent = generated_number
        celebrateWin()
    }
}

// reset part
reset.addEventListener("click", function(){
    attempts = 0
    user_asked_chance = 0
    generatebtn.disabled = false
    generated_number = 0
    userguessingbtn.disabled = false
    computergenerated.textContent = ""
    user_guessing_number = 0
    userguessed.textContent = ""
    difference.textContent = ""
    winner.textContent = ""
    userattemptasked.textContent = ""
})

function celebrateWin() {

    var duration = 2000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0.3, y:1 }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 0.7, y: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

