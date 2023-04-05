// const nickname= "Timmy";
// const firstname = "Timothy";

// console.log("Good Morning, ${nickname} || {firstname}!")

/* when one of the names is there*/
{
  const nickname= "Timmy";
  const firstname = "Timothy";

  console.log(`Good Morning, ${nickname || firstname}!`) /* code was incorrect because whats logged 
  to the console was a normal string instead of template string , the logical OR operator wasnt inside
  a placeholder brackets so it was converted to a string , the expression couldn't be evaluated to select firsname
  when the nickname isnt there*/  
}

/*when neither firstname not nickname is there*/

const nickname= null;
const firstname = undefined;

const noNamesMessage = nickname ?? firstname ?? 'Goodmorning !' // null coercion , checks if both names values are falsey or truthey , specically null and undefined
const nameMessage = `Good Morning, ${nickname || firstname}!`

const greeting = noNamesMessage|| nameMessage

console.log (greeting)


