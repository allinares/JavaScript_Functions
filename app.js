
// Exercise 1 Section

// function printOdds(count) {
//   for (let i = 1; i <= count; i++) {
//     if (i % 2 != 0) {
//     console.log(i);
//   }
// }
// }

// printOdds(10);
// printOdds(100);

// Exercise 2 Section

// function checkAge (name, age) {
//   let aboveEnoughMsg = `Congrats ${name}, you can drive!`;
//   let tooYoungMsg = `Sorry ${name}, you need to wait ${16 - age} years(s) until you can drive.`;

// if (age < 16) {
//   console.log(tooYoungMsg);
// } else {
//   console.log(aboveEnoughMsg);
// }
// }

// checkAge("Tom", 12);
// checkAge("Molly", 25);
// checkAge("Dave", 44);

// Exercise 3

// function checkQuadrant (x, y) {
//   if (x > 0 && y > 0) {
//     return "Quadrant 1";
//   } else if (x < 0 && y > 0) {
//     return "Quadrant 2";
//   } else if (x < 0 && y < 0) {
//     return "Quadrant 3";
//   } else if (x > 0 && y < 0) {
//     return "Quadrant 4";
//   } else if (x == 0 && y != 0) {
//     return "X Axis";
//   } else if (x != 0 && y == 0) {
//     return "Y Axis";
//   } else {
//     return "Origin";
//   }
// }

// console.log(checkQuadrant(1, 1));
// console.log(checkQuadrant(-1, 1));
// console.log(checkQuadrant(-1, -1));
// console.log(checkQuadrant(1, -1));
// console.log(checkQuadrant(0, -1));
// console.log(checkQuadrant(0, 0));
// console.log(checkQuadrant(1, 0));

// Exercise 4

// function isValidTriangle (a, b, c) {
//   return (a + b > c && a + c > b && b + c > a);
//   // Every two sides must be greater than the third
// }

// function checkTriangle(a, b, c) {
//   let isValid = isValidTriangle(a, b, c);
//   if (isValid) {
//     // What type of triangle?
//     if (a == b && b == c) {
//       return "Equilateral";
//       // If a == b and b == c then a == c by logic
//     } else if (a == b || b == c || a == c) {
//       return "Isosceles";
//     } else {
//       return "Scalene";
//     }
//   } else {
//   return "Not a valid triangle.";
// }
// }

// console.log(checkTriangle(2, 3, 4)); // Scalene
// console.log(checkTriangle(2, 2, 2)); // Equilateral
// console.log(checkTriangle(1, 2, 2)); // Isosceles
// console.log(checkTriangle(1, 1, 2)); // Invalid

// Exercise 5

/*
1. 15 days used, 15 days remaining
2. Average daily use: 3.333 GB/day
3. You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
*/

function dataUsageFeedback(planLimit, day, usage) {
  let periodLength = 30;
  let currentAvg = usage / day;
  let projectedAvg = planLimit / periodLength; // Using the / divison operator to determine average
  let remainingDays = periodLength - day;
  let remainingData = planLimit - usage;
  let projectedUsage = remainingDays * currentAvg;
  let statusMsg; // undefined

  if (currentAvg > projectedAvg) {
    statusMsg = "EXCEEDING";
  } else if (currentAvg < projectedAvg) {
    statusMsg = "UNDER";
  } else {
    statusMsg = "AT";
  } // Assigning a string message to statusMsg depending on whether the conditions are true or false
  
  // What you should be able to use per day
  // Determines whether you are below, on par, or higher than the above projected use
  // A console log that includes string interpolation; intepretes different values and then prints it out
  console.log(`${day} day(s) used, ${remainingDays} day(s) remaining. 
    Average projected use: ${projectedAvg.toFixed(2)} GB/day. 
    You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
   continuing this high usage, you will end up using ${planLimit - (usage + projectedUsage)} GB from your data limit.
   To stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)} GB/day.`);
}

dataUsageFeedback(50, 10, 25); // Calling the function, passing in 3 number parameters