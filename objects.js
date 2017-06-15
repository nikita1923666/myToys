var obj = {
    firstName: "Nikita",
    lastName: "Lukyanenko",
    age: 21,
    address: {
        addr1: "1624 Branham Ln",
        addr2: "apt. 136",
        city: "San Jose",
        zip: "95118"
    },
    toString: function(){
        return this.firstName;
    },
    change: function(){
        if (obj.firstName.charAt(1) === 'i'){
            return 'Mr ' + this.firstName;
        }
    }
};

console.log("Obj " + obj);
console.log(obj.age);
console.log(obj.address.zip)
console.log(obj.change())