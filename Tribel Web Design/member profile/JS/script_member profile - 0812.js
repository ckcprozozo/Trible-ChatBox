//通知/體驗/訊息 交換

//點擊訊息
$(document).ready(function(){
    $("#InboxListNotice-link").click(function(){
		$("li.DropdownMenuForMessage").hide();
		$("li.DropdownMenuForExpMessage").hide();
    });
})

$(document).ready(function(){
    $("#InboxListMessage-link").click(function(){
        $("li.DropdownMenuForMessage").show();
		$("li.DropdownMenuForExpMessage").hide();
    });
})

$(document).ready(function(){
    $("#InboxListExp-link").click(function(){
        $("li.DropdownMenuForExpMessage").show();
		$("li.DropdownMenuForMessage").hide();
    });
})


