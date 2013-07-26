(function () {

  var root = this;

  /**
   * Write constructor that constructs an Animal object from three parameters:
   * species, name, and age. Add a function to the constructed object named 
   * "introduceYourself" that takes no parameters and concatenates and returns a
   * String of the following form:
   *   
   *   Hi! I'm {name} the {species}. I'm {age} years old! In 3 years I will
   *   be {age + 3} years old.
   *
   * Replace {name}, {species}, {age} with the appropriate values and 
   * {age + 3} with the integer sum of age and 3.
   */
  function Animal (species, name, age) {

      this.species = species;
      this.name = name;
      this.age = age;

      this.introduceYourself = function (){
        console.log(this.age);
//          return "Hi! I'm "+ this.name +" the " +
//              this.species +". I'm "+
//              this.age + " years old! In 3 years I will be " +
//              (parseInt(this.age) + 3) + " years old.";
          return "Hi! I'm "+ name +" the " +
              species +". I'm "+
              age + " years old! In 3 years I will be " +
              (parseInt(age) + 3) + " years old.";
     };
  }

  root.Animal = Animal;

}());