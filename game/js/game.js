let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let choices = ['kamen', 'bumaga', 'nozhnica']

window.onload = function(){
    for (let i= 0; i < 3; i++) {
        let choice = document.createElement('img')
        choice.id = choices[i];
        choice.src = choices[i] + '.png';
        choice.addEventListener('click', selectChoice)
        document.getElementById("choices").append(choice);
    }
}   

function selectChoice(){
    you = this.id
    document.getElementById("your-choice").src = you + ".png"

    opponent = choices[Math.floor(Math.random() * 3)]
    document.getElementById('opponent-choice').src = opponent + ".png"


    if(you == opponent){
        yourScore += 1;
        opponentScore += 1;
    }else{
        if (you == 'kamen') {
            if (opponent == 'nozhnica') {
                yourScore += 1;
            }
            else if(opponent == 'bumaga'){
                opponentScore += 1;
            }
        }
   
        else if (you == 'nozhnica') {
            if (opponent == 'bumaga') {
                yourScore += 1;
            }
            else if(opponent == 'kamen'){
                opponentScore += 1;
            }
        }

        else if (you == 'bumaga') {
            if (opponent == 'kamen') {
                yourScore += 1;
            }
            else if(opponent == 'nozhnica'){
                opponentScore += 1;
            }
        }
    }
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
}

