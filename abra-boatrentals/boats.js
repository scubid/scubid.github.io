// Boat constructor
function Boat(name, available) {
    this.name = name;
    this.available = available;
}

// Construct SUP
let sup1 = new Boat('SUP-1', true);
let sup2 = new Boat('SUP-2', true);
let sup3 = new Boat('SUP-3', true);
let sup4 = new Boat('SUP-4', true);
let sup5 = new Boat('SUP-5', true);

// Construct Row Boats
let row1 = new Boat('ROW-1', true);
let row2 = new Boat('ROW-2', true);
let row3 = new Boat('ROW-3', true);

// Construct 2-Pedal Boat (two person)
let twopb1 = new Boat('TWO-PB-1', true);
let twopb2 = new Boat('TWO-PB-2', true);
let twopb3 = new Boat('TWO-PB-3', true);
let twopb4 = new Boat('TWO-PB-4', true);

// Construct 4-Pedal Boat (four person)
let fourpb1 = new Boat('FOUR-PB-1', true);
let fourpb2 = new Boat('FOUR-PB-2', true);

// Construct Kayaks (single person)
let k1 = new Boat('KAYAK-1', true);
let k2 = new Boat('KAYAK-2', true);
let k3 = new Boat('KAYAK-3', true);
let k4 = new Boat('KAYAK-4', true);
let k5 = new Boat('KAYAK-5', true);
let k6 = new Boat('KAYAK-6', true);

// Construct Kayaks (single person)
let k1 = new Boat('KAYAK-1', true);

// Customer constructor
function Customer(name, id, status, timein, timeout) {
    this.name = name;
    this.id = id;
    this.status = status;
    this.timein = timein;
    this.timeout = timeout;
}
