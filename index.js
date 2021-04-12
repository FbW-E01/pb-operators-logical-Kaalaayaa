const isDogBetter = true;
const isCatBetter = false;

console.log(isDogBetter && isCatBetter);

console.log(isDogBetter || isCatBetter);

console.log(!(isDogBetter && isCatBetter));

const atoms = 2;
const sandGrains = 8;
const starsInSky = 50;

console.log(atoms > starsInSky && atoms > sandGrains);

console.log(atoms !== sandGrains);

console.log(starsInSky < sandGrains || starsInSky > atoms);

console.log(atoms === starsInSky || atoms !== sandGrains);

console.log(atoms >= 10 && sandGrains <= 10);

console.log((atoms * starsInSky)<= 100 || (atoms * sandGrains)> 100);