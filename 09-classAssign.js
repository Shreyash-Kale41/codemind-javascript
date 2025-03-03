console.log(`============== task 1 ==============`);

class Vehicle{
    brand;
    name;
    color;
    modelYear;
    price;
    constructor(brand,name,color,modelYear,price){
        this.brand = brand;
        this.name = name;
        this.color = color;
        this.modelYear = modelYear;
        this.price = price;
    }
    details(){
        console.log(`Brand : ${this.brand}, Name : ${this.name}, Color : ${this.color}, Model Year : ${this.modelYear}, Price : ${this.price}`);       
    }
}

let vehicleM = new Vehicle("Mahindra","Thar","Black","2025","20,00,000");
vehicleM.details();

let vehicleTf = new Vehicle("Toyota","Fortuner","White","2023","50,00,000");
vehicleTf.details();

let vehicleTh = new Vehicle("Tata","Harrier","Black","2024","25,00,000");
vehicleTh.details();

let vehicleH = new Vehicle("Huendai","Creta","White","2023","16,00,000");
vehicleH.details();

let vehicleS = new Vehicle("Suzuki","Fronx","White","2024","12,00,000");
vehicleS.details();


console.log(`============== task 2 ==============`);

class College{
    name;
    dept;
    uName;
    location;

    constructor(name,dept,uName,location){
        this.name = name;
        this.dept = dept;
        this.uName = uName;
        this.location = location;
    }

    display(){
        console.log(`College Name : ${this.name}, Department : ${this.dept}, University : ${this.uName}, Location : ${this.location}`);        
    }
}

let c1 = new College("RIT","Computer Science","Shivaji University","Islampur");
c1.display();

let c2 = new College("Walchand","ENTC","Shivaji University","Sangli");
c2.display();

let c3 = new College("COEP","Information Tech.","SPPU","Pune");
c3.display();

let c4 = new College("GCK","Machanical","Shivaji University","Karad");
c4.display();

let c5 = new College("MIT","Civil","MIT","Pune");
c5.display();