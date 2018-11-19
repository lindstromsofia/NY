var house = {
areas: [{
livingRoom: {
items: ['tv','sofa']
},
bedroomOne: {
items: ['bed','washing machine'],
windows: 3
},
bedroomTwo:{
items: ['bed','bed','desk'],
windows: 4
},
kitchen:{
items: ['fridge','broken chair']
}
}],

garden: [true, 'Red Rose'],
garage: {
car: {
color: 'red',
wheels: 4,
honk: ()=>{alert("Beep")}
}
}
}


console.log(house);

// 1. Find total number of areas in the house

// let areasinthehouse = {
//     areas: ['livingRoom', 'bedroomOne', 'bedroomTwo', 'kitchen']
// }
// console.log('Areas in this house:', areasinthehouse.areas.length);


// 2. Add a dining table to the living room

let livingroomitems = ['tv', 'sofa'];
console.log (livingroomitems)

livingroomitems.push('dining table');

console.log(livingroomitems);


// 3. Add a stove to the kitchen

let kitchenitems = ['fridge','broken chair'];
console.log (kitchenitems);

kitchenitems.push ('stove');
console.log(kitchenitems);


// 4. Find the total number of beds in all rooms





console.log ('Total number of beds:, ')

 
// 5. Remove the washing machine from bedroomOne

let bedroomOneitems = ['bed','washing machine'];
bedroomOneitems.pop ('washing machine');
console.log(bedroomOneitems);


// 6. Change the color of the car to blue

let carcolor = 'red'
console.log('The color of the car is', carcolor.replace('red','blue'))


// 7. Add a another car to the garage with a honk function

var oldgarage ={ 
     car1: {
    color1: 'red',
    wheels1: 4,
    honk1: ()=>{alert("Beep")}
    }
}

var newgarage ={ 
    car2: {
   color2: 'silver',
   wheels2: 4,
   honk2: ()=>{alert("Beep!")}
   }
}

console.log(oldgarage, newgarage)


// 8. Make the new car honk
alert("Beep!")


// 9. Change the 'broken chair' in the kitchen to 'new chair'

let oldkitchenitems = ['fridge','broken chair'];

let newkitchenitems = oldkitchenitems.map((someWord)=>{
return someWord.replace('broken chair','new chair');
});

console.log('Items in the kitchen:', newkitchenitems);


// 10. If the house has a garden, console.log the name of the flower

let newhouse = {
        areas: 'garden'
    }

if(newhouse.areas == 'garden') {
    console.log("Red Rose");

} else {
    console.log("No garden");
}

