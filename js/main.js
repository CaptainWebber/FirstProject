(function () {

  var root = window;

  root.JS101 = {

    /**
     * == Problem 1 ==
     * Write a function that performs one of four arithmetic operations on two 
     * numbers and returns the result. The operand for this operation is 
     * specified by the "operand" parameter. It will be one of four strings:
     * "add", "subtract", "multiply", or "divide". "x" is the left hand side of 
     * the equation and "y" is the left.
     * @param {Number} x
     * @param {Number} y
     * @param {String} operand
     */
    algebraicOperation: function (x, y, operand) {
      var result;
      switch(operand)
      {
          case "add":
              result = x + y;
              break;
          case "subtract":
              result = x - y;
              break;
          case "multiply":
              result = x * y;
              break;
          case "divide":
              result = x / y;
              break;
      }
      return result;
    },

    /**
     * == Problem 2 ==
     * Write a function that searches an Array of test words for elements that  
     * match a search phrase (case insensitive). Return an array that contains  
     * the indices of matching elements in the original word Array. For example, 
     * if you search ["aBc", "bCd", "xyz"] for the phrase "bc", you should  
     * return an array of indices [0, 1]
     * @param {Array} testWords
     * @param {String} searchPhrase
     */
    wordSearch: function (testWords, searchPhrase) {

      var result = new Array();
      var index;

      for (index=0; index<testWords.length; index++) {
        if (testWords[index].toLowerCase().indexOf(searchPhrase.toLowerCase()) != -1){
          result.push(index);
        }
      }
      return result;
    },

    /**
     * == Problem 3 ==
     * -- Note -- : See animal.js first
     * Write a function that takes an Array of Objects, constructs an Animal 
     * object from the data in that Array, and returns the Animal instance. Each
     * Object in the Array corresponds to an input on the Animal form and has 
     * exactly two fields: "name" and "value". "name" is the name of the input
     * (species, name, or age) and "value" is the value in the form input.
     * i.e. formData[0].name yields the name of the input, formData[1].value
     * yields the value in the input.
     * -- IMPORTANT! -- : The formData array is in no particular order!
     * @param {Array} formData
     */
    buildAnimalFromFormData: function (formData) {

     // var animal = new Animal();
     // animal[formData[0].name] = formData[0].value;
     // animal[formData[1].name] = formData[1].value;
     // animal[formData[2].name] = formData[2].value;
        var values = new Array();
        formData.forEach(function makeAnimal(map) {
            values[map.name] = map.value;
        });
        return new Animal(values['species'], values['name'], values['age']);
     // return animal;
    }

  };

}());