/******************
 * YOUR CODE HERE *
 ******************/

const newPerson = (newFirstName = "Anonymous", newLastName = "Person", newAge, isMarried = false) => {
  const person = {
  firstName: newFirstName,
  lastName: newLastName,
  age: newAge,
  married: isMarried,
  
  goingOn: function() {
    return person.age + 1;
  },

  ageUp: function() {
    return person.age += 1;
  },
  
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  },

  marry: function(spouse) {
    this.married = true;
    spouse.married = true;
    this.spouseName = spouse.getFullName();
    spouse.spouseName = this.getFullName();
  },

  divorce: function(spouse) {
    this.married = false;
    spouse.married = false;
      delete spouse.spouseName;
      delete this.spouseName;
  },

}
return person;
};

const person = newPerson('Bob', 'Smith', 14, false) //?

person.goingOn() //?

person.ageUp(); //?

person.getFullName() //?
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof newPerson === 'undefined') {
  newPerson = undefined;
}


module.exports = newPerson;
