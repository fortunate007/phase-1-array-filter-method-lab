// Code your solution here
// Function to find drivers matching a query (case insensitive)
function findMatching(drivers, query) {
    return drivers.filter(driver =>
      driver.toLowerCase() === query.toLowerCase()
    );
  }
  
  // Function to find drivers whose names start with a query (case insensitive)
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  
  // Function to match drivers by exact name (case insensitive)
  function matchName(drivers, name) {
    return drivers.filter(driver =>
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Example usage:
  const drivers = [
    "Alice", "Bob", "Charlie", "David", "Eve", "Frank"
  ];
  
  console.log(findMatching(drivers, "Alice")); // Output: ["Alice"]
  console.log(findMatching(drivers, "bob"));  // Output: ["Bob"]
  console.log(fuzzyMatch(drivers, "D"));      // Output: ["David"]
  console.log(matchName([{ name: "Alice", hometown: "New York" }, { name: "Bob", hometown: "Los Angeles" }], "Alice"));
  // Output: [{ name: "Alice", hometown: "New York" }]
  