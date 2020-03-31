const BASE = `https://swapi.co/api/`




async function getPeoples5Ep () {
    let films = await axios.get(BASE + `films/2/`)
        const peopleUrlsArr = films.data.characters;
        const promises =  peopleUrlsArr.map( url => axios.get(url).then((people) => {
            return people.data.name
        }));
          return Promise.all(promises);
          
            console.log(`Peoples:`, porPeople);
           
};

function renderPeople(pers) {
    document.createText(`div`pers.name)
    console.log(pers.name,);
};


async function renderPeoples () {
   const perses = await getPeoples5Ep();
   perses.forEach(el => {
       return renderPeople(el)  
   });
};
// getPeoples5Ep();
renderPeoples ();







