function setProperty(obj, key, value, banPrototypeModifications) {
    // Check if prototype modifications are banned and if the key is '__proto__'
    if (banPrototypeModifications && key === '__proto__') {
        console.error("Modification of __proto__ is not allowed.");
        return;
    }
    
    // Set the property on the object
    obj[key] = value;
}

// Example usage
let myObject = {};

// Attempting to modify __proto__
setProperty(myObject, '__proto__', { someProp: 'value' }, true);
console.log(myObject);

// Setting a normal property
setProperty(myObject, 'name', 'example-3.5', true);
console.log(myObject);
