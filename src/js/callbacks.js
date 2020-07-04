import { call } from "file-loader";

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

export const searchHero = (id, callback) => {
    const hero = heroes[id];

    if (hero) {
        callback(null, hero);
    } else {
        // error
        callback(`Don't exist hero with id: ${id}`);
    }

    // callback(hero);
}