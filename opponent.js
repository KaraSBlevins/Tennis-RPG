function makeOpponent() //creates a random opponent with random stats
{
	var firstNames = ["Donald", "Tommy", "John", "James", "Fred", "Pete", "David"];
	var lastNames = ["Young", "Edwards", "Jackson", "Hartman", "Douglas", "Adams", "Peterson"];
	var age = [19, 20, 21, 22, 27, 34, 41];
	var weight = [150, 155, 160, 165, 170, 180, 185];
	var height = [66, 68, 72, 73, 75, 77, 80];
	var forehand = [60, 63, 65, 67, 70, 73, 75];
	var backhand = [58, 62, 67, 70, 71, 76, 80];
	var serve = [59, 63, 68, 71, 75, 76, 81];
	var volley = [45, 49, 51, 55, 57, 61, 77];

	var rand1 = Math.floor(Math.random() * firstNames.length);
	var rand2 = Math.floor(Math.random() * lastNames.length);
	var rand3 = Math.floor(Math.random() * age.length);
	var rand4 = Math.floor(Math.random() * weight.length);
	var rand5 = Math.floor(Math.random() * height.length);
	var rand6 = Math.floor(Math.random() * forehand.length);
	var rand7 = Math.floor(Math.random() * backhand.length);
	var rand8 = Math.floor(Math.random() * serve.length);
	var rand9 = Math.floor(Math.random() * volley.length);
	
	var opponent = //create a new opponent object
	{
		firstName: firstNames[rand1],
		lastName: lastNames[rand2],
		age: age[rand3],
		weight: weight[rand4],
		height: height[rand5],
		forehand: forehand[rand6],
		backhand: backhand[rand7],
		serve: serve[rand8],
		volley: volley[rand9]
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

