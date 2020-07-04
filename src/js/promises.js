const heroes = {
    meg: {
        name: 'Megan Herrera',
        power: 'Smart',
    },
    zeus: {
        name: 'Zeus Amenadiel',
        power: 'Eat a lot',
    },
    darcy: {
        name: 'Darcy Bartolome',
        power: 'Sweet or Danger',
    },
};

export const searchHero = ( id ) => {
    const hero = heroes[id];

    return new Promise((resolve, reject)=> {
        if (hero) {
            setTimeout( () => resolve(hero),1000);
        } else {
            reject(`Don't exist a hero with id: ${id}`);
        }
    });
};

export const searchHeroAsync = async ( id ) => {
    const hero = heroes[id];

    if (hero) {
        return hero;
    } else {
        throw `Don't exist a hero with id: ${id}`;
    }

};

// Promises
const slowPromise = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Slow Promise'), 2000);
});

const mediumPromise = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Medium Promise'), 1500);
});

const fastPromise = new Promise( (resolve, reject) => {
    setTimeout( () => reject('Fast Promise'), 1000);
});

export {
    slowPromise,
    mediumPromise,
    fastPromise,
};