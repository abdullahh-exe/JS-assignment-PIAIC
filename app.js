// Q2

var name = "Abdullah Aftab";

console.log("Hello "+name+". Would you like to learn Python Today");


// Q3
name = name.toLowerCase();
console.log(name);
name = name.toUpperCase();
console.log(name);

// Q4
console.log('Albert Einstein once said, "person who never made a mistake never tried anything new."')

// Q5

var nameS = "Albert Einstein";
console.log(nameS+' once said, "person who never made a mistake never tried anything new."');

//Q6

var name3 = "Aftab Ahmed";
console.log("\n"+name3);
console.log("\t"+name3);

// Q7

console.log(8+1);
console.log(8-2);
console.log(8/2);
console.log(8*3);

// Q8

var favNumber = 10;
console.log("My Favourite Number is: "+favNumber);

// Q10

// This is Comment, Code can also be commented by same way

// Q11

var friend = ["Mohi","Abdul Ahad","Ajwad"];

for(var i=0;i<friend.length;i++)
{
    console.log(friend[i]);
}

// Q12
for(var i=0;i<friend.length;i++)
{
    console.log("Hello "+friend[i]);
}

// Q13

var trans = ["Mercedez","Audi","Nissan"];

for(var i=0;i<trans.length;i++)
{
    console.log("I would like to own a "+trans[i]);
}

// Q14

var guest = ["Aman","Awon","Faraz","Abbas"];
for(var i=0;i<guest.length;i++)
{
    console.log("I would like to invite you "+guest[i]);
}

// Q15

console.log(guest[3]+" is not coming");
guest[3] = "Ajwad";
for(var i=0;i<guest.length;i++)
{
    console.log("I would like to invite you "+guest[i]);
}

// Q16

guest.unshift("Mohi");
guest.splice(2,0,"Abdul Ahad");
guest.push("Sukhikh");
for(var i=0;i<guest.length;i++)
{
    console.log("I would like to invite you "+guest[i]);
}

// Q17

console.log("I can't invite more people, i have to shrink the list.");
console.log(guest.length);
for(var i=0;i<guest.length+2;i++)
{
    var temp = guest.pop();
    console.log("Sorry I can't invite you "+temp);
}
for(var i=0;i<guest.length;i++)
{
    console.log("You are still Invited "+guest[i]);
}

// Q18

var places = ["Kazan","Los Angeles","Amsterdem","Venice","New York"];
console.log(places);
var copy = [...places].sort()
console.log(copy);
console.log(places);

copy = [...places].reverse();
console.log(copy);
console.log(places);
places.reverse();
console.log(places);
places.reverse();
console.log(places);
places.sort();
console.log(places);

// Q19
console.log("I am inviting "+guest.length+" Guests");

// Q20

var something = ["K2","Parbat","Everest"];

// Q21

const bike = 
{
    name: "Honda",
    CC: 70,
    colour: "red"
};

// Q22

// var array = [1,2,3,4,5] length is 5
// console.log(array[6]) --> index out of bound error.

let motorBike = "Honda";
if(motorBike === "Honda");
{
    console.log("I Predict True");
}
let num = 10
if (num === 10)
{
    console.log("True");
}
if (num > 5)
{
    console.log("True");
}
if (num >= 10)
{
    console.log("True");
}
if (num <= 10)
{
    console.log("True");
}
if (num < 5)
{
    console.log("True");
}

// Q 24

if("Abdullah" === "Abbdullah")
{

}
if("Abdullah".toLowerCase() === 'abdullah')
{
    console.log("heheh");
}
if(10 > 9 && 10 > 8)
{

}
if(10 > 9 || 10 > 11)
{

}
if(guest[0]==='Mohi')
{
    console.log("Mohi");
}


// Q25 

var alien_color = "green";
if(alien_color === 'green')
{
    console.log("5 Points");
}

alien_color = "red";
if(alien_color === 'green')
{
    console.log("5 Points");
}

// Q26

var alien_color = "green";
if(alien_color === 'green')
{
    console.log("5 Points");
}
else
{
    console.log("10 Points");
}
alien_color = "red";
if(alien_color === 'green')
{
    console.log("5 Points");
}
else
{
    console.log("10 Points");

}

// Q27

alien_color = "green";
if(alien_color === 'green')
{
    console.log("5 Points");
}
else if(alien_color === 'yellow')
{
    console.log("10 Points");
}
else if(alien_color === 'red')
{
    console.log("15 Points");
}
alien_color = "yellow";
if(alien_color === 'green')
{
    console.log("5 Points");
}
else if(alien_color === 'yellow')
{
    console.log("10 Points");
}
else if(alien_color === 'red')
{
    console.log("15 Points");
}

// Q28

var age = 2;
if(age < 2)
{
    console.log("baby");
}
else if(age >= 2 && age < 4)
{
    console.log("toddler");
}
else if(age >=4 && age <13)
{
    console.log("kid");
}
else if(age >= 13 && age <20)
{
    console.log("teenage");
}else if(age >=20 && age <65)
{
    console.log("adult");
}
else
{    
    console.log("elder");
}

// Q29
var fruit = ["Apple","Mango","Banana"];
for(var i=0;i<fruit.length;i++)
{
    if(fruit[i] === 'Apple')
    {
        console.log("apple");
    }
    if(fruit[i] === 'Mango')
    {
        console.log("mango");
    }
    if(fruit[i] === 'Banana')
    {
        console.log("banana");
    }
}

// Q30

var admin = ["admin","ab","aftab","ahmed","noor"];
for(var i=0;i<admin.length;i++)
{
    if(admin[i]=='admin')
    {
        console.log("Hello Admin");
    }
    else
    {
        console.log("Hello User");
    }
}
admin.length = 0;
if(admin.length === 0 )
{
    console.log("We Need Users");
}

var current_users = ["abdullah","mohi","abdul ahad"];
var new_users = ["ajwad", "abdullah","aftab"];

for(var i=0;i<new_users.length;i++)
{
    for(var j=0;j<current_users.length;j++)
    {
        if(new_users[i] === current_users[j])
        {
            console.log(new_users[i]+" already present");
        }
    }
}

var numbers = [1,2,3,4,5,6,7,8,9]
for( var i=0;i<numbers.length;i++)
{
    if(numbers[i] === 1)
    {
        console.log(numbers[i]+"st");
    }
    else if(numbers[i] === 2)
    {
        console.log(numbers[i]+"nd");
    }
    else if(numbers[i] === 3)
    {
        console.log(numbers[i]+"rd");
    }
    else
    {
        console.log(numbers[i]+"th");
    }
}

var animal = ["dog","cat","parot"];
for(var i=0;i<animal.length;i++)
{
    if(animal[i] === 'dog')
    {
        console.log("dog would be great pet");
    }
    else if(animal[i] === 'cat')
    {
        console.log("cats are beautiful");
    }
    else if(animal[i] === 'parot')
    {
        console.log("parots can speak like humans");
    }
}

function makeShirt(size, text)
{
    console.log("Size of size is: "+size+" and print is: "+text);
}
makeShirt(8,"Hala Madrid");


// Q 39
function CityCountry(city, country)
{   
    var str = city + ", " +country;
    return str;
}
console.log(CityCountry("Karachi","Pakistan"));

// Q44

function sandwich(array)
{
    console.log(array);
}

sandwich(["Mayo","Ketchup","Sauce"])

// Q 45

function obj(manufac, mod)
{
    const car = 
    {
        manufacturer : manufac,
        model : mod

    }
    return car;
}

console.log(obj("Honda","Accord"));