const removeFromArray = function() {
  const arrayToEdit = arguments[0];

  for(let i = 1; i < arguments.length; i++) {
    const itemToRemove = arrayToEdit.indexOf(arguments[i]);
    if(itemToRemove === -1) {continue; }
    arrayToEdit.splice(itemToRemove,  1);
  }

  return(arrayToEdit);  
};

// Do not edit below this line
module.exports = removeFromArray;
