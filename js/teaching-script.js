// This is a javaScript file

var x = 10;
var userName = "Steven"
var htmlBuilder ="";

teams = new Array();
// teams = ["Braves", "Yankees","Nationals"];
// wins = [89, 94, 79];
// losses = [55, 50, 63];

// teams = ["Braves", "Natioanls","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Diogers","Diamondbacks","Giants","Padres","Rockies",];
// wins = [89,79,74,72,51,81,76,67,62,93,75,69,66,60];
// losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];


console.log(teams);
console.log(wins);
console.log(losses);
console.log(teams[0]);

htmlBuilder = '<h2>Teams</h2><div class="team-list">'

//vars for determining leader
var tempLeader = 0;
var tempHighWins = 0;


for (var i=0; i<teams.length; i++){
    console.log(teams[i]);
    console.log(htmlBuilder);

    if (losses[i] >= 60){
        console.log("This team is horrible");
    }else{
        console.log('This team is not that bad.')
    }
    //logic for determining leader
    if (wins[i] >= tempHighWins){
      tempHighWins = wins[i];
      tempLeader = i;
    }
    console.log("Team with most wins: " + teams[tempLeader] + " | " + tempHighWins );

    htmlBuilder += teams[i] + " Wins: " + wins[i] + " Losses: " + losses[i] + "</br>";
}

htmlBuilder += "</div>"

document.getElementById('teams').innerHTML=htmlBuilder;
