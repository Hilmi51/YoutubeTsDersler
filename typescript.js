var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a;
var b;
var c;
var d;
a = "Hello World";
b = 22;
c = true;
d = "You rock my world";
console.log(a, b, c, d);
var langs;
var numbers;
var boolValues;
var e = [1, 2, 3, 4, 5, 6, 7];
langs = ["Php", "Java", "C++", "Python"];
numbers = [1, 2, 3, 4, 5];
boolValues = [true, false, false];
console.log.apply(console, langs);
console.log.apply(console, numbers);
console.log.apply(console, boolValues);
console.log.apply(console, e);
function addNumberss(num1, num2) {
    if (num2 === void 0) { num2 = 100; }
    // return "Toplamları: " + (num1 + num2);  HATALI KULLANIM!
    // if (typeof num2 === "undefined") {
    //           return num1;
    // }
    return num1 + num2;
}
// addNumbers(10,20);
// addNumbers("Merhaba",20);
console.log(addNumberss(10));
console.log(addNumberss(10, 20));
function addNumbers(num1, num2) {
    console.log(num1 + num2);
    // return num1 + num2;        HATALI KULLANIM
    return; // Fonksiyonun erken sonlanmasını sağlar.
}
addNumbers(10, 20);
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log("Kişi oluşturuldu");
    }
    Person.prototype.showInfos = function () {
        console.log("\u0130sim: ".concat(this.name, " Ya\u015F: ").concat(this.age, " Phone: ").concat(this.phone));
    };
    return Person;
}());
// let person1 = new Person("Hilmi", 17, "05465837290");
// person1.showInfos();
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, salary) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.showInfos = function () {
        _super.prototype.showInfos.call(this);
        console.log("Maaş: " + this.salary);
    };
    Employee.prototype.changeDepartment = function () {
        console.log("Departman değiştiriliyor");
    };
    return Employee;
}(Person));
var employee1 = new Employee("Hilmi", 17, "05465837290", 4500);
employee1.showInfos();
employee1.changeDepartment();
var MySql = /** @class */ (function () {
    function MySql() {
    }
    MySql.prototype.add = function () {
        console.log("Mysql Add");
    };
    MySql.prototype.get = function () {
        console.log("Mysql Get");
    };
    MySql.prototype["delete"] = function () {
        console.log("Mysql Delete");
    };
    MySql.prototype.update = function () {
        console.log("Mysql Update");
    };
    return MySql;
}());
var MongoDb = /** @class */ (function () {
    function MongoDb() {
    }
    MongoDb.prototype.add = function () {
        console.log("MongoDb Add");
    };
    MongoDb.prototype.get = function () {
        console.log("MongoDb Get");
    };
    MongoDb.prototype["delete"] = function () {
        console.log("MongoDb Delete");
    };
    MongoDb.prototype.update = function () {
        console.log("MongoDb Update");
    };
    return MongoDb;
}());
// let mysql = new MySql();
// mysql.add();
function addDatabase(database) {
    database.add();
}
addDatabase(new MySql());
addDatabase(new MongoDb());
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.get = function () {
        console.log("Database Get");
    };
    Database.prototype.add = function () {
        console.log("Database Add");
    };
    return Database;
}());
var MySqll = /** @class */ (function (_super) {
    __extends(MySqll, _super);
    function MySqll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySqll.prototype["delete"] = function () {
        console.log("Mysql Delete");
    };
    MySqll.prototype.update = function () {
        console.log("Mysql Update");
    };
    return MySqll;
}(Database));
var MongoDbb = /** @class */ (function (_super) {
    __extends(MongoDbb, _super);
    function MongoDbb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MongoDbb.prototype["delete"] = function () {
        console.log("MongoDb Delete");
    };
    MongoDbb.prototype.update = function () {
        console.log("MongoDb Update");
    };
    return MongoDbb;
}(Database));
function AddDatavase(database) {
    database["delete"]();
}
AddDatavase(new MySqll());
AddDatavase(new MongoDbb());
