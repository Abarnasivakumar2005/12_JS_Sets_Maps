// 1. Create an empty set
const mySet = new Set();
console.log('Empty Set:', mySet);

// 2. Create a set containing 0 to 10 using loop
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}
console.log('Set containing 0 to 10:', numberSet);

// 3. Remove an element from a set
numberSet.delete(5);
console.log('Set after removing 5:', numberSet);

// 4. Clear a set
numberSet.clear();
console.log('Set after clearing:', numberSet);

// 5. Create a set of 5 string elements from array
const countries = ['Finland', 'Sweden', 'Norway'];
const countrySet = new Set(countries);
console.log('Set of countries:', countrySet);

// 6. Create a map of countries and number of characters of a country
const countryMap = new Map();
countries.forEach(country => {
  countryMap.set(country, country.length);
});
console.log('Map of countries and their character counts:', countryMap);


// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country