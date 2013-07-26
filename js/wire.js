$(function () {

  var root = window
    
    , Prob1 = {
        studentFunction   : root.JS101.algebraicOperation,
        leftInput         : $("#prob-1-container .left-input"),
        rightInput        : $("#prob-1-container .right-input"),
        operandSelect     : $("#prob-1-container .operand-select"),
        calculateButton   : $("#prob-1-container .calculate-button"),
        resultSpan        : $("#prob-1-container .result-span")
      }

    , Prob2 = {
        studentFunction   : root.JS101.wordSearch,
        testWordList      : $("#prob-2-container .test-word-list"),
        searchWordForm    : $("#prob-2-container .search-word-form"),
        searchPhraseInput : $("#prob-2-container .search-word-input"),
        runSearchSubmit   : $("#prob-2-container .run-search-submit"),
        testWords         : [
          "Rye",
          "Honey oat",
          "Potato",
          "Sourdough",
          "French",
          "White",
          "Lembas"
        ]
      }

    , Prob3 = {
        studentFunction   : root.JS101.buildAnimalFromFormData,
        animalForm        : $("#prob-3-container .animal-form"),
        formClearLink     : $("#prob-3-container .animal-form-clear"),
        animalOutput      : $("#prob-3-container .animal-output")
      };

  /**
   * Problem 1
   */
  (function () {

    // Clear result when inputs touched
    $.map([
      Prob1.leftInput,
      Prob1.rightInput,
      Prob1.operandSelect
    ], function ($el) {
      $el.bind("change keyup keydown", function () {
        Prob1.resultSpan.text("?");
      });
    });
      
    // Auto-select when inputs clicked
    $.map([
      Prob1.leftInput,
      Prob1.rightInput
    ], function ($el) {
      $el.bind("mouseup", function () {
        $(this).select()
      });
    });

    // Respond to the "calculate" button press
    Prob1.calculateButton.bind("click", function () {
      var x = Prob1.leftInput.val()
        , y = Prob1.rightInput.val()
        , operand = Prob1.operandSelect.val()
        , result;

      try {
        x = parseFloat(x);
        y = parseFloat(y);
        result = Prob1.studentFunction(x, y, operand);
        Prob1.resultSpan
          .css("color", "")
          .text(result);
      } catch (ex) {
        Prob1.resultSpan
          .css("color", "red")
          .text(ex);
      }
      
    });

  }());

  /**
   * Problem 2
   */
  (function () {

    // Populate the <ul> list
    $.each(Prob2.testWords, function () {
      $("<li>")
        .text(this)
        .appendTo(Prob2.testWordList);
    });

    // When the search changes, clear the active classes
    Prob2.searchPhraseInput
      .bind("keydown change", function () {
        Prob2.runSearchSubmit.removeAttr("disabled");
        Prob2.testWordList.find("li").removeClass("active inactive");
      })
      .bind("click", function () {
        $(this).select().trigger("keyup");
      });

    Prob2.searchWordForm.bind("submit", function (e) {
      var searchPhrase = Prob2.searchPhraseInput.val()
        , matchingIndices;

      e && e.preventDefault();

      Prob2.runSearchSubmit.attr("disabled", "disabled");
      matchingIndices = Prob2.studentFunction(Prob2.testWords, searchPhrase);

      if (typeof matchingIndices == "undefined") {
        alert("Matching words index was not an array");
        return;
      }

      Prob2.testWordList.find("li").each(function (i) {
        if (matchingIndices.indexOf(i) >= 0) {
          $(this).addClass("active");
        } else {
          $(this).addClass("inactive");
        }
      });
    });

  }());

  /**
   * Problem 3
   */
  (function () {

    function shuffleArray (a) {
      var shuffled = a.slice(0) // clone the array
        , temp
        , i = shuffled.length
        , j;
      while (--i) {
        j = Math.floor( Math.random() * (i + 1) );
        temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
      }
      return shuffled;
    }

    // When the clear button is clicked, reset the form
    Prob3.formClearLink
      .bind("click", function (e) {
        e && e.preventDefault();
        Prob3.animalForm.find("[name]").val("");
        Prob3.animalOutput.text("");
      })
      .trigger("click");

    // When the form is submitted, serialize the array, shuffle it,
    // and pass to the user's function
    Prob3.animalForm
      .bind("submit", function (e) {
        var data = {}
          , species
          , name
          , age
          , animal
          , formData;

        e && e.preventDefault();

        try {
          formData = $(this).serializeArray();
          animal = Prob3.studentFunction(shuffleArray(formData));
          Prob3.animalOutput
            .removeClass("error")
            .text(animal.introduceYourself())
        } catch (ex) {
          Prob3.animalOutput
            .addClass("error")
            .text("There was an error creating the animal: " + ex);
        }

      })

  }());

});