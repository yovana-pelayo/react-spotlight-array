// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  return brands.reduce((acc, brand) => [...acc, ...brand.shoes], []);
};
// we're making new arrays because we have an putside []
// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  const sum = dogs.reduce((acc, dog) => (acc += dog.age), 0);
  return sum / dogs.length;
};

// dogs.reduce((acc, dog) = > acc += dog.age), 0 /dogs.length
