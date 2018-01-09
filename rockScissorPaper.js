var choices = ["rock","scissor","paper"];

var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissor = document.getElementById('scissors');
var results = document.getElementById('results');


function getRandom(){
	return Math.floor(Math.random() * 3);
}

rock.addEventListener('click',function(event)
{	
	// alert('pressed');
	var x = choices[getRandom()];
	console.log(x);
	// results.innerText = 'Player: Rock vs ' + x; 
	if (x === "scissor") {
		alert('You Won, they chose scissor');
	} else if(x === "paper"){
		alert('You Lost, they chose paper');
	}else{
		alert('its a tie, both are rock');
	}

});

paper.addEventListener('click',function(event)
{
		var x = choices[getRandom()];
			console.log(x);
	if (x === "rock") {
		alert('You Won. The computer choose rock');
	
	} else if(x === "scissor"){
		alert('You Lost. The computer choose scissor');
	
	}else{
		alert('its a tie. Both chose paper');
	}	

	
});

scissor.addEventListener('click',function(event)
{
	var x = choices[getRandom()];
	console.log(x);
	
	if (x === "paper") {
		alert('You Won. The computer choose paper');
	
	} else if(x === "rock"){
		alert('You Lost.The computer choose rock');
	
	}else{
		alert('its a tie. Both choose scissor.');
	}
	
});
