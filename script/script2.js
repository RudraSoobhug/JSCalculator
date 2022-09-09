$(document).ready(function() {
	  $("#submitButton").click(function(){
	  		var firstName = $('#inputFirstname').val();
			var inputSurname = $('#inputSurname').val();
			var telNumber = $('#inputNumber').val();
			var age = $('#inputAge').val();	
			var obj = { 
				name : firstName, 
				inputSurname: inputSurname,
				telephoneNumber : telNumber,
				age : age
			}

			console.log(obj, '<--');
			if(isNaN(telNumber))
			{
				alert('Invalid Phone Number');
				$('#inputNumber').val('');
			}
			if(age <18)
			{
				alert('You are a minor ! No Entry');
				$('#inputAge').val('');
			}
			
				$('#map').append('<tr>');
				$('#map').append('<td>'+ obj.name +'</td>');
				$('#map').append('<td>'+ obj.inputSurname + '</td>');
				$('#map').append('<td>'+ obj.telephoneNumber + '</td>');
				$('#map').append('<td>'+ obj.age + '</td>');
				$('#map').append('</tr>');
			
	});

	  // $(document).on("click", "#submitButton",function()
	  // {		
	  // 		//alert("entered");
	  // 		var json = $('#myformId').serialize();
	  // 		var stringJson = JSON.stringify(json);
	  // 		console.log(stringJson);
	  // });
	 //  $('#calcButton').click(function()
	 //  {
	 //  	alert("entered");
		// var clickedNumber = $(this).html();
		// console.log(clickedNumber);
		// var initial = $('#calcResult').val();
		// $('#calcResult').val(initial+clickedNumber);
	 //  });

	   $('.calculateButton').on("click", function()
	  {
		var expression = $('#calcString').val();


	  });

	   $('.calcButtonClear').on("click", function()
	   {
	   		$('#calcString').val('');
	   });

	   $('[id^=calcButton').on("click", function()
	   {
	   		//console.log("entered");
	   		var clickedNumber = $(this).html();
	   		console.log(clickedNumber);
	   		var initial = $('#calcString').val();
	   		$('#calcString').val(initial+clickedNumber);
	   });

	   $('#calculationButtonCalculate').on("click", function()
	   {
	   		var evalString = $('#calcString').val();
	   		var result = eval(evalString);
	   		$('#calcString').val(result);
	   		

	   });
	  
	  $('[id^=opCalcButton').on("click", function()
	   {
	   		//console.log("entered");
	   		var clickedNumber = $(this).html();
	   		console.log(clickedNumber);
	   		var initial = $('#opCalcString').val();
	   	
	   		
	   			$('#opCalcString').val(initial+clickedNumber);
	   		
	   		
	   });

	  $('#opCalculationButtonCalculate').on("click", function()
	   {
	   	//text field
	   		var evalString = $('#opCalcString').val();
	   	//array of operator	
	   		var operators = ['/','+','-','*'];
	   		var operator;
	   		var operatorIndex;
	   		var foundIndex;
	   		var result;
	   		//loop through array of operators to find operator index
		   		for(j=0; j<operators.length;j++){
		   				 operatorIndex=evalString.indexOf(operators[j]);
			   				if(operatorIndex != -1)
			   			{
			   				operator = evalString[operatorIndex];
			   				foundIndex = operatorIndex
			   			}
		   		}

		   	//get righthandside number after operator
	   		var rightHandNumber = evalString.substring(foundIndex+1,evalString.length+1)
	   		//get lefthandside number before operator
	   		var leftHandNumber = evalString.substring(0,foundIndex)
	  
	   		//Math Operation with entered operator

	   		switch(operator) {
	   			case '/':
	   			result = parseInt(leftHandNumber) / parseInt(rightHandNumber);
	   			break;
	   			case '+' :
	   			result = parseInt(leftHandNumber) + parseInt(rightHandNumber);
	   			break;
	   			case '-' :
	   			result = parseInt(leftHandNumber) - parseInt(rightHandNumber);
	   			break;
	   			case '*' :
	   			result = parseInt(leftHandNumber) * parseInt(rightHandNumber);
	   			break;
	   			default :
	   			break;
			}
			//Update text field value with result
	   			$('#opCalcString').val(result);

	   });

	  $('.opCalcButtonClear').on("click", function()
	   {
	   		$('#opCalcString').val('');
	   });
});