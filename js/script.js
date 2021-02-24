$(document).ready(function(){
    $('#btn1').click(function(){
        $('h1').hide();

    })
    $('#btn2').click(function(){
        $('h1').show();

    })
    $('#btn3').click(function(){
        if($('#btn3').val()=="Show"){
            $("h1").hide();
            $("#btn3").val("Hide");
        }else{
            $('h1').show();
            $("#btn3").val("Show");
        }

    })
    $('#btn4').click(function(){
        $('#div1').animate({
            left:"500px"
        });

    })
    $('#btn5').click(function(){
        $('#div2').animate({
            right:"500px"
        });})
    $('#btn6').click(function(){
        $('#div2').fadeIn(500);})
        
    $('#btn7').click(function(){
        $('#div2').fadeOut(500);
        $('#div2').css({"background-color":"red"})
    })
    $('#btn8').click(function(){
        $('#div3').slideUp(500);
        
    })
    $('#btn8').click(function(){
        $('#div3').slideDown(500);
        
    })
    $('#btn9').click(function(){
        $('#div3').empty();
        
    })

    })
    $('#btn10').click(function(){
        $('#div3').remove();
        
    })
    $('#btn11').click(function(){
        $('#div3').addClass("orange");
        
    })

    $('#btn12').click(function(){
        $('#div3').removeClass("orange");
        
    })

    