import { searchHero, searchHeroAsync } from './js/promises';

// Styles
import './styles.css';

searchHero('meg')
    .then(console.log)
    .catch(console.warn);

searchHeroAsync('darcy')
    .then(console.log)
    .catch(console.warn);