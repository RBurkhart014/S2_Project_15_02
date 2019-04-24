"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author: Ryan Burkhart
   Date: 4/22/19  
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/


window.addEventListener("load", function () {
      var changingCells = document.querySelectorAll('input[class="sum"]');
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp;
      }
      document.getElementById("submitButton").onclick = validateSummary;
});

//Added an event listener to create the variable changingcells & an id "submitButton"

function validateSummary() {
      var validate = document.getElementById("summary");
      if (validate.validity.valueMissing) {
            validate.setCustomValidity("You must include a summary of the trip in your report.");
      } else {
            validate.setCustomValidity("");
      };
}

//This leaves a placeholder in the tip section so the host ccan tell the user what to do

function calcClass(sumClass) {
      var sumFields = document.getElementsByClassName("sumClass");
      var sumTotal = 0;
      for (var i = 0; i < sumFields.length; i++) {
            var itemValue = parseFloat(sumFields);
            if (itemValue === isNaN()) {

            } else {

            }
      }
      return sumTotal;
}

//This gives the correct reports & displys them

function calcExp() {
      var expTable = document.querySelectorAll(tr);
      for (var i = 0; i < expTable; i++) {
            sutotalIndex = calcClass(dateIndex);
      }
      var transTotal = calcClass(trans);
      var lodgeTotal = calcClass(lodge);
      var mealTotal = calcClass(meal);
      var otherTotal = calcClass(other);
}

//creating all the necessary variables for the fill in's




function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}