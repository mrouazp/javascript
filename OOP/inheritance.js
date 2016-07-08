//пример с наследованием

//общий класс геометрических фигур, со значениями сторон по умолчанию (0), общей
// формулой площади и расчета периметра
function Figure(_name, _side1, _side2, _side3, _side4) {
    this.side1 = _side1 || 0;
    this.side2 = _side2 || 0;
    this.side3 = _side3 || 0;
    this.side4 = _side4 || 0;
    this.name = _name || "Figure";
    alert(this.name);
    
    this.area = function() {
        return this.side1 * this.side2;
    };
    this.perimeter = function() {
        return this.side1 + this.side2 + this.side3 + this.side4; 
    };
}

//прямоугольник
function Rectangle(width, height) {
    Figure.call(this, "Rectangle", width, height, width, height);
}

var rect = new Rectangle(4, 5);
alert("Area " + rect.area());
alert("Perimeter " + rect.perimeter());

//квадрат
function Square(side) {
    Figure.call(this, "Square", side, side, side, side);
}

var square = new Square(5);
alert("Area " +  square.area());
alert("Perimeter " + square.perimeter());

//круг
function Circle(radius) {
    Figure.call(this, "Circle", radius);
    var PI = 3.14;
    
    //переопределяем родительские методы, так как для круга формулы не подходят
    this.area = function() {
        return PI * this.side1 * this.side1;
    };
    
    this.perimeter = function() {
        return 2 * PI * this.side1;
    };
};

var circle = new Circle(10);
alert("Area " +  circle.area());
alert("Perimeter " + circle.perimeter());

