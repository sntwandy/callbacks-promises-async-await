import { searchHeroAsync, searchHero } from './promises';

const heroesIds = ['meg','darcy','zeus'];
const heroesPromises = heroesIds.map(searchHero);

export const getHeroesArr = async () => {

    return await Promise.all(heroesIds.map( searchHero));

    /* const heroesArr = [];

    for (const id of heroesIds) {
        heroesArr.push(searchHero(id));
    }


    return await Promise.all(heroesArr); */
};

export const getHeroAwait = async id => {

    try {
        const hero = await searchHeroAsync(id);
        return hero;
    } catch(err) {
        console.log('Catch!!!');
        throw err;
    }
};

export const heroesCicle = async () => {

    for await (const hero of heroesPromises) {
        console.log(hero);
    }
        // const heroes = await Promise.all(heroesPromises);
        //heroes.forEach(hero => console.log(hero));
};

export const heroesIfAwait = async (id) => {
    if ( (await searchHeroAsync(id)).name === 'Megan Herrera') {
        console.log('I love her with all my heart');
    } else {
        console.log('I love you Megan E.');
    }
}