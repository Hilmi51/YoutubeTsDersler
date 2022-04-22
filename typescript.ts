let a: string;
let b: number;
let c: boolean;

let d: any;
a = "Hello World";
b = 22;
c=true;
d = "You rock my world"

console.log(a,b,c,d);


let langs : string[];
let numbers: number[];
let boolValues: Array<boolean>;

let e : Array<number> = [1,2,3,4,5,6,7];

langs = ["Php","Java","C++","Python"];
numbers=[1,2,3,4,5];
boolValues=[true,false,false]

console.log(...langs);
console.log(...numbers);
console.log(...boolValues);
console.log(...e);

function addNumberss(num1: number, num2: number = 100): number {
          // return "Toplamları: " + (num1 + num2);  HATALI KULLANIM!
          // if (typeof num2 === "undefined") {
          //           return num1;
          // }
          return num1 + num2;
}

// addNumbers(10,20);
// addNumbers("Merhaba",20);

console.log(addNumberss(10));
console.log(addNumberss(10,20));

function addNumbers(num1: number, num2: number): void {
          console.log(num1 + num2);
          // return num1 + num2;        HATALI KULLANIM
          return; // Fonksiyonun erken sonlanmasını sağlar.
}

addNumbers(10,20);

class Person {
          name: string;  // Private dışardan erişimi engeller ve kullanımını ysaklar
          age: number;
          phone: string;

          constructor(name: string, age: number, phone: string) {
                    this.name = name;
                    this.age = age;
                    this.phone = phone;


                    console.log("Kişi oluşturuldu");
          }

          showInfos() {
                    console.log(`İsim: ${this.name} Yaş: ${this.age} Phone: ${this.phone}`);
          }
}

// let person1 = new Person("Hilmi", 17, "05465837290");
// person1.showInfos();

class Employee extends Person {
          salary : number;

          constructor(name: string, age: number, phone: string,salary:number) {
                    super(name,age,phone)

                    this.salary=salary;
          }
          showInfos() {
              super.showInfos();
              console.log("Maaş: " + this.salary);

          }
          changeDepartment(){
                    console.log("Departman değiştiriliyor");
          }
}

let employee1 = new Employee("Hilmi", 17, "05465837290",4500);
employee1.showInfos();
employee1.changeDepartment();


interface IDataBase {
          add();
          get();
          delete();
          update();
}

class MySql implements IDataBase {
          add() {
                    console.log("Mysql Add");
          }
          get() {
                    console.log("Mysql Get");
          }
          delete() {
                    console.log("Mysql Delete");
          }
          update() {
                    console.log("Mysql Update");
          }

}

class MongoDb implements IDataBase {
          add() {
                    console.log("MongoDb Add");
          }
          get() {
                    console.log("MongoDb Get");
          }
          delete() {
                    console.log("MongoDb Delete");
          }
          update() {
                    console.log("MongoDb Update");
          }

}

// let mysql = new MySql();
// mysql.add();

function addDatabase(database:IDataBase) {
          database.add();
}
addDatabase(new MySql());
addDatabase(new MongoDb());


abstract class Database {
          get() {
                    console.log("Database Get");
          }
          add() {
                    console.log("Database Add");
          }
          abstract delete();
          abstract update();
}


class MySqll extends Database {
          delete() {
                    console.log("Mysql Delete");
          }
          update() {
                    console.log("Mysql Update");
          }
}

class MongoDbb extends Database {
          delete() {
                    console.log("MongoDb Delete");
          }
          update() {
                    console.log("MongoDb Update");
          }
}

function AddDatavase(database: Database) {
          database.delete();
}

AddDatavase(new MySqll());
AddDatavase(new MongoDbb());
