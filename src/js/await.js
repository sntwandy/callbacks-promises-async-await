import { searchHeroAsync } from './promises';

const heroesIds = ['meg','darcy','zeus'];

export const getHeroesArr = async () => {
    const heroesArr = [];

    for (const id of heroesIds) {
        const hero = await searchHeroAsync(id);
        heroesArr.push(hero);
    }

    return heroesArr;
}