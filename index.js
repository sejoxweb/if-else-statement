// Import stylesheets
import './style.css';

function isChild(age) {
  // age is less than 18
  if (age >= 0 && age < 18) {
    console.log('his child ' + age);
  } else {
    console.log('his not a child ' + age);
  }
}

isChild(0); // is child
//isAdul(18) // is adult
