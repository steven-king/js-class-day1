// This is a javaScript file

var x = 10;
var userName = "Steven"
var htmlBuilder ="";

teams = new Array();
// teams = ["Braves", "Yankees","Nationals"];
// wins = [89, 94, 79];
// losses = [55, 50, 63];

teams = ["Braves", "Natioanls","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];


console.log(teams);
console.log(wins);
console.log(losses);
console.log(teams[0]);
console.log(wins[0]);

htmlBuilder = '<h2>National League</h2><div class="team-list">'
htmlBuilder += '<table><tr><th>Team</th><th>Wins</th><th>Losses</th></tr>'
//vars for determining leader
var tempLeader = 0;
var tempHighWins = 0;
var tempUpdateIndex = -1 ;


for (var i=0; i<teams.length; i++){
    console.log(teams[i]);
    console.log(htmlBuilder);
    htmlBuilder +="<tr>";

    //logic for determining leader
    if (wins[i] >= tempHighWins){
      tempHighWins = wins[i];
      tempLeader = i;
      tempUpdateIndex = i;
    }
    console.log("Team with most wins: " + teams[tempLeader] + " | " + tempHighWins );
}

for (var i=0; i<teams.length; i++){
  console.log(tempUpdateIndex);
    if (i == tempLeader && tempUpdateIndex == i){
      htmlBuilder += "<td><strong>" + teams[i] + "</strong></td><td><strong>" + wins[i] + "</strong></td><td><strong>" + losses[i] + "</strong></td>";
    }else{
      htmlBuilder += "<td>" + teams[i] + "</td><td>" + wins[i] + "</td><td>" + losses[i] + "</td>";
    }
  htmlBuilder += "</tr>";
}

htmlBuilder += "</table></div>"

document.getElementById('teams').innerHTML=htmlBuilder;
