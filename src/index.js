import { getHeroesArr, getHeroAwait } from './js/await';

getHeroAwait('meg2')
    .then(console.log)
    .catch(console.warn);