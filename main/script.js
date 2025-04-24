function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10); // gets the value
    value = isNaN(value) ? 0 : value; // checks for Nan
    value++; // increments
    document.getElementById('number').value = value; // sets the value of the number element to the updates value
}