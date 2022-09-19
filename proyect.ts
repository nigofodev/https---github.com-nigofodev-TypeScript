let variable : string = "Juan Nicolás Gómez Fonseca";

variable  = "Juan Nicolás Gómez Fonseca";

console.log(variable);

//Favorite number 
let favoriteNumber: number = 15;
//Animals Array
let Animals : string [] = ["Monkey", "Cat", "Dog", "Elephant", "Frog" ];

//"Organización"

interface organization{
    name: string,
    slogan: string,
    mountofworkers: number,
    openingHours: number,
    homeoffice: boolean,
    creationDate: number,
    workonsaturday: boolean
    
}


const organization: organization ={
    name: "",
    slogan:"",
    mountofworkers: 51,
    openingHours: 6-15,
    homeoffice: true,
    creationDate:5/14/2005,
    workonsaturday: false
}



//"Estudiantes"

const Students: students[] = [
    {name: "Angela", age: 18, course:"Eight Grade" },
    {name: "Andres", age: 17, course:"Nine Grade" },
]
interface students{
    name: string;
    age: number;
    course: string | number
}

const students: students ={
    name: "",
    age: 14,
    course: "Eleven Grade",     
}

//function Mayor que 
function greaterthan(a: boolean,b: boolean, c: boolean): boolean {
	return a > b > c;
}


console.log(greaterthan (true, true, true));

