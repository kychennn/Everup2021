let highScore = 0;

let secretNum = Math.trunc(Math.random() * 100)+1;

console.log(secretNum); 


let score = 10;

const textElement = document.querySelector('.text1');


const changeMsg = function (msg) 
{
    textElement.textContent = msg;
};


document.querySelector('.check').addEventListener('click',function()
{
    const inputNum = Number(document.querySelector('.input').value);
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.input').value = '';


    if(!inputNum)
    {
        changeMsg('ERROR - EMPTY');
    }

    else if (!Number(inputNum))
    {
        changeMsg('ERROR - Invalid number!');
    }

    else if(inputNum === secretNum)
    {
        changeMsg('Congrats! You win!');
        document.querySelector('body').style.background = 'linear-gradient(to top right, rgb(25, 59, 54), rgb(48, 186, 165))';
        document.querySelector('.secretbox').style.background = 'powderblue';
        document.querySelector('.secretbox').textContent = secretNum;
        document.querySelector('.input').disabled = 'true';
        guessHistory(inputNum);
        document.querySelector('.check').disabled = 'true';


        if(score > highScore)
        {
            highScore = score;
            document.querySelector('.highScore').textContent = score;
        }
    }

    else if(inputNum !== secretNum)
    {
        guessHistory(inputNum);
        if (score > 0)
        {
            let warning = inputNum > secretNum ? 'TOO HIGH' : 'TOO LOW';
            changeMsg(warning);

        }
        else
        {
            changeMsg('Sorry! You lose!');
            document.querySelector('.input').disabled = 'true';
            score = 0;
            document.querySelector('.check').disabled = 'true';
        }
    }
});


document.querySelector('.play').addEventListener('click',function()
{
    secretNum = Math.trunc(Math.random() * 100)+1;
    console.log(secretNum); 
    score = 10;
    changeMsg('Game restart!');
    document.querySelector('.score').textContent = score;
    document.querySelector('.input').disabled = 0;
    document.querySelector('body').style.background = 'linear-gradient(to bottom left, #e66465, #9198e5)';
    document.querySelector('.Guessnumber').textContent = '';
    guessArray = [];
    document.querySelector('.check').disabled = 0;
    document.querySelector('.input').value = '';
    document.querySelector('.secretbox').textContent = '?';
});


let guessArray = [];
function guessHistory(num){
    guessArray.unshift(num);
    console.log(guessArray);
    document.querySelector('.Guessnumber').textContent = guessArray;
}