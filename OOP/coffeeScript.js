function CoffeeMachine(_brand, _power, _capacity, _color) {
    
    this.power = _power;
    this.brand = _brand;
    this.color = _color;
    this.capacity = _capacity;
    this.quantity = 0;
    
    var self = this;
    var activated = false;

    this.on = function () {
        if (activated)
            return;
        
        if (this.quantity > 0) {
            activated = true;
            alert("Coffee machine is on!");
            mill();
            boil();
            discharge();
        }
        else {
            alert("Coffee machine is empty!");
        }
    };
    
    this.off = function () {
        if (activated) {
            activated = false;
            alert("Coffee machine is off!");
        }
    };
    
    this.fill = function (_quantity) {
        if (activated)
            this.off();
        
        if (_quantity <= 0) {
            alert("Please fill coffee!");
        }
        else if (_quantity > self.capacity) {
            alert("Too much coffee!");
            this.quantity = this.capacity;
        }
        else {
            alert("Coffee filled");
            this.quantity = _quantity;
        }
    };

    function mill() {
        alert("Milling!");
    }
    function boil() {
        alert("Boiling!");
    }
    function discharge() {
        alert("Coffee ready! " + self.quantity + " grams");
        self.quantity = 0;
        self.off();
    }
}

var machine = new CoffeeMachine("Siemens", 1000, 200, "red");
machine.fill(500);
machine.on();
machine.off();
machine.on();
machine.off();
