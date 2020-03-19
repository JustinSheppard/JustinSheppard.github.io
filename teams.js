const app = document.getElementById('root');
const logo = document.createElement('img');
const container = document.createElement('div');
container.setAttribute('class', 'container');
//app.appendChild(logo);
app.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'https://api.overwatchleague.com/v2/teams/4523'); //ID is static, might need updating in the future
request.onload = function () {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response);

    let teamLogo = new Image();
    teamLogo = 'https://bnetcmsus-a.akamaihd.net/cms/page_media/Q8TMKNUFIJL51519747890664.svg';
    logo.src = teamLogo;
    app.appendChild(logo);
};

