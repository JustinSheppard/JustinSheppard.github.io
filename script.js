const app = document.getElementById('root');
const logo = document.createElement('img');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


var request = new XMLHttpRequest();
request.open('GET', 'https://api.overwatchleague.com/v2/teams', true);
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.data.forEach(competitor => {
            console.log(competitor.name);

            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = competitor.name;
            card.appendChild(h1);

            competitor.players.forEach(player =>{
                console.log(player.name);
                const p = document.createElement('p');
                p.textContent = player.name;
                card.appendChild(p);
            });

            //console.log(h1);


            //competitor.game = competitor.game.substring(0, 300)
            //p.textContent = '${competitor.name}...'

            container.appendChild(card);


        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
};

request.send();

