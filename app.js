
const pi = 3.1415;
const radius = 5;
const area = pi * radius * radius;
// area = 
let plantSpace = 0.8;
let numPlants = 20;

let weeklyPlants = numPlants * 2;
console.log ("number of plants at week 1: " + weeklyPlants);

let weeklyArea = numPlants * plantSpace;
console.log("total area at week 1: " + weeklyArea)

/// 1 week  40 plants
if (weeklyArea > area) {
    console.log ("Pruned at week 1");
} else if (weeklyArea < area && weeklyArea >= area *.5 ) {
    console.log("Monitored at week 1");
} else if (weeklyArea < area * 0.5) {
    console.log("Planted at week 1");
}

/// 2 weeks 40 plants

numPlants2 = numPlants *2;
let weeklyPlants2 = numPlants2 * 2;
console.log ("number of plants at week 2: " + weeklyPlants2);

let weeklyArea2 = weeklyPlants2 * plantSpace;
console.log("total area at week 2: " + weeklyArea2)

if (weeklyArea2 > area) {
    console.log ("Pruned at week 2");
} else if (weeklyArea2 < area && weeklyArea2 >= area *.5 ) {
    console.log("Monitored at week 2");
} else if (weeklyArea2 < area * 0.5) {
    console.log("Planted at week 2");
}

/// 3 weeks 80 plants  80 * 0.8 = 64

numPlants3 = numPlants2 * 2;

let weeklyPlants3 = numPlants3 * 2;
console.log ("number of plants at week 3: " + weeklyPlants3);

let weeklyArea3 = weeklyPlants3 * plantSpace;
console.log("total area at week 3: " + weeklyArea3)

/// 3 week  160 plants
if (weeklyArea3 > area) {
    console.log ("Pruned at week 3");
} else if (weeklyArea3 < area && weeklyArea3 >= area *.5 ) {
    console.log("Monitored at week 3");
} else if (weeklyArea3 < area * 0.5) {
    console.log("Planted at week 3");
}
