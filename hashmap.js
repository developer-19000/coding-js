// hashmap is a way to store data so it can be accessed quickly later

// method one : using objects
let hashTable = {};
hashTable["key1"] = "value1";
console.log(hashTable["key1"]); // Output: value1

// method two : using Map
let hashMap = new Map();
hashMap.set("key1", "value1");
console.log(hashMap.get("key1")); // Output: value1

// Size can be retrieved easily with map.size
console.log(hashMap.size);


