var User = {name: 'Serger', prof: 12};
var User_plus = JSON.stringify(User);
localStorage.setItem('myName', User_plus);
var sup = localStorage.getItem('myName');
JSON.parse(sup);

localStorage.setItem('users', JSON.stringify([{name: 'Ivan', age: 44}, {name: 'neIvan', age: 66}]));

localStorage.setItem('Weapons', JSON.stringify([{name: 'AK-103', price: 3000},{name: 'Nikonov', price: 4500}]));
localStorage.getItem('Weapons');



localStorage.setItem('users', JSON.stringify(
    [{name: 'Ivan', age: 44}, {name: 'neIvan', age: 66}])
);
var kek = localStorage.getItem('users');
var parseInfo = JSON.parse(kek);
console.log(parseInfo);
var info = parseInfo.map(function(obj){
    return 'name: ' + obj.name + ', ' + 'age: ' + obj.age;
})
block2.innerHTML = `${info}`;


