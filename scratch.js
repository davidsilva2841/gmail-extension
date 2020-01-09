const _ = require('underscore');
let arr = [
    { name: "tom", age: 7 },
    { name: "john", age: 9 },
    { name: "becky", age: 2 },
    { name: "sam", age: 7 },
    ];

_UNIQUEAGEARRAY = _.chain().map(function (person) {
    return person.age
}).uniq().value();




