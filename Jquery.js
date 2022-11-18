$(function(){

    $("img").dblclick(function(){
        var Width = $(this).width();
        var Height = $(this).height();
        alert("width=" + Width + ", " + "Height=" + Height);

        $("img").attr("src", "images/Teardrop Hotels1.jpeg")
    })
    
    $("#fname").click(function(){
        $(this).css("border", "1px solid #ced4da")
    })
    
    $("#lname").click(function(){
        $(this).css("border", "1px solid #ced4da")
    })
    
    $("#uname").click(function(){
        $(this).css("border", "1px solid #ced4da")
    })
    
    
    $("#lname").keyup(function(){
        var lname = $(this).val();
        var fname = $("#fname").val();
       
        if(lname == fname){
            $(this).css("border", "4px solid red");
            $("#fname").css("border", "4px solid red");
            alert("First name and last name are same!!!");            
        }
        else{        
            $("#fname").css("border", "1px solid #ced4da");        
            $(this).css("border", "1px solid #ced4da");
        }
    })

    $("#uname").blur(function(){
        var uname = $(this).val();
       
        if(uname.length < 8){
            $(this).css("border", "4px solid red");
            alert("Username must be at least 8 characters") 
        }
        else{        
            $(this).css("border", "1px solid #ced4da");
        }
    })

})