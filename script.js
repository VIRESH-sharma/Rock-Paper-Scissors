let userScore = 0;
let computerScore = 0;
const u =  document.querySelector('#user-score');
const c =  document.querySelector('#computer-score');

const msg = document.querySelector('#msg'); 
const draw = () => {
    console.log('It\'s a draw!');
    msg.innerText = 'It\'s a draw!';
    msg.style.color = 'white';
    msg.style.backgroundColor = 'black';
}

const winner = (uwin, computer) => {
    if (uwin) 
       { userScore++;
        u.innerText = userScore;
        msg.innerText =`You win! Computer chose ${computer}`;
        msg.style.color = 'white';
        msg.style.backgroundColor = 'green';

       }
    else 
       { computerScore++;
        c.innerText = computerScore;
          msg.innerText = `you lose! Computer chose ${computer}`;
          msg.style.color = 'white';
          msg.style.backgroundColor = 'red';
        }
}

const compchoice = () => {
    const options = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() *3);
    return options[randomIndex];
}


const playgame  = (userchoice) => {
    let uwin;
    console.log('You chose',userchoice);
    const computer = compchoice();  
    console.log( 'computer chose' ,computer);

    if (userchoice === computer) 
        draw();
    else if (userchoice=== 'rock' && computer === 'scissor'||
               userchoice === 'paper' && computer === 'rock'  ||
               userchoice === 'scissor' && computer === 'paper') 
       { uwin = true
        winner(uwin , computer);}
    else  
        {uwin = false;
        winner(uwin, computer);}
}

const choices = document.querySelectorAll('.choice');
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute('id');
        playgame(userchoice);
    });
})