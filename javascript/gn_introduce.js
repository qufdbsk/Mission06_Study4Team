  // 스크린 990보다 작을때 on 클래스 생기면서 display-non
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
    // alert 아이디 중복 버튼 추후 아이디수 및 검수 수정예정
    $(".id_overlap button").on("click", function(){
     
      alert("사용할 수 있는 ID 입니다.")
    
    });
        
    });

   
 
 
  
