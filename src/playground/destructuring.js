// ---------------------
// Object Destructuring
// ---------------------
const person = {
    name: 'Anees',
    age: '29',
    location: {
        city: 'Leicester',
        temp: 10
    }
}

// name has default fallback value 
const {name : firstname = 'Anonymous', age} = person;
console.log(`${firstname} is ${age} years old.`)

const {city, temp: temperature} = person.location;
console.log(`It's ${temperature} in ${city}.`)


const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName)

// -------------------
// Array Destructuring
// -------------------
const address = ['249 EPR', 'Leicester', 'Leicestershire', 'LE55HJ']
const [, cityName, county = 'Shire'] = address;

console.log(`You are in ${cityName}, ${county}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [name, , cost] = item;

console.log(`A medium ${name} costs ${cost}`)