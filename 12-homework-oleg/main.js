const BASE = `https://swapi.co/api/`;

const characters = document.querySelector('.peoples');
const peopleButton = document.getElementById(`button-people`);
const homeButton = document.getElementById(`button-home`);
const planetButton = document.getElementById(`button-planet`);
const inputF = document.querySelector(`.navigator`);
const next = document.getElementById(`next`);
const prev = document.getElementById(`prev`);
const container = document.querySelector(`.planets-wrapper`);
const navBtns = document.querySelector(`.planet-navigator`)

async function getPeoples (currFilm) {
    currFilm = document.getElementById(`filmNavigator`).value;
    let films = await axios.get(BASE + `films/${currFilm}/`)
        const peopleUrlsArr = films.data.characters;
        const promises =  peopleUrlsArr.map( url => axios.get(url).then((people) => {
            return people.data;
        }));
          return Promise.all(promises);
          
    
           
};

function renderPeople(pers) {
        const persesDiv = document.createElement(`div`);
        const names = pers.name;
        const birth = pers.birth_year;
        const gender = pers.gender;
        persesDiv.innerHTML = `<h4>${names}</h4> 
        <h5>${birth}</h5>
        <h5> ${gender}</h5>`;
        characters.append(persesDiv);  
        persesDiv.classList.add(`pers`);
};


async function renderPeoples () {
   const perses = await getPeoples();
    perses.forEach(pers => {
    return renderPeople(pers);   
   });
};

let currentPage = 1;
async function getPlanets (currentPage) {
    const res = await axios.get(BASE + `planets/?page=${currentPage}`);
        return res.data.results;
};


function renderPlanets (planets) {
    container.innerHTML = ` `;
    planets.forEach((el) => {
        const planet = document.createElement(`div`);
        planet.innerHTML = `
        <ul class="planetsList">
        <li class="planetItem">${el.name}</li>
        </ul>
        `;
        container.append(planet)
    });
};

planetButton.addEventListener(`click`, (event) => {
    characters.innerHTML = ``;
    inputF.style.display = `none`;
    next.style.display = `block`;
    currentPage = 1;
    getPlanets(currentPage).then(renderPlanets);
    navBtns.style.display = `flex`;
});


peopleButton.addEventListener(`click`, (event) => {
    const currFilmNum = document.getElementById(`filmNavigator`)
    characters.innerHTML = ``;
    inputF.style.display = 'flex';
    container.innerHTML = ``;
    getPeoples(currFilmNum).then(renderPeoples);
    navBtns.style.display = `none`;
});

next.addEventListener(`click`, async function () {
    if (currentPage == 1) {
        next.style.display = `block`;
        prev.style.display = `block`;
    };
    if (currentPage == 6 ) {
        next.style.display = 'none';
    };
        currentPage += 1;
        container.innerHTML = '';
        await getPlanets(currentPage).then(renderPlanets);
});

prev.addEventListener('click', async function () {
    currentPage -= 1;
    if(currentPage == 1) {
       prev.style.display = 'none'
    }
    if (currentPage <= 6) {
        next.style.display = 'block'
    }
    container.innerHTML = '';
    await getPlanets(currentPage).then(renderPlanets);
});
homeButton.addEventListener(`click`, (event) => {
    container.innerHTML = ``;
    next.style.display = `none`;
    prev.style.display = `none`;
    
});










