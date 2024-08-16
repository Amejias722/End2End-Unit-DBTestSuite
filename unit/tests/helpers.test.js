import { sortObjects } from '../src/helpers.js';

/**
 * Below there is one test validating the expectations of sortObjects function.
 * Write as many additional tests as you can come up with.
 * Think about handling edge cases.
 */

describe('sortObjects', () => {
  describe('Sorts object', () => {
    test('Sort users by name', () => {
      const users = [
        { name: 'Tim', age: 32 },
        { name: 'Linda', age: 31 },
        { name: 'Dorothy', age: 33 }
      ];
      const sortedUsers = [
        { name: 'Dorothy', age: 33 },
        { name: 'Linda', age: 31 },
        { name: 'Tim', age: 32 }
      ];
      const key = 'name';

      expect(sortObjects(users, key))
        .toEqual(sortedUsers);
    });
  });


  test('Sort users by age', () => {
    const users = [
      { name: 'Tim', age: 32 },
      { name: 'Linda', age: 31 },
      { name: 'Dorothy', age: 33 }
    ];
    const sortedUsers = [
      { name: 'Linda', age: 31 },
      { name: 'Tim', age: 32 },
      { name: 'Dorothy', age: 33 }
    ];
    const key = 'age';

    expect(sortObjects(users, key)).toEqual(sortedUsers);
  });


  test('Sort users by missing age key', () => {
    const users = [
      { name: 'Tim' },
      { name: 'Linda', age: 31 },
      { name: 'Dorothy', age: 33 }
    ];
    const sortedUsers = [
      { name: 'Linda', age: 31 },
      { name: 'Dorothy', age: 33 },
      { name: 'Tim' }
    ];
    const key = 'age';
  
    expect(sortObjects(users, key)).toEqual(sortedUsers);
  });

  test('Sort users by age when age is the same', () => {
    const users = [
      { name: 'Tim', age: 32 },
      { name: 'Linda', age: 31 },
      { name: 'Dorothy', age: 31 }
    ];
    const sortedUsers = [
      { name: 'Dorothy', age: 31 },
      { name: 'Linda', age: 31 },
      { name: 'Tim', age: 32 }
    ];
    const key = 'age';

    expect(sortObjects(users, key))
      .toEqual(sortedUsers);
  });
  

 
});
