let weakMap = new WeakMap();

console.log(weakMap);

let john = { name: "John" };
let jack = { name: "Jack" };
weakMap.set(john, "John Details");
weakMap.set(jack, "Jack Details");


// let weakMap = new WeakMap();: This line initializes a new WeakMap object named weakMap. A WeakMap is a built-in JavaScript data structure that allows you to create a map of key-value pairs where the keys are objects, and the values can be any type of data.

// console.log(weakMap);: This line prints the weakMap object to the console. However, the output will be something like: WeakMap {}, which doesn't provide much information about the content of the WeakMap.

// let john = { name: "John" }; and let jack = { name: "Jack" };: These lines create two separate objects, john and jack, each having a property name with different values.

// weakMap.set(john, "John Details");: This line uses the .set() method to add an entry to the weakMap. The john object is used as the key, and the string "John Details" is used as the corresponding value.

// weakMap.set(jack, "Jack Details");: Similarly, this line adds another entry to the weakMap, using the jack object as the key and the string "Jack Details" as the value.