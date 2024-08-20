// Example array of fields
const fields = [
    { name: 'firstName', value: 'John' },
    { name: 'lastName', value: 'Doe' },
    { name: 'age', value: 30 }
];

// Function to map a field to its value
function map(field) {
    return field.value;
}

// Using the map function to get values from the fields array
const get = map(fields[0]);

console.log(get); // Output: "John"

// To map over all fields and get their values
const values = fields.map(map);

console.log(values); // Output: ["John", "Doe", 30]
