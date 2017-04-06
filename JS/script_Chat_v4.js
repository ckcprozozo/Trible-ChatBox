//左側Memberlist點擊交換
$(document).ready(function(){
    $("li.MemberIFO").click(function(){
		$("li.MemberIFO").removeClass("active");
		$(this).addClass("active");
		});
});


//聯絡人視窗交換
/*$(window).resize(function(){

if (matchMedia) {
  var mq = window.matchMedia("(min-width: 480px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}
});


// media query change
function WidthChange(mq) {
  if (mq.matches) {
$(document).ready(function(){
	$("#Member01").click(function(){
		$("#MessageBox1").show("fast");
		$("#MessageBox2").hide("fast");
		});
	$("#Member02").click(function(){
		$("#MessageBox1").hide("fast");
		$("#MessageBox2").show("fast");
		});
	});
}
 else {
$(document).ready(function(){
		$("#Member01").click(function(){
			$("td.MemberListBox").hide("fast");
			$("td.DialogBox").show("fast");
			$("td.TextBox").show("fast");
			});
		});
 	}

}
*/
$("#Member01").click(function(){
if (window.matchMedia("(min-width: 480px)").matches) {
		$("#MessageBox1").show("fast");
		$("#MessageBox2").hide("fast");
}
else{
	$("td.MemberListBox").hide("fast");
			$("td.DialogBox").show("fast");
			$("td.TextBox").show("fast");
	}

});

$("#Member02").click(function(){
if (window.matchMedia("(min-width: 480px)").matches) {
		$("#MessageBox2").show("fast");
		$("#MessageBox1").hide("fast");
}
else{
	$("td.MemberListBox").hide("fast");
			$("td.DialogBox").show("fast");
			$("td.TextBox").show("fast");
	}

});

$(window).resize(function(){
	
if (window.matchMedia("(min-width: 480px)").matches) {
		$("#MessageBox1").show("fast");
		$("#MessageBox2").hide("fast");
			$("td.MemberListBox").show("fast");

} else {
			$("td.MemberListBox").hide("fast");
			$("td.DialogBox").show("fast");
			$("td.TextBox").show("fast");
 	}

});




$(document).ready(function(){
		$(".Swich").click(function(){
			$("td.MemberListBox").show("fast");
			$("td.DialogBox").hide("fast");
			$("td.TextBox").hide("fast");
			});
});




/*文字輸入*/


$(document).ready(function(){
	$("#sendMessage").click(function(){
		
		var strRight = "<div class='row RightSide' style='margin:0'><div class='col-xs-6'> </div><div class='col-xs-5'><p class='pull-right RightSideMember'>" + $('#myTextarea').val() + "</p></div><div class='col-xs-1'><img alt='member' src='http://lorempixel.com/140/140/' /></div></div>";
		
		var child = $("#testdialog").children("div.row").last();
		
		if (child.length <= 0) {
        $("#testdialog").append(strRight);
    }
    else {
        child.append(strRight);
    }
	
	$('#myTextarea').val("");
		});
	});

