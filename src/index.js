import { searchHero } from './js/callbacks';

// Styles
import './styles.css';



const heroId = 'meg';

searchHero(heroId , (hero) => {
    console.log(hero);
});