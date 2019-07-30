$('.js-preloader').preloadinator({
        minTime: 5000 //첫 화면 보여줄 시간 길이
      });

        //////////////////////////////////////////// 봄이 만든 첫화면
        var text = ['#WeAreWithYouHara', '#Dont_bully_feminist_in_japan', '#디지털_성범죄_아웃','#Metoo'];
        var index = 0;
        function changeText() {
          document.getElementById("text").innerText = text[index];
          index = (index + 1) % 4;
        }
        var interval = window.setInterval(changeText, 1000);
        window.onunload = function () {
          window.clearInterval(interval);
        }
        //////////////////////////////////////////// 봄이 만든 첫화면 끝

$(document).ready(function(){
      $(".flip").click(function(){
        $(".panel1,.panel2,.panel3,.panel4,.panel5,.panel6,.panel7,.panel8,.panel9,.panel10,.panel11,.panel12,.panel13").hide();
        $(".panel").slideToggle("slow");
      });

      $(".flip1").click(function(){
       $(".panel,.panel2,.panel3,.panel4,.panel5,.panel6,.panel7,.panel8,.panel9,.panel10,.panel11,.panel12,.panel13").hide();
       $(".panel1").slideToggle("slow");

     });
      $(".flip2").click(function(){
       $(".panel,.panel1,.panel3,.panel4,.panel5,.panel6,.panel7,.panel8,.panel9,.panel10,.panel11,.panel12,.panel13").hide();
       $(".panel2").slideToggle("slow");

     });

      $(".flip3").click(function(){
        $(".panel,.panel1,panel2,.panel4,.panel5,.panel6,.panel7,.panel8,.panel9,.panel10,.panel11,.panel12,.panel13").hide();
        $(".panel3").slideToggle("slow");
      });

      $(".flip4").click(function(){
        $(".panel,.panel1,.panel2,.panel3,.panel5,.panel6,.panel7,.panel8,.panel9,.panel10,.panel11,.panel12,.panel13").hide();
        $(".panel4").slideToggle("slow");
      });

       $(".flip5").click(function(){
        $(".panel,.panel1,.panel2,.panel3,.panel4,.panel6,.panel7,.panel8,.panel9,.panel10,.panel11,.panel12,.panel13").hide();
        $(".panel5").slideToggle("slow");
      });

      $(".flip6").click(function(){
        $(".panel,.panel3,.panel2,.panel4,.panel5,.panel7,.panel8,.panel1,.panel9,.panel10,.panel11,.panel12,.panel13").hide();
        $(".panel6").slideToggle("slow");
      });
      $(".flip7").click(function(){
        $(".panel,.panel3,.panel2,.panel4,.panel5,.panel6,.panel8,.panel1,.panel9,.panel10,.panel11,.panel12,.panel13").hide();
        $(".panel7").slideToggle("slow");
      });
      $(".flip8").click(function(){
        $(".panel,.panel1,.panel2,.panel3,.panel4,.panel5,.panel6,.panel7,.panel9,.panel10,.panel11,.panel12,.panel13").hide();
        $(".panel8").slideToggle("slow");
      });

      $(".flip9").click(function(){
        $(".panel,.panel1,.panel2,.panel3,.panel4,.panel5,.panel6,.panel7,.panel8,.panel10,.panel11,.panel12,.panel13").hide();
        $(".panel9").slideToggle("slow");
      });

      $(".flip10").click(function(){
        $(".panel,.panel1,.panel2,.panel3,.panel4,.panel5,.panel6,.panel7,.panel9,.panel8,.panel11,.panel12, .panel13").hide();
        $(".panel10").slideToggle("slow");
      });

      $(".flip11").click(function(){
        $(".panel,.panel1,.panel2,.panel3,.panel4,.panel5,.panel6,.panel7,.panel9,.panel10,.panel8, .panel12, .panel13").hide();
        $(".panel11").slideToggle("slow");
      });
     $(".flip12").click(function(){
        $(".panel,.panel1,.panel2,.panel3,.panel4,.panel5,.panel6,.panel7,.panel9,.panel10,.panel8, .panel11, .panel13").hide();
        $(".panel12").slideToggle("slow");
      });
     $(".flip13").click(function(){
        $(".panel,.panel1,.panel2,.panel3,.panel4,.panel5,.panel6,.panel7,.panel9,.panel10,.panel8, .panel11, .panel12").hide();
        $(".panel13").slideToggle("slow");
      });
  

    });

    var x = document.getElementById("audio"); 
    var x1 = document.getElementById("audio1");
    var x2 = document.getElementById("audio2");
    var x3 = document.getElementById("audio3");
    var x4 = document.getElementById("audio4");
    var x5 = document.getElementById("audio5");
    var x6 = document.getElementById("audio6"); 
    var x7 = document.getElementById("audio7"); 
    var x8 = document.getElementById("audio8"); 
    var x9 = document.getElementById("audio9"); 
    var x10 = document.getElementById("audio10"); 
    var x11 = document.getElementById("audio11");
    var x12 = document.getElementById("audio12");
    var x13 = document.getElementById("audio13");
    var x14 = document.getElementById("audio14");

    function play() { 
      x.play();
      x1.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x12.pause();
      x13.pause();
    } 

    function play1() { 
      x1.play(); 
      x.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x12.pause();
      x13.pause();
    } 

   function play2() { 
      x2.play(); 
      x.pause();
      x1.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x12.pause();
      x13.pause();
    } 

    function play3() { 
      x3.play(); 
      x.pause();
      x1.pause();
      x2.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x12.pause();
      x13.pause();
    } 


    function play4() { 
      x4.play(); 
      x.pause();
      x1.pause();
      x2.pause();
      x3.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x12.pause();
      x13.pause();
    } 

  function play5() { 
      x5.play(); 
      x.pause();
      x1.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x12.pause();
      x13.pause();
    } 

    function play6() { 
      x6.play(); 
      x.pause();
      x1.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x12.pause();
      x13.pause();
    } 

    function play7() { 
      x7.play(); 
      x.pause();
      x1.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x12.pause();
      x13.pause();
    } 


    function play8() { 
      x8.play(); 
      x.pause();
      x1.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x12.pause();
      x13.pause();
    } 

    function play9() { 
      x9.play(); 
      x.pause();
      x1.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x10.pause();
      x11.pause();
      x12.pause();
      x13.pause();
    } 


    function play10() { 
      x10.play(); 
      x.pause();
      x1.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x11.pause();
      x12.pause();
      x13.pause();
    } 

    function play11() { 
      x11.play(); 
      x.pause();
      x1.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x12.pause();
      x13.pause();
    } 

    function play12() { 
      x12.play(); 
      x.pause();
      x1.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x13.pause();
    } 

    function play13() { 
      x13.play(); 
      x.pause();
      x1.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x12.pause();
    } 

     function play14() { 
      x.pause();
      x1.pause();
      x2.pause();
      x3.pause();
      x4.pause();
      x5.pause();
      x6.pause();
      x7.pause();
      x8.pause();
      x9.pause();
      x10.pause();
      x11.pause();
      x12.pause();
      x13.pause();
      x14.pause();
    } 

