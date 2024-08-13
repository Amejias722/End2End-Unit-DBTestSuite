/**
 * YOU DO NOT NEED TO EDIT THIS FILE.
 */

import { Database } from 'sqlite-async';

import {
  getBrandNames,
  getSuperHeroes,
  getSuperHeroesAndBrands
} from './challenges.js';

function dbErrorHandler (error) {
  if (error) {
    console.error(error);
  }
}

function connectToDatabase () {
  return Database.open('./db.db')
    .catch(dbErrorHandler);
}

function disconnectFromDatabase (database) {
  database.close()
    .catch(dbErrorHandler);
}

describe('SQL manipulation', () => {
  test('Test example', async () => {
    const database = await connectToDatabase();
    const results = await getBrandNames(database);

    expect(results)
      .toMatchObject([
        {
          brand_name: 'DC'
        },
        {
          brand_name: 'Marvel'
        }
      ]);

    disconnectFromDatabase(database);
  });

  describe('CHALLENGE 1', () => {
    test('Finds the super heroes', async () => {
      const database = await connectToDatabase();
      const results = await getSuperHeroes(database);

      expect(results)
        .toHaveLength(3);

      expect(results)
        .toEqual([
          { name: 'Aquababy' },
          { name: 'Shadowcat' },
          { name: 'Spider-Man' },
        ]);

      disconnectFromDatabase(database);
    });
  });


  describe('CHALLENGE 2', () => {
    test('Finds all super heroes with their brand', async () => {
      const database = await connectToDatabase();
      const results = await getSuperHeroesAndBrands(database);

      expect(results)
        .toHaveLength(3);

      expect(results)
        .toEqual([
          {
            name: 'Aquababy',
            brand: 'DC',
          },
          {
            name: 'Shadowcat',
            brand: 'Marvel',
          },
          {
            name: 'Spider-Man',
            brand: 'Marvel'
          }
        ]);

      disconnectFromDatabase(database);
    });
  });
});
