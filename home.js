function calculate() {
    var x = prompt("Enter paramter value 1");
    var y = prompt("Enbter parameter value 2");
    var val1 = (x*y);
    var val2 = (x/y);
    var h1 = document.createElement('h1');
    var answer = document.createTextNode("The Parameter product and quotients are : "+val1+" and "+val2);
    h1.appendChild(answer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

function reset() {

    window.location.reload();
}


function imgGen() {
    var img = document.createElement('img');
    var div = document.getElementById('img-result');
    img.src = "download (1).jpg";
    div.appendChild(img);
}

function remImg() {
    document.getElementById('img-result').remove();
}


//// Rock,Paper,Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice); 
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    var results = decideWinner(humanChoice, botChoice);
    console.log(results);
    var message = finalMessage(results);
    rpsFrontEnd(botChoice);

}

function randToRpsInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice) {
    var rpsDatabase = {
        'rock': {'rock': 0.5, 'paper': 0, 'scissors': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'rock': 0,'paper': 1, 'scissors': 0.5},
    }

    var yourScore = rpsDatabase[humanChoice][botChoice]; 
    var botScore = rpsDatabase[botChoice][humanChoice];
    
    return [yourScore, botScore]; 
}

function finalMessage([yourScore, botScore]) {
    if(yourScore === 0){
        document.getElementById('textResult').innerHTML ='you lose' ;
        console.log('you lose');
    }
    else if (yourScore === 0.5){
        document.getElementById('textResult').innerHTML = 'Draw match' ;
        console.log('draw match');

    }
    else {
        document.getElementById('textResult').innerHTML ='you win' ;
        console.log('you win');
    }
}

function rpsFrontEnd (botChoice) {
    var img = document.createElement('img');
    var h2 = document.createElement('h2');
    var textRpsResult = document.createTextNode("Computer Chose : ");
    h2.appendChild(textRpsResult);
    var div = document.getElementById('imgResult');

   
    if (botChoice === 'rock'){       
        document.getElementById('botResult').appendChild(h2);
        img.src = "rock.jpg";
        
        div.appendChild(img);
       

    }
    else if (botChoice === 'paper'){
        document.getElementById('botResult').appendChild(h2);
        img.src = "paper.png";
        div.appendChild(img);
    }
    else {
        document.getElementById('botResult').appendChild(h2);
        img.src = "scissors2.png";
        div.appendChild(img);
    }
}

function resetGame(){   
    
        window.location.reload();
    
    
}

/// Odd or Even game


function oddChoice() {
    var y = prompt("Enter your Choice");
    var compChoice = randThrow();
    var img1 = document.createElement('img');
    var div1 = document.getElementById('oddEveResults');    
    var sum1 = +y + +compChoice;
    document.getElementById('oddEveTextResults').innerHTML = "You Chose : " + y + " Computer Chose : "+ compChoice;
    document.getElementById('theSumResults').innerHTML = "The sum is : "+ sum1;
    if (sum1%2 !== 0){
        console.log('The toss is odd - You Win');
        img1.src = 'winner.jpg';
        div1.appendChild(img1);
    }
    else {
        console.log('The toss is even - You Lose');
        img1.src="loser.png";
        div1.appendChild(img1);
    }
}
function evenChoice() {
    var y = prompt("Enter your Choice");
    var compChoice = randThrow();
    var sum1 = +y + +compChoice;
    var img2 = document.createElement('img');
    var div2 = document.getElementById('oddEveResults');
    document.getElementById('oddEveTextResults').innerHTML = "You Chose : " + y + " Computer Chose : "+ compChoice;
    document.getElementById('theSumResults').innerHTML = "The sum is : "+ sum1;
    if (sum1%2 === 0) {
        console.log('The toss is even- You Win');
        img2.src = 'winner.jpg';
        div2.appendChild(img2);
    }
    else {
        console.log('The toss is odd- You Lose');
        img2.src="loser.png";
        div2.appendChild(img2);
    }
}

function randThrow() {
    return Math.floor(Math.random()*10);

}

function gameStart() {
    window.location.reload();
}

function oddFrontEnd(){

}

/////////////
