const app = document.getElementById('root');
const logo = document.createElement('img');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


let request = new XMLHttpRequest();
request.open('GET', 'https://api.overwatchleague.com/v2/teams', true);
request.onload = function () {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.data.forEach(competitor => {
            //console.log(competitor.name);

            //create card, click to go to team information
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //create url for team page, on click go to team page
            const teamPage = "https://justinsheppard.github.io/".concat(competitor.abbreviatedName);
            card.onclick = function(){URL(teamPage)};

            //adds team name to the card heading
            const h1 = document.createElement('h1');
            h1.textContent = competitor.name;
            card.appendChild(h1);

            //adds team member names to the body of the card
            competitor.players.forEach(player =>{
                //console.log(player.name);
                const p = document.createElement('p');
                p.textContent = player.name;
                card.appendChild(p);
            });

            container.appendChild(card);

        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
};

function URL(teamPage){
    location.href = teamPage;
}

request.send();

