var persons = [
    {
        name: 'Nikita',
        lastName: 'Lukyanenko',
        age: 21
    },
    {
        name: 'Dmitry',
        lastName: 'Sheremet',
        age: 48
    }
];

function printDb(db) {
    for (var i = 0; i < db.length; i++) {
        var record = db[i];

        printRecord(record);
    }
}
function modification(db) {
    for (var i = 0; i < db.length; i++) {
        var modDate = new Date();
        persons[i].modDate = modDate;
    }
}

function printRecord(rec) {
    console.log(rec.name);
    console.log(rec.lastName);
    console.log(rec.age);
    console.log(rec.modDate.toString())
}
/*
var a = persons[0].name;
console.log(a)
*/
modification(persons)
printDb(persons);