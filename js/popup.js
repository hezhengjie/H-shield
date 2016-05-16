$(document).bind("DOMNodeInserted",function(e){
    var content = $("#content_left").children('div');
    content.each(function(index,item){
        if(item.style.display=="block"&&item.style.visibility=="visible")
        {
            item.style.display='none';
            item.style.visibility='hidden';
        }
    });
    $("#ec_im_container").css('display',"none");

});



