/**
 * The following describes the database you can query for the challenges below.
 * See each challenge for additional instructions.
 *
 * create table brands(
 *   id integer primary key,
 *   name text not null unique
 * );
 * create table super_heroes(
 *   id integer primary key,
 *   name text not null unique,
 *   is_awesome boolean default false,
 *   brand_id integer,
 *   foreign key (brand_id) references brands
 * );
 */

/**
 * This is just an example function to show how the database can be queried.
 * The corresponding test in challenge.test.js should pass.
 */
export const getBrandNames = async function (database) {
  const query = ` select name as brand_name from brands order by id`;

  return await database.all(query);
}

/**
 * CHALLENGE 1
 *
 * Requirements:
 *   * Should return one row per super hero
 *   * The results should be ordered alphabetically by the super hero's name
 *
 * To run the test from the command line, use: npm run challenge-1
 *
 * Hints:
 * * Use database.all(sql) to run a SQL query (see documentation)
 *   * https://github.com/fhellwig/sqlite-async#readme
 *   * https://github.com/mapbox/node-sqlite3/wiki/API
 * * See database schema above
 */
export const getSuperHeroes = async function (database) {
  const query = `select name from super_heroes order by name asc`;

  return await database.all(query);


}

/**
 * CHALLENGE 2
 *
 * Requirements:
 *   * Should return one row per super hero
 *   * Each row should contain the super hero's ID and their brand's name (see test for output format)
 *   * The results should be ordered by the super hero's ID
 *
 * To run the test from the command line, use: npm run challenge-2
 *
 * Hints:
 *   * Use database.all(sql) to run a SQL query (see documentation)
 *     * https://github.com/fhellwig/sqlite-async#readme
 *     * https://github.com/mapbox/node-sqlite3/wiki/API
 *   * See database schema above
 */
export const getSuperHeroesAndBrands = async function (database, id) {
  const query = 
  ` select super_heroes.name AS name, brands.name as brand
    from super_heroes
    left join brands ON super_heroes.brand_id = brands.id
    order by super_heroes.id;`;

  return await database.all(query);
}
