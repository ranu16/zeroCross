var counter=0;
var count=0;
for (var i = 0; i < 9; i++) {


$("#column"+counter).on("click", function()
{if (count % 2 === 0) {$(this).html("*")}
	if (count % 2 === 1) {$(this).html(0)}
			count+=1

	if (($("#column0").html()===$("#column1").html()) && ($("#column1").html()===$("#column2").html()) && $("#column0").html()) {
	alert("Player having "+ $("#column0").html() + " have won game");
	$("#column0").css("color","tomato")
	$("#column1").css("color","tomato")
	$("#column2").css("color","tomato")
}

if (($("#column3").html()===$("#column4").html()) && ($("#column4").html()===$("#column5").html()) && $("#column3").html()) {
	alert("Player having "+ $("#column3").html() + " have won game");
	$("#column3").css("color","tomato")
	$("#column4").css("color","tomato")
	$("#column5").css("color","tomato")
}

if (($("#column6").html()===$("#column7").html()) && ($("#column7").html()===$("#column8").html()) && $("#column6").html()) {
	alert("Player having "+ $("#column6").html() + " have won game");
	$("#column6").css("color","tomato")
	$("#column7").css("color","tomato")
	$("#column8").css("color","tomato")
}

if (($("#column0").html()===$("#column3").html()) && ($("#column3").html()===$("#column6").html()) && $("#column0").html()) {
	alert("Player having "+ $("#column0").html() + " have won game");
	$("#column0").css("color","tomato")
	$("#column3").css("color","tomato")
	$("#column6").css("color","tomato")
}

if (($("#column1").html()===$("#column4").html()) && ($("#column4").html()===$("#column7").html()) && $("#column1").html()) {
	alert("Player having "+ $("#column1").html() + " have won game");
	$("#column1").css("color","tomato")
	$("#column4").css("color","tomato")
	$("#column7").css("color","tomato")
}

if (($("#column2").html()===$("#column5").html()) && ($("#column5").html()===$("#column8").html()) && $("#column2").html()) {
	alert("Player having "+ $("#column2").html() + " have won game");
	$("#column2").css("color","tomato")
	$("#column5").css("color","tomato")
	$("#column8").css("color","tomato")
}

if (($("#column0").html()===$("#column4").html()) && ($("#column4").html()===$("#column8").html()) && $("#column0").html()) {
	alert("Player having "+ $("#column0").html() + " have won game");
	$("#column0").css("color","tomato")
	$("#column4").css("color","tomato")
	$("#column8").css("color","tomato")
}

if (($("#column2").html()===$("#column4").html()) && ($("#column4").html()===$("#column6").html()) && $("#column2").html()) {
	alert("Player having "+ $("#column2").html() + " have won game");
	$("#column2").css("color","tomato")
	$("#column4").css("color","tomato")
	$("#column6").css("color","tomato")
}
}
)
counter+=1
}

 
$("#button").on("click",function(){ 
	for (var i = 0; i < 9; i++) {
	$("#column" +i).empty();
	$("#column" +i).css("color","black")
	}})

