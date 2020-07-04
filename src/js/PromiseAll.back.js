import { searchHero as searchHeroCallbacks } from './js/callbacks';
import  { searchHero } from './js/promises';
// Styles
import './styles.css';



const heroId1 = 'meg';
const heroId2 = 'darcy';

/* searchHero(heroId1 , (err, hero1) => {

    if (err) { console.error(err); }

    searchHero(heroId2, (err, hero2) => {
        if (err) { console.error(err); }

        console.log(`Sending to ${hero1.name} and ${hero2.name}`);
    })
}); */

/* searchHero(heroId1)
    .then(hero1 => {
        //console.log(`Sending to ${hero.name} to the mission!`)
        searchHero(heroId2)
            .then(hero2 => console.log(`Sending ${hero1.name} and ${hero2.name} to the mission!`))
    })
    .catch(); */

Promise.all([searchHero(heroId1), searchHero(heroId2)])
    .then( ([hero1, hero2]) => console.log(`Sending ${hero1.name} and ${hero2.name} to the mission!`))
    .catch(err => alert(err))
    .finally(()=> console.log('Promise.all finished'));

console.warn('Finished:)');