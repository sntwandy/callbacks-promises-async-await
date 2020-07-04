import { searchHero } from './js/callbacks';

// Styles
import './styles.css';



const heroId = 'meg';

searchHero(heroId , (err, hero) => {
    if (err) {
        console.error(err);
    } else {
        console.info(hero);
    };
});