var userNumInput = [];

$( document ).ready( function(){
  console.log("JQ");

  $("#equal").click(function(){
    console.log("equal:",equal);
    var num1 = $("#number1").val();
    console.log("number1:",num1);
    var num2 = $("#number2").val();
    console.log("number2:",num2);
    getNumData(num1, num2);
  }); // end of click

}); //end of ready

var getNumData = function(x, y){
    console.log( 'in getNumtData' );
    var newCalc = {
      operator: "+",
      number1: x,
      number2: y
      // addition: $("#addition").val(),
      // subtraction:$("#subtraction").val(),
      // multiplication:$("#multiplication").val(),
      // division: $("#division")
    };
console.log("newCalc:", newCalc);
    $.ajax({
      type: 'POST',
      url: '/calculator',
      data: newCalc,
      success: function( response ){
        console.log( 'back from post call:', response );
      displayOnDom(response);
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
};
//

//
//
//   $( '#testGetButton' ).on( 'click', function(){
//     console.log( 'in testGetButton on click' );
//
//   });
//
//
//   $("#testPostButton").on("click", function(){
//     console.log("is test post working");
//     postData();
//
//  });
//
//
//
//   var displayOnDom = function(testGetFunc){
//     $("#outputDiv").empty();
//       console.log("In testGet:",testGetFunc);
//
//   };
//
// });
