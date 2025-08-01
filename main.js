document.writeln("hola");

//1
const names = ["Edoardo", "Simone", "Francesco"];

// Stampa in console tutti i nomi
// con ciclo for
for (let i = 0; i < names.length; i++) {
  const name = names[i];
  console.log(name);
  document.writeln(name);
}
//con ciclo forEach sintassi : array.forEach(function(currentValue, index, arr), thisValue)

names.forEach((name, index, array) => {
  console.log(name, index, array);
});

//2
// Stampa in console tutti i nomi
const people = [
  { name: "Paolo", age: 35 },
  { name: "Giulia", age: 24 },
  { name: "Marco", age: 67 },
];
console.log(people);

//con ciclo for

for (let i = 0; i < people.length; i++) {
  const onlyName = people[i];
  console.log(onlyName.name);
}

//ciclo forEach
const peopleEach = people.forEach((name) => {
  console.log(name.name);
});

// 3 Crea un nuovo array in cui tutti i numeri siano incrementati di 1
const numbers = [2, 8, 4, 7, 2, 87];

//ciclo for
let newArrayNumber = [];
for (let i = 0; i < numbers.length; i++) {
  const thisNumber = numbers[i] + 1;
  newArrayNumber.push(thisNumber);
}
console.log(newArrayNumber);

//map

const MapNumb = numbers.map((number) => {
  return number + 1;
});
console.log(MapNumb);

// 4 Crea un nuovo array coi nomi di tutti gli autori
const posts = [
  { author: "Marco", date: "12/3/2021", content: "lorem ipsum..." },
  { author: "Luca", date: "30/6/2021", content: "lorem ipsum..." },
  { author: "Fabrizio", date: "12/9/2020", content: "lorem ipsum..." },
  { author: "Enrico", date: "09/12/2021", content: "lorem ipsum..." },
];

// ciclo for

let authorName = [];
for (let i = 0; i < posts.length; i++) {
  const thisPost = posts[i];
  const onlyAuthor = thisPost.author;
  console.log(onlyAuthor);
  authorName.push(onlyAuthor);
}
console.log(authorName);

//map

const mapAuthor = posts.map((author) => {
  return `${author.author}`;
});
console.log(mapAuthor);

// 5 Crea un array a partire dall'array nums, che abbia solo i numeri pari
const nums = [2, 8, 4, 7, 12, 87];

// ciclo for
function getEvenNumbers(nums) {
  const evenNumbers = [];
  for (let i = 0; i < nums.length; i++) {
    const thisEvenNum = nums[i];
    if (thisEvenNum % 2 === 0) {
      evenNumbers.push(thisEvenNum);
    }
  }
  return evenNumbers;
}
const even = getEvenNumbers(nums);
console.log(even);

//filter (avevo usato map ma con map i valori non corrispondenti uscivano come undefind)
let evenArrayMap = [];
const mapEvenNum = nums.filter((nums) => {
  if (nums % 2 === 0) {
    return nums;
  }
});

console.log(mapEvenNum);

// 6 A partire dall'array fornito, crea due array. Uno con le matite lunghe almeno 15cm. L'altro con le restanti.
const pencils = [
  { brand: "Faber-Castell", weight: 8, sizeInCm: 12 },
  { brand: "Staedtler", weight: 9, sizeInCm: 18 },
  { brand: "Faber-Castell", weight: 7, sizeInCm: 10 },
  { brand: "Staedtler", weight: 10, sizeInCm: 16 },
  { brand: "Faber-Castell", weight: 6, sizeInCm: 14 },
  { brand: "Derwent", weight: 5, sizeInCm: 20 },
  { brand: "Derwent", weight: 4, sizeInCm: 11 },
  { brand: "Staedtler", weight: 6, sizeInCm: 9 },
  { brand: "Caran d’Ache", weight: 12, sizeInCm: 22 },
  { brand: "Caran d’Ache", weight: 11, sizeInCm: 13 },
];
// ciclo for
let newArrayPenCm = [];
let shortPen = [];
for (let i = 0; i < pencils.length; i++) {
  const thisPencil = pencils[i];
  //console.log(thisPencil);
  const onlySize = thisPencil.sizeInCm;
  if (onlySize >= 15) {
    newArrayPenCm.push(onlySize);
  } else {
    shortPen.push(thisPencil.sizeInCm);
  }
}
console.log(newArrayPenCm);
console.log(shortPen);

//filter
const newArrayLongPen = [];
const newArrayShortPen = [];
const longPencils = pencils.filter((pencil) => {
  if (pencil.sizeInCm >= 15) {
    return newArrayLongPen.push(pencil.sizeInCm);
  } else {
    return newArrayShortPen.push(pencil.sizeInCm);
  }
});
console.log(newArrayLongPen);
console.log(newArrayShortPen);

// Recupera i dati dello studente con id 2
const students = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    class: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    class: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    class: "5B",
  },
];

// ciclo for
for (let i = 0; i < students.length; i++) {
  const thisIdStudents = students[i];
  //console.log(thisIdStudents);
  const idStudent = thisIdStudents.id;
  //console.log(idStudent);
  if (idStudent === 2) {
    console.log(thisIdStudents);
  }
}

//find

// Recuperare la classe dello studente Marco Lanci
const students_2 = [
  {
    id: 1,
    name: "Marco Lanci",
    age: 32,
    classroom: "3C",
  },
  {
    id: 2,
    name: "Mario Banfi",
    age: 34,
    classroom: "4A",
  },
  {
    id: 3,
    name: "Luigi Banzi",
    age: 33,
    classroom: "5B",
  },
];
