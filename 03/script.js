//Exercise 3 

function debounce(fn, t) {
  let timeout; // created a variable to store timeout id

  let lastCallTime = 0; // initialized a variable to keep track of whenthe last function was called
  let lastCallArgs = []; // initialized a variable to store arguments of last function call

  return function (...args) { // returns a new function that accepts new arguments
    const currentTime = Date.now(); // gets the current timestamp

    lastCallArgs = args; // stores current function call's arguments to use later

    if (currentTime - lastCallTime >= t) {
      // if the time since the last call is > or = to 't', execute the function immediately
      fn(...args);         // calls the original function with the provided arguments
      lastCallTime = currentTime; // updates the timestamp of the last call
    } else {
      // if a new call occurs within  debounce time, clears previous timeout and schedules a new one
      clearTimeout(timeout); // clears any previous timeout
      timeout = setTimeout(() => {
        fn(...lastCallArgs);   // calls the original function with previous arguments
        lastCallTime = Date.now(); // updates the timestamp of the last call
      }, t);                   // schedules the function execution after the debounce time 't'
    }
  };
}

