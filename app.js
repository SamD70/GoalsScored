const btn = document.querySelector('button');
const goalsOutput = document.querySelector('.goals');


btn.addEventListener('click', test);

function test(){
    let teamInput = document.querySelector('.teamname').value;
    //Debugging for correct inputs
    //get rid of spaces
    teamInput = teamInput.toLowerCase().split(' ');
    if(teamInput.includes('united') === true){
        teamInput[teamInput.length - 1] = 'utd';
    }
    teamInput = teamInput.join('')
    //lowercase
    console.log(teamInput);
    
    xhr = new XMLHttpRequest
    xhr.open('GET', 'https://s3.eu-west-1.amazonaws.com/hackajob-assets1.p.hackajob/challenges/football_session/football.json', false);
    
    //const data = xhr.responseText.JSON.parse();
    xhr.send();

    //let data = xhr.JSON.parse();
    if( xhr.status === 200){
        totalGoals(teamInput);
        
    }

}

function totalGoals(teamName){
    const data = JSON.parse(xhr.responseText);
    let goals = 0;
    for (let i =0; i<38; i++){
        for(let a = 0; a< 10; a++){
            let obj = data.rounds[i].matches[a];
            if(obj.team1.key === teamName){
                goals +=  obj.score1;
            }
            else if(obj.team2.key === teamName){
                goals +=  obj.score2;
            }
            
        }
        
    }
    goalsOutput.innerHTML = goals;
}
