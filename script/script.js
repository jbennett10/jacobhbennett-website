
var newCandidate = function(fullName, partyColor)
{


  var candidate = {};
  candidate.fullName = fullName;
  candidate.results = null;
  candidate.totVotes = 0;
  candidate.partyColor = partyColor;

  candidate.tally = function ()
  {
    this.totVotes = 0;

    for(i=0;i<this.results.length;i++)
        {
          this.totVotes = this.totVotes + this.results[i];
        }
    console.log("Total votes for " + this.fullName + ": " + this.totVotes);


  };



  return candidate;


};



var c1 = newCandidate("Jyaxx", [132, 17, 11]);
var c2 = newCandidate("Jyane", [245, 141, 136]);

c1.results = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
c2.results = [4 ,2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3 ,7, 3 ,6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

c1.results[9]=1;
c2.results[9]=28;
c1.results[4]=17;
c2.results[4]=38;
c1.results[43]=11;
c2.results[43]=27;




var setStateResults = function (state)
{
  theStates[state].winner = null;

  if (c1.results[state]>c2.results[state])
    {
      theStates[state].winner = c1;
    }
  else if (c2.results[state]>c1.results[state])
    {
      theStates[state].winner = c2;
    }


  var stateWinner = theStates[state].winner;

  if (stateWinner!==null)
    {
       theStates[state].rgbColor = stateWinner.partyColor;
    }
  else
    {
        theStates[state].rgbColor = [11, 32, 57];
    }

  var stateTbl = document.getElementById('stateResults');
  var headerRow = stateTbl.children[0].children[0];
  var stateName = headerRow.children[0];
  var stateAbbr = headerRow.children[1];

  stateTbl.children[1].children[0].children[0].innerText = c1.fullName;
  var results1 = stateTbl.children[1].children[0].children[1];

  stateTbl.children[1].children[1].children[0].innerText = c2.fullName;
  var results2 = stateTbl.children[1].children[1].children[1];

  var winnerName = stateTbl.children[1].children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbr.innerText = theStates[state].nameAbbrev;

  results1.innerText = c1.results[state];
  results2.innerText = c2.results[state];

  if (stateWinner===null)
    {
      winnerName.innerText = "DRAW";
    }
  else
    {
      winnerName.innerText = theStates[state].winner.fullName;
    }


}

c1.tally();
c2.tally();


if (c1.totVotes>c2.totVotes)
  {
    var winner = c1;
  }
else
  {
    var winner = c2;
  }

var countryResults = document.getElementById('countryResults');

countryResults.children[0].children[0].children[0].innerText = c1.fullName;
countryResults.children[0].children[0].children[1].innerText = c1.totVotes;
countryResults.children[0].children[0].children[2].innerText = c2.fullName;
countryResults.children[0].children[0].children[3].innerText = c2.totVotes;
countryResults.children[0].children[0].children[5].innerText = winner.fullName;
