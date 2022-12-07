
  $(document).ready(function(){
    if($(this).width() < 990){
      console.log(this);
        $(".navbar-form > div").addClass("on");
    } else {
        $(" .navbar-form > div").removeClass("on");
    }
    $(window).resize(function(){
      if($(this).width() < 990){
      console.log(this);
        $(".navbar-form > div").addClass("on");
    } else {
        $(".navbar-form > div").removeClass("on");
    }
    });
    $(".id_overlap button").on("click", function(){
     
      alert("사용할 수 있는 ID 입니다.")
    
    });
        
    });

   
 
 
  
