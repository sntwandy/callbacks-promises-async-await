import { searchHeroAsync, searchHero } from './promises';

const heroesIds = ['meg','darcy','zeus'];

export const getHeroesArr = async () => {

    return await Promise.all(heroesIds.map( searchHero));

    /* const heroesArr = [];

    for (const id of heroesIds) {
        heroesArr.push(searchHero(id));
    }


    return await Promise.all(heroesArr); */
}