//show
$(document).ready(function(){
    var EnrollShow = true; 
      $('#hide').click(function(){
      if(EnrollShow){
          $("#show").show(800);
          EnrollShow = false;
          $(".Enrollment").css("height","1350px");
        }
    });
    $("#EnrollmentRead").click(function(){
        $("#show").css("display","none");
        EnrollShow = true;
        $(".Enrollment").css("height","980px");
    })    
})
//phone
$(function(){
    $("#EnrollmentPhone").keyup(function(){
        var sMobile = document.EnrollmentForm.pwd.value 
        if(!(/^\d{8}$/.test(sMobile))){ 
            $(".EnrollmentPhoneReg").html("请输入8位数密码"); 
            $(".EnrollmentPhoneReg").css({color:"#f00"});     
            document.EnrollmentForm.pwd.focus(); 
            return false; 
        }else{
            $(".EnrollmentPhoneReg").html("格式正确");
            $(".EnrollmentPhoneReg").css({color:"#0f0"});   
        }
    })
    $(".EnrollmentSubmit").click(function(event){
        event.preventDefault();
        if(!(/^\d{8}$/.test(document.EnrollmentForm.pwd.value)) || !($("#EnrollmentName").val())){
          $(".EnrollmentPhoneReg").html("请重新输入");
          $(".EnrollmentPhoneReg").css({color:"f00"});
        }
        $.ajax({
            url:'http://www.qhdlink-student.top/student/login.php',
            data:{"username":$("input[name=names]").val(),"userpwd":$("input[name=pwd]").val(),"userclass":61,"type":2},
            type:"post",
            success:function(data){
                if(data == 'ok') {
                    location.href="../public.html"  
                } else {
                    alert("密码错误");
                }               
            }
        })
    }) 
})
//input
