/*Landing page*/
$(".about-btn").mouseenter(function () {
	$(this).css("animation-play-state", "paused");
});
$(".about-btn").mouseleave(function () {
	$(this).css("animation-play-state", "running");
});


/*What we do*/
$('.design').click(function(){
    $('img#design').toggle()
    $('.des').toggle()
})
$('.development').click(function(){
    $('img#dev').toggle()
    $('.deve').toggle()
})
$('.product').click(function(){
    $('img#prod').toggle()
    $('.produ').toggle()
})

$('.des').hide()
$('.deve').hide()
$('.produ').hide()



/*Portfolio section*/
$(document).ready(function(){
     
    $('#black').mouseover(function(){
       
        $('#black1').show() 
    }).mouseout(function(){
        $("#black1").hide()
    })
    $('#ontario').mouseover(function(){
        $("#ontario1").show()
    }).mouseout(function(){
        $('#ontario1').hide()
    })
    $('#orange').mouseover(function(){
        $('#orange1').show() 
    }).mouseout(function(){
        $("#orange1").hide()
    })
    $('#demo4').mouseover(function(){
        $("#demo41").show()
    }).mouseout(function(){
        $('#demo41').hide()
    })
    $('#demo5').mouseover(function(){
        $('#demo51').show() 
    }).mouseout(function(){
        $("#demo51").hide()
    })
    $('#demo6').mouseover(function(){
        $("#demo61").show()
    }).mouseout(function(){
        $('#demo61').hide()
    })
    $('#burned').mouseover(function(){
        $('#burned1').show() 
    }).mouseout(function(){
        $("#burned1").hide()
    })
    $('#giraffe').mouseover(function(){
        $("#giraffe1").show()
    }).mouseout(function(){
        $('#giraffe1').hide()
    })

})


/*Pop up alert*/
$('button#submit').click(function(){
    let name=$('input#name').val()
    if(name==""){
        alert("please fill the required fields")
    }
    else {
        alert(`${name}, we have received your message.Thank you for reaching out to us`)
    }
})