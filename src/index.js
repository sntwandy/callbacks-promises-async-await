import { searchHero as searchHeroCallbacks } from './js/callbacks';
import  { searchHero } from './js/promises';
// Styles
import './styles.css';



const heroId1 = 'meg';
const heroId2 = 'zeus';

/* searchHero(heroId1 , (err, hero1) => {

    if (err) { console.error(err); }

    searchHero(heroId2, (err, hero2) => {
        if (err) { console.error(err); }

        console.log(`Sending to ${hero1.name} and ${hero2.name}`);
    })
}); */

searchHero(heroId1)
    .then(hero => console.log(`Sending to ${hero.name} to the mission!`))
    .catch();