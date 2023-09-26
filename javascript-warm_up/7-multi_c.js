#!/usr/bin/node

const numOccurrences = process.argv[2];

if (!isNaN(parseInt(numOccurrences))) {
  const count = parseInt(numOccurrences);
  
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      console.log("C is fun");
    }
  } else {
    console.log("Missing number of occurrences");
  }
} else {
  console.log("Missing number of occurrences");
}
