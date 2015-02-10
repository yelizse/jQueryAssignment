	$(document).ready(function() {
	$("#div").hide();
	$("#div").show();
	$("ul").fadeIn(5);
	$("ul li").fadeOut(4000);
	$(".question").slideUp();
	$("#some-div").animate({
		 width: 500
		}, 2000, function() {
			$("some-div").animate({
				opacity: 0.5
			});
		});


	$("#some-div").click(function(){
	$("#some-div").animate({
		width: 500
		}, 2000, function() {
			$("some-div").animate({
				opacity: 0.5
			});
		});

	})
	});




	
/*jQuery Cheetsheet

	1- Must add these in order
		<script src="my_library.js"></script>
		<script src="http:/ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
		</script>

		or

		copy & paste the whole jquery source into your local disk.
		then write 		
		<script src="jquery.js"></script>


	2- $ is a shorter version of jQuery
	
	3- Select elements with similar syntax to CSS.
	$("body")
	$("html")
	$(".button")
	$("ul li")
	
	$("p")
	$(".question")
	$("#underline")

	4- Anonymous Function: first-class citizen
		** can be given as an argument to another function
		function(){alert("I am anonymous!");
			}
		** can be returned by a function
		** can be assigned to a variable
			var x = function(){
				alert("Hello!");
			}
	5- Document ready:
	$ (document). ready()
	$ (document).ready(function(){alert("the document is ready")});


	 6- Callback 
	an anonymous function calles some other function
	
	var callBack = function(){
		alert("Hello!");
	}

	Example:

	var showTheResult = function(result){
				alert("Result!");
			}
	 
	an anonymous function takes another function as an argument, does something,
	then runs that other function.
	
	
	function Callbacktwo(callback){console.log(2+2); callback();}

	Example:
	function addTwoNumbers (num1, num2, anyFunction) {
	result = num 1 + num 2; anyfunction(Result);}

	
	Callbacktwo(callback);
	addTwoNumbers(1,2, showTheResult());
	*/





	












