function makeOpponent() //creates a random opponent with random stats
{
	var firstNames = ["Donald", "Tommy", "John", "James", "Fred", "Pete", "David"];
	var lastNames = ["Young", "Edwards", "Jackson", "Hartman", "Douglas", "Adams", "Peterson"];

	var rand1 = Math.floor(Math.random() * firstNames.length);
	var rand2 = Math.floor(Math.random() * lastNames.length);
	
	var opponent = //create a new opponent object
	{
		firstName: firstNames[rand1],
		lastName: lastNames[rand2],
		age: randomInt(18,45),
		weight: randomInt(150,220),
		height: randomInt(66,80),
		forehand: randomInt(60,80),
		backhand: randomInt(60,80),
		serve: randomInt(60,80),
		volley: randomInt(60,80)
	};
	return opponent;
}

function displayOpponent(opponent)
{
	document.write("Your opponent's  name is " + opponent.firstName + " " + opponent.lastName + '<br/>' +
		"<u>Stats</u>" + '<br/>' + "Age: " + opponent.age + '<br/>' + 
		"Height: " +  opponent.height + " inches" + '<br/>' +  "Weight: " + opponent.weight + " lbs" + '<br/>' + 
		"Serve: " + opponent.serve + '<br/>' + "Forehand: " + opponent.forehand + '<br/>' +
		"Backhand: " + opponent.backhand + '<br/>' + "Volley: " + opponent.volley + '<br/>');
}

var newOpponent = makeOpponent();
displayOpponent(newOpponent);

function randomInt(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

