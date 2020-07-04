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
            resolve(hero);
        } else {
            reject(`Don't exist a hero with id: ${id}`);
        }
    });
};