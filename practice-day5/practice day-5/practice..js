function getKilometer(km) {
    var miles = km * 0.621371;
    return miles;
}
var miles = getKilometer(2);
// miles.toFixed
console.log(miles.toFixed(2), "miles");