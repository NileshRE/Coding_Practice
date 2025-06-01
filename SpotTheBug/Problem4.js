// Remove Duplicates from the list

const list = [
  { name: "John" },
  { name: "Sara" },
  { name: "Sara" },
  { name: "Lynn" },
  { name: "Jake" },
];

const unique = Array.from(new Set(list)); // Doesn't work as Set gives unique values for only primitive data types

// Using Map Data type

const map = new Map();
list.forEach((item) => {
  map.set(item.name, item); // Since we are using Map it preserve insertion order and remove the duplicates as we are using item.name as key.
});

const uniqueList = map.values();

// Using filter

const uniqueListUsingFilter = list.filter((item, index) => {
  list.findIndex(({ name }) => name === item.name) === index; // filter by name acording to index, keeps only the first occurence
});

// Using Reduce and Map

const uniqueListUsingReduce = Object.keys(
  list.reduce((acc, cur) => {
    // Creates object with unique name key
    acc[cur.name] = cur.name; // Then creates an array with object.keys
    return acc;
  }, {})
).map((name) => ({ name })); // Map name to each array

{
  map((name) => ({ name })); // Shorthand for map that returns an object
  map((name) => {
    return { name: name };
  });
}
