const app = document.getElementById('root');
const logo = document.createElement('img');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.locations.forEach(location=>{
            console.log(location.country);
            console.log(location.province);

            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = location.country.concat(': ', location.province);
            card.appendChild(h1);

            const conf = document.createElement('conf');
            conf.textContent = 'Confirmed: '.concat(location.latest.confirmed);
            card.appendChild(conf);

            const dead = document.createElement('dead');
            dead.textContent = 'Deaths: '.concat(location.latest.deaths);
            card.appendChild(dead);







            container.appendChild(card);
        })
    })
    .catch(err => {
        console.log("There's a problem: " + err);
    });