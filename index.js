
$(document).ready(function(){
  
    
   $(".keyboard").hide(); 
     $(".numb_text").hide();
        $("#change").click(function(){
            $(".keyboard").slideDown(1000);
        });
      $(".numbers").click(function(){
         $(".keyboard").hide(); 
         $(".numb_text").show(); 
          $("#change").click(function(){
            $(".keyboard").hide();
        });
      });
    $(".ABC").click(function(){
       $(".numb_text").hide();
        $(".keyboard").show();
        $("#change").click(function(){
            $(".keyboard").show();
        });
    });
    document.onkeydown = checkKey;
    function checkKey(e) {
        if(e.keyCode == 27){
                $(".esc").addClass("active");
                setTimeout(function(){
                    $(".esc").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
                $(".keyboard").slideUp(1000);
                $("#change").val("");
        }
        if(e.keyCode == 81){
           $(".q").addClass("active");
                setTimeout(function(){
                    $(".q").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 87){
           $(".w").addClass("active");
                setTimeout(function(){
                    $(".w").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 69){
           $(".e").addClass("active");
                setTimeout(function(){
                    $(".e").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 82){
           $(".r").addClass("active");
                setTimeout(function(){
                    $(".r").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 84){
           $(".t").addClass("active");
                setTimeout(function(){
                    $(".t").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 89){
           $(".y").addClass("active");
                setTimeout(function(){
                    $(".y").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 85){
           $(".u").addClass("active");
                setTimeout(function(){
                    $(".u").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
         if(e.keyCode == 73){
           $(".i").addClass("active");
                setTimeout(function(){
                    $(".i").removeClass("active");
                }, 200);
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
         if(e.keyCode == 79){
           $(".o").addClass("active");
                setTimeout(function(){
                    $(".o").removeClass("active");
                }, 200);
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
         if(e.keyCode == 80){
           $(".p").addClass("active");
                setTimeout(function(){
                    $(".p").removeClass("active");
                }, 200);
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        //Caps Lock
         if(e.keyCode == 20){
           $(".caps_lock").addClass("active");
                setTimeout(function(){
                    $(".caps_lock").removeClass("active");
                }, 200);
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
             if ($(".keyboard").hasClass(".caps_lock") == false) {
			  $('.dail').toggleClass('uppercase');
                
			  
		    } 
            
         }
        //------
        if(e.keyCode == 65){
           $(".a").addClass("active");
                setTimeout(function(){
                    $(".a").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        
         if(e.keyCode == 83){
           $(".s").addClass("active");
                setTimeout(function(){
                    $(".s").removeClass("active");
                }, 200);
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
         if(e.keyCode == 68){
           $(".d").addClass("active");
                setTimeout(function(){
                    $(".d").removeClass("active");
                }, 200);
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
         if(e.keyCode == 70){
           $(".f").addClass("active");
                setTimeout(function(){
                    $(".f").removeClass("active");
                }, 200);
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
         if(e.keyCode == 71){
           $(".g").addClass("active");
                setTimeout(function(){
                    $(".g").removeClass("active");
                }, 200);
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
         if(e.keyCode == 72){
           $(".h").addClass("active");
                setTimeout(function(){
                    $(".h").removeClass("active");
                }, 200);
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
         if(e.keyCode == 74){
           $(".j").addClass("active");
                setTimeout(function(){
                    $(".j").removeClass("active");
                }, 200);
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
         if(e.keyCode == 75){
           $(".k").addClass("active");
                setTimeout(function(){
                    $(".k").removeClass("active");
                }, 200);
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 76){
           $(".l").addClass("active");
                setTimeout(function(){
                    $(".l").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 9){
           $(".tab").addClass("active");
                setTimeout(function(){
                    $(".tab").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        }
        if(e.keyCode == 90){
           $(".z").addClass("active");
                setTimeout(function(){
                    $(".z").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 88){
           $(".x").addClass("active");
                setTimeout(function(){
                    $(".x").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 67){
           $(".c").addClass("active");
                setTimeout(function(){
                    $(".c").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 86){
           $(".v").addClass("active");
                setTimeout(function(){
                    $(".v").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 66){
           $(".b").addClass("active");
                setTimeout(function(){
                    $(".b").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 78){
           $(".n").addClass("active");
                setTimeout(function(){
                    $(".n").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 77){
           $(".m").addClass("active");
                setTimeout(function(){
                    $(".m").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        //Backspace
        if(e.keyCode == 8){
           $(".backspace").addClass("active");
                setTimeout(function(){
                    $(".backspace").removeClass("active");
                }, 200);
             $(".del").addClass("active");
                setTimeout(function(){
                    $(".del").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        //----
        //Num Lock
        if(e.keyCode == 144){
           $(".numbers").addClass("active");
                setTimeout(function(){
                    $(".numbers").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
            
            
            
        } 
        //----
        if(e.keyCode == 91){
           $(".win").addClass("active");
                setTimeout(function(){
                    $(".win").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } 
        if(e.keyCode == 32){
           $(".space").addClass("active");
                setTimeout(function(){
                    $(".space").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        }
        if(e.keyCode == 13){
           $(".enter").addClass("active");
                setTimeout(function(){
                    $(".enter").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	        audio.play();
        }
        if(e.keyCode == 16){
           $(".shift").addClass("active");
                setTimeout(function(){
                    $(".shift").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
            if ($(".keyboard").hasClass(".caps_lock") == false) {
			  $('.dail').toggleClass('uppercase');
            }
        }
         
        //Numbersss
         if(e.keyCode == 97){
           $(".num_1").addClass("active");
                setTimeout(function(){
                    $(".num_1").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        }
         if(e.keyCode == 98){
           $(".num_2").addClass("active");
                setTimeout(function(){
                    $(".num_2").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        }
        if(e.keyCode == 99){
           $(".num_3").addClass("active");
                setTimeout(function(){
                    $(".num_3").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        }
         if(e.keyCode == 100){
           $(".num_4").addClass("active");
                setTimeout(function(){
                    $(".num_4").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        }
         if(e.keyCode == 101){
           $(".num_5").addClass("active");
                setTimeout(function(){
                    $(".num_5").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        }
        if(e.keyCode == 102){
           $(".num_6").addClass("active");
                setTimeout(function(){
                    $(".num_6").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        }
         if(e.keyCode == 103){
           $(".num_7").addClass("active");
                setTimeout(function(){
                    $(".num_7").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        } if(e.keyCode == 104){
           $(".num_8").addClass("active");
                setTimeout(function(){
                    $(".num_8").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        }
         if(e.keyCode == 105){
           $(".num_9").addClass("active");
                setTimeout(function(){
                    $(".num_9").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        }
         if(e.keyCode == 96){
           $(".num_0").addClass("active");
                setTimeout(function(){
                    $(".num_0").removeClass("active");
                }, 200);
            var audio=new Audio('hover_sound.mp3');
	           audio.play();
        }
        
        
    }
    function clicks(){
        $(".esc").click(function(){
                setTimeout(function(){
                    $(".esc").removeClass("active");
                }, 200);
                $(".keyboard").slideUp(1000);
        });
        
        $(".dail, #tab, #space").click(function(){
            var string = $(this).data("string");
            $("#change").val(function(){
               return this.value + string; 
            }); $(this).addClass("active").delay(200).removeClass("active");
        });
        $(".caps_lock").click(function(){
             $('.dail').toggleClass('uppercase');
           $('#change').toggleClass('uppercase_lowercase');
            
        });
        $(".shift").click(function(){
             $('.dail').toggleClass('uppercase');
           $('#change').toggleClass('uppercase_lowercase');
            
        });
        
    }
    clicks();
         $(".dail").mouseover(function(){
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
         });
        $(".enter, .shift, .caps_lock, .backspace, .win, .numbers, .esc, .del, .ABC").mouseover(function(){
             var audio=new Audio('hover_sound.mp3');
	           audio.play();
         });
       
  

 /*  $(".maleres").mouseout(function(){
      $("#jnjel").show();
     $("#fral").removeClass("animate");
     $("#fral").hide(); 
  });*/
     
   $("#welcome").click(function(){
       $(".homepage-hero-module").css({display:"block"});
       $(".menu").fadeIn("slow");
       $('.dail').removeClass('uppercase');
    $('.mediPlayer').mediaPlayer();
       var my_life = $("#my_life").val();
       $("#input1").val("Կցանկանայիք երաժշտություն -" + my_life);
       setTimeout(function(){
           $(".inp  input").show();
            $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000); 
        }, 33500);
       if($("#female").is(':checked')){
          if(my_life == "Anna" || my_life == "Ann" || my_life == "anna" || my_life == "Anul" || my_life == "Anyutka" || my_life == "Anulik" || my_life == "anulik" || my_life == "ann" || my_life == "an" || my_life == "anulik" || my_life == "Աննա" || my_life == "Անուլ" || my_life == "Անուլիկ" || my_life == "Անյուտկա" || my_life == "աննա" || my_life == "անուլ" || my_life == "անուլիկ"){
              $("body").css({
                  background: "url('images/restourant_anna.jpg')"
                });
            }
           else if(my_life == "Alica" || my_life == "Alice" || my_life == "alica" || my_life == "alice" || my_life == "alisa" || my_life == "Alisa" || my_life == "Alise" || my_life == "Alicka" || my_life == "Aliska" || my_life == "alicka" || my_life == "Alic" || my_life == "Alis" || my_life == "Ալիսս" || my_life == "Ալիսկա" || my_life == "Ալիսա" || my_life == "ալիսա" || my_life == "ալիս"){
                    $("body").css({ background:"url('images/restourant_alice.jpg')"
                    });
                 }
          else if (my_life == "Mari" || my_life == "mari" || my_life == "mar" || my_life == "Mar" || my_life == "Մարի" ||  my_life == "մարի"){
                    $("body").css({ background:"url('images/restourant_mari.jpg')"
                    });
                 }
           else{
               $("body").css({ background:"url('images/restourant.jpg')"
                    });
           }
               $(".femaleres").show();
           setTimeout(function(){
               $(".femaleres").hide();
               $(".anachq").show();
               $(".achq").show();
               $(".achq").addClass("key");
           }, 38000);
                
           $("#change").change(function(){
               
            if($("#change").val()=="jur kbereq"){ 
                setTimeout(function(){
                    $(".muzics").fadeIn("slow");
                }, 13000);
               $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
            
           setTimeout(function(){
               $(".femaleres").show();
               $(".anachq").hide();
               $(".achq").hide();
           }, 2000);
           setTimeout(function(){
               $(".bajak").show();
               $(".dexin_matucox").append($(".bajak"));
                $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
               $(".dexin_matucox").removeClass("rotate");
                $(".padnos").removeClass("left");
               
           },6000);
                setTimeout(function(){
                   $(".femaleres").hide();
                   $(".anachq").show();
                   $(".achq").show();
               }, 10000);
           setTimeout(function(){
                   $(".bajak2").show();
                   $(".bajak").hide();
                   $(".bajak2").addClass("axjik_bajak");
               
                 
               $(".achq").addClass("key");
               $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
               }, 12000);
                
            }
            else if($("#change").val()=="es qaxcac em"){
                $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
                setTimeout(function(){
                   $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
                }, 2000);
                setTimeout(function(){
                   $(".chisburger").show();
                   $(".dexin_matucox").append($(".chisburger"));
                $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000); $(".dexin_matucox").removeClass("rotate");
                $(".padnos").removeClass("left");
                }, 6000);
                setTimeout(function(){
                   $(".femaleres").hide();
                   $(".anachq").show();
                   $(".achq").show();
               }, 10000);
                setTimeout(function(){
                    $(".chisburger").hide();
                    $(".chisburger2").show();
                    $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
                }, 12000);
            }
               else  if($("#change").val()=="paxpaxak em uzum"){
                $(".modal_window").fadeOut("slow");
                $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
                setTimeout(function(){
                    $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
                }, 2000);
                setTimeout(function(){
                   $(".ice_cream").show();
                   $(".dexin_matucox").append($(".ice_cream"));
                    $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
                   $(".dexin_matucox").removeClass("rotate");
                    $(".padnos").removeClass("left");
                },6000);
                setTimeout(function(){
                  $(".femaleres").hide();
                   $(".anachq").show();
                   $(".achq").show();
               }, 10000);
               setTimeout(function(){
                   $(".chisburger").hide();
                    $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
                   $(".ice_cream").hide();
                    $(".ice_cream2").show();
               }, 12000);
            }
            else if($("#change").val()=="im hashivy bereq"){ 
                 
               $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
            
           setTimeout(function(){
               $(".femaleres").show();
               $(".anachq").hide();
               $(".achq").hide();
           }, 2000);
           setTimeout(function(){
               $(".menu_price").show();
               $(".dexin_matucox").append($(".menu_price"));
                $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
               $(".dexin_matucox").removeClass("rotate");
                $(".padnos").removeClass("left");
               
           },6000);
                setTimeout(function(){
                   $(".femaleres").hide();
                   $(".anachq").show();
                   $(".achq").show();
               }, 10000);
           setTimeout(function(){
                   $(".menu_price2").show();
                   $(".menu_price").hide();
                   $(".menu_price2").addClass(".axjik_menu_price");
               
                 
               $(".achq").addClass("key");
               $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
               }, 12000);
                setTimeout(function(){
                var ann = $("#my_life").val();
                if(ann == "Anna" || ann == "Ann" || ann == "anna" || ann == "Anul" || ann == "Anyutka" || ann == "Anulik" || ann == "anulik" || ann == "ann" || ann == "an" || ann == "anulik" || ann == "Աննա" || ann == "Անուլ" || ann == "Անուլիկ" || ann == "Անյուտկա" || ann == "աննա" || ann == "անուլ" || ann == "անուլիկ"){
                    $(".anna").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
                else if(ann == "Alica" || ann == "Alice" || ann == "alica" || ann == "alice" || ann == "alisa" || ann == "Alisa" || ann == "Alise" || ann == "Alicka" || ann == "Aliska" || ann == "alicka" || ann == "Alic" || ann == "Alis" || ann == "Ալիսս" || ann == "Ալիսկա" || ann == "Ալիսա" || ann == "ալիսա" || ann == "ալիս"){
                    
                   $(".alice").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
               else if(ann == "Mari" || ann == "mari" || ann == "mar" || ann == "Mar" || ann == "Մարի" || ann == "մարի"){
                   $(".mari").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
                else {
                    $(".none_female").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                }
                }, 13000);
             }
               else{
                   $(".modal_window").fadeIn("slow");
                   $("#input").val("Ներողություն - " + my_life + " ցանկում առկա չէ Ձեր պատվերից:");
               }
           });
           
           // click aneluca anum sax
           
           $(".enter").click(function(){
               
            if($("#change").val()=="jur kbereq"){ 
                setTimeout(function(){
                    $(".muzics").fadeIn("slow");
                }, 13000);
               $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000);
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
            
           setTimeout(function(){
               $(".femaleres").show();
               $(".anachq").hide();
               $(".achq").hide();
           }, 2000);
           setTimeout(function(){
               $(".bajak").show();
               $(".dexin_matucox").append($(".bajak"));
                $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
               $(".dexin_matucox").removeClass("rotate");
                $(".padnos").removeClass("left");
               
           },6000);
                setTimeout(function(){
                   $(".femaleres").hide();
                   $(".anachq").show();
                   $(".achq").show();
               }, 10000);
           setTimeout(function(){
                   $(".bajak2").show();
                   $(".bajak").hide();
                   $(".bajak2").addClass("axjik_bajak");
               
                 
               $(".achq").addClass("key");
               $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
               }, 12000);
                
            }
            else if($("#change").val()=="es qaxcac em"){
                $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
                setTimeout(function(){
                   $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
                }, 2000);
                setTimeout(function(){
                   $(".chisburger").show();
                   $(".dexin_matucox").append($(".chisburger"));
                $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000); $(".dexin_matucox").removeClass("rotate");
                $(".padnos").removeClass("left");
                }, 6000);
                setTimeout(function(){
                   $(".femaleres").hide();
                   $(".anachq").show();
                   $(".achq").show();
               }, 10000);
                setTimeout(function(){
                    $(".chisburger").hide();
                    $(".chisburger2").show();
                    $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
                }, 12000);
            }
               else  if($("#change").val()=="paxpaxak em uzum"){
                $(".modal_window").fadeOut("slow");
               $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000);
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
                setTimeout(function(){
                    $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
                }, 2000);
                setTimeout(function(){
                   $(".ice_cream").show();
                   $(".dexin_matucox").append($(".ice_cream"));
                    $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
                   $(".dexin_matucox").removeClass("rotate");
                    $(".padnos").removeClass("left");
                },6000);
                setTimeout(function(){
                  $(".femaleres").hide();
                   $(".anachq").show();
                   $(".achq").show();
               }, 10000);
               setTimeout(function(){
                   $(".chisburger").hide();
                    $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
                   $(".ice_cream").hide();
                    $(".ice_cream2").show();
               }, 12000);
            }
            else if($("#change").val()=="im hashivy bereq"){ 
                    
               $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000);
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
            
           setTimeout(function(){
               $(".femaleres").show();
               $(".anachq").hide();
               $(".achq").hide();
           }, 2000);
           setTimeout(function(){
               $(".menu_price").show();
               $(".dexin_matucox").append($(".menu_price"));
                $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
               $(".dexin_matucox").removeClass("rotate");
                $(".padnos").removeClass("left");
               
           },6000);
                setTimeout(function(){
                   $(".femaleres").hide();
                   $(".anachq").show();
                   $(".achq").show();
               }, 10000);
           setTimeout(function(){
                   $(".menu_price2").show();
                   $(".menu_price").hide();
                   $(".menu_price2").addClass(".axjik_menu_price");
               
                 
               $(".achq").addClass("key");
               $(".femaleres").show();
                   $(".anachq").hide();
                   $(".achq").hide();
               }, 12000);
                setTimeout(function(){
                var ann = $("#my_life").val();
                if(ann == "Anna" || ann == "Ann" || ann == "anna" || ann == "Anul" || ann == "Anyutka" || ann == "Anulik" || ann == "anulik" || ann == "ann" || ann == "an" || ann == "anulik" || ann == "Աննա" || ann == "Անուլ" || ann == "Անուլիկ" || ann == "Անյուտկա" || ann == "աննա" || ann == "անուլ" || ann == "անուլիկ"){
                    $(".anna").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
                else if(ann == "Alica" || ann == "Alice" || ann == "alica" || ann == "alice" || ann == "alisa" || ann == "Alisa" || ann == "Alise" || ann == "Alicka" || ann == "Aliska" || ann == "alicka" || ann == "Alic" || ann == "Alis" || ann == "Ալիսս" || ann == "Ալիսկա" || ann == "Ալիսա" || ann == "ալիսա" || ann == "ալիս"){
                    
                   $(".alice").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
               else if(ann == "Mari" || ann == "mari" || ann == "mar" || ann == "Mar" || ann == "Մարի" || ann == "մարի"){
                   $(".mari").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
                else {
                    $(".none_female").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                }
                }, 13000);
             }
                           
               else{
                   $(".modal_window").fadeIn("slow");
                   $("#input").val("Ներողություն - " + my_life + " ցանկում առկա չէ Ձեր պատվերից:");
               }
           });
           
       }
        
         if($("#male").is(':checked')){
               
                if(my_life == "Art" || my_life == "Artur" || my_life == "Arhur" || my_life == "Արթուր" || my_life == "art" || my_life == "arthur" || my_life == "artur" || my_life == "art"){
                    $("body").css({ background:"url('images/restourant.jpg')"
                    });
                 }
             else if(my_life == "Armen" || my_life == "Arm" || my_life == "armen" || my_life == "arm" || my_life == "Armenchik" || my_life == "Armenchik jan" || my_life == "armenchik" || my_life == "Արմեն" || my_life == "Արմենչիկ" || my_life == "Արմ"){
              
                    $("body").css({
                        background:"url('images/restourant_armen.jpg')"
                    });
                 }
                else if(my_life == "Mko" || my_life == "MKO" || my_life == "Mkrtich" || my_life == "mko" || my_life == "mkrtich" || my_life == "Մկո" || my_life == "մկո" || my_life == "մկրտիչ"){
                    $("body").css({
                       background:"url('images/restourant_mk.jpg')"
                    });
                 }
                else {
                    $("body").css({
                       background:"url('images/restourant.jpg')"
                    });
                }
               $(".maleres").show();
             setTimeout(function(){
             /*txa*/
             $("#jnjel").hide();
             $("#fral").show(); 
              $("#fral").addClass("animate");
             /*axjik*/
             
          },5000);
       $("#change").change(function(){
           
            if($("#change").val()=="jur kbereq"){ 
                setTimeout(function(){
                    $(".muzics").fadeIn("slow");
                }, 13000);
                $(".modal_window").fadeOut("slow");
                $(".dexin").addClass("show");
                $(".minion").addClass("hide");
               $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
            
           setTimeout(function(){
               $("#jnjel").show();
                $("#fral").hide();
           }, 2000);
           setTimeout(function(){
               $(".bajak").show();
               $(".dexin_matucox").append($(".bajak"));
                $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
               $(".dexin_matucox").removeClass("rotate");
                $(".padnos").removeClass("left");
           },6000);
           setTimeout(function(){
                   $(".bajak2").show();
                   $(".bajak").hide();
                   $("#jnjel").show();
                   $("#fral").hide();
               }, 12000);
                setTimeout(function(){
                   $("#jnjel").hide();
                   $("#fral").show(); 
                   $("#fral").addClass("animate");
               }, 10000);
            }
          
            else  if($("#change").val()=="es qaxcac em"){
                $(".modal_window").fadeOut("slow");
                $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
                setTimeout(function(){
                    $("#jnjel").show();
                    $("#fral").hide();
                }, 2000);
                setTimeout(function(){
                   $(".chisburger").show();
                   $(".dexin_matucox").append($(".chisburger"));
                    $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
                   $(".dexin_matucox").removeClass("rotate");
                    $(".padnos").removeClass("left");
                },6000);
                setTimeout(function(){
                   $("#jnjel").hide();
                   $("#fral").show(); 
                   $("#fral").addClass("animate");
               }, 10000);
               setTimeout(function(){
                   $("#jnjel").show();
                   $("#fral").hide();
                   $(".chisburger").hide();
                    $(".chisburger2").show();
               }, 12000);
            }
           else  if($("#change").val()=="paxpaxak em uzum"){
                $(".modal_window").fadeOut("slow");
                $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
                setTimeout(function(){
                    $("#jnjel").show();
                    $("#fral").hide();
                }, 2000);
                setTimeout(function(){
                   $(".ice_cream").show();
                   $(".dexin_matucox").append($(".ice_cream"));
                    $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
                   $(".dexin_matucox").removeClass("rotate");
                    $(".padnos").removeClass("left");
                },6000);
                setTimeout(function(){
                   $("#jnjel").hide();
                   $("#fral").show(); 
                   $("#fral").addClass("animate");
               }, 10000);
               setTimeout(function(){
                   $("#jnjel").show();
                   $("#fral").hide();
                   $(".ice_cream").hide();
                    $(".ice_cream2").show();
               }, 12000);
            }
            else if($("#change").val()=="im hashivy bereq"){
                $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
            
           setTimeout(function(){
                    $("#jnjel").show();
                    $("#fral").hide();
                }, 2000);
           setTimeout(function(){
               $(".menu_price").show();
               $(".dexin_matucox").append($(".menu_price"));
                $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
               $(".dexin_matucox").removeClass("rotate");
                $(".padnos").removeClass("left");
               
           },6000);
               setTimeout(function(){
                   $("#jnjel").hide();
                   $("#fral").show(); 
                   $("#fral").addClass("animate");
               }, 10000);
           setTimeout(function(){
                   $(".menu_price2").show();
                   $(".menu_price").hide();
                   $(".menu_price2").addClass(".axjik_menu_price");
                    $("#jnjel").show();
                   $("#fral").hide();
               }, 12000);
               setTimeout(function(){
                   var arm = $("#my_life").val();
                if(arm == "Armen" || arm == "Arm" || arm == "armen" || arm == "arm" || arm == "Armenchik" || arm == "Armenchik jan" || arm == "armenchik" || arm == "Արմեն" || arm == "Արմենչիկ" || arm == "Արմ"){
                    $(".arm").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
                else if(arm == "Art" || arm == "Artur" || arm == "Arhur" || arm == "Արթուր" || arm == "art" || arm == "arthur" || arm == "artur" || arm == "art"){
                    
                   $(".art").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
                else if(arm == "Mko" || arm == "MKO" || arm == "Mkrtich" || arm == "mko" || arm == "mkrtich" || arm == "Մկո" || arm == "մկո" || arm == "մկրտիչ"){
                    
                   $(".mk").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
                else {
                    $(".none_male").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                }
               }, 13000);
              
             }
            else{
                   $(".modal_window").fadeIn("slow");
                   $("#input").val("Ներողություն - " + my_life + " ցանկում առկա չէ Ձեր պատվերից:");
               }
         });
             
             //click aneluca anelu sax
             
             $(".enter").click(function(){
           
            if($("#change").val()=="jur kbereq"){ 
                setTimeout(function(){
                    $(".muzics").fadeIn("slow");
                }, 13000);
                $(".modal_window").fadeOut("slow");
                $(".dexin").addClass("show");
                $(".minion").addClass("hide");
              $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
            
           setTimeout(function(){
               $("#jnjel").show();
                $("#fral").hide();
           }, 2000);
           setTimeout(function(){
               $(".bajak").show();
               $(".dexin_matucox").append($(".bajak"));
                $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
               $(".dexin_matucox").removeClass("rotate");
                $(".padnos").removeClass("left");
           },6000);
           setTimeout(function(){
                   $(".bajak2").show();
                   $(".bajak").hide();
                   $("#jnjel").show();
                   $("#fral").hide();
               }, 12000);
                setTimeout(function(){
                   $("#jnjel").hide();
                   $("#fral").show(); 
                   $("#fral").addClass("animate");
               }, 10000);
            }
          
            else  if($("#change").val()=="es qaxcac em"){
                $(".modal_window").fadeOut("slow");
              $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000);
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
                setTimeout(function(){
                    $("#jnjel").show();
                    $("#fral").hide();
                }, 2000);
                setTimeout(function(){
                   $(".chisburger").show();
                   $(".dexin_matucox").append($(".chisburger"));
                    $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
                   $(".dexin_matucox").removeClass("rotate");
                    $(".padnos").removeClass("left");
                },6000);
                setTimeout(function(){
                   $("#jnjel").hide();
                   $("#fral").show(); 
                   $("#fral").addClass("animate");
               }, 10000);
               setTimeout(function(){
                   $("#jnjel").show();
                   $("#fral").hide();
                   $(".chisburger").hide();
                    $(".chisburger2").show();
               }, 12000);
            }
           else  if($("#change").val()=="paxpaxak em uzum"){
                $(".modal_window").fadeOut("slow");
                $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
                setTimeout(function(){
                    $("#jnjel").show();
                    $("#fral").hide();
                }, 2000);
                setTimeout(function(){
                   $(".ice_cream").show();
                   $(".dexin_matucox").append($(".ice_cream"));
                    $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
                   $(".dexin_matucox").removeClass("rotate");
                    $(".padnos").removeClass("left");
                },6000);
                setTimeout(function(){
                   $("#jnjel").hide();
                   $("#fral").show(); 
                   $("#fral").addClass("animate");
               }, 10000);
               setTimeout(function(){
                   $("#jnjel").show();
                   $("#fral").hide();
                   $(".ice_cream").hide();
                    $(".ice_cream2").show();
               }, 12000);
            }
            else if($("#change").val()=="im hashivy bereq"){ 
                $(".dexin_matucox").animate({left: '+=500', marginTop: '-=200'}, 6000); 
                $(".dexin_matucox").addClass("rotate");
                $(".padnos").addClass("left");
            
           setTimeout(function(){
                    $("#jnjel").show();
                    $("#fral").hide();
                }, 2000);
           setTimeout(function(){
               $(".menu_price").show();
               $(".dexin_matucox").append($(".menu_price"));
               $(".dexin_matucox").animate({left: '-=500', marginTop: '+=200'}, 6000);
               $(".dexin_matucox").removeClass("rotate");
                $(".padnos").removeClass("left");
               
           },6000);
               setTimeout(function(){
                   $("#jnjel").hide();
                   $("#fral").show(); 
                   $("#fral").addClass("animate");
               }, 10000);
           setTimeout(function(){
                   $(".menu_price2").show();
                   $(".menu_price").hide();
                   $(".menu_price2").addClass(".axjik_menu_price");
                    $("#jnjel").show();
                   $("#fral").hide();
               }, 12000);
               setTimeout(function(){
                   var arm = $("#my_life").val();
                if(arm == "Armen" || arm == "Arm" || arm == "armen" || arm == "arm" || arm == "Armenchik" || arm == "Armenchik jan" || arm == "armenchik" || arm == "Արմեն" || arm == "Արմենչիկ" || arm == "Արմ"){
                    $(".arm").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
                else if(arm == "Art" || arm == "Artur" || arm == "Arhur" || arm == "Արթուր" || arm == "art" || arm == "arthur" || arm == "artur" || arm == "art"){
                    
                   $(".art").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
                else if(arm == "Mko" || arm == "MKO" || arm == "Mkrtich" || arm == "mko" || arm == "mkrtich" || arm == "Մկո" || arm == "մկո" || arm == "մկրտիչ"){
                    
                   $(".mk").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                 }
                else {
                    $(".none_male").fadeIn("slow");
                    $(".rgba").css({
                       background:"rgba(0,0,0,0.9)",
                        display:"block"
                    });
                }
               }, 13000);
             }
            else{
                   $(".modal_window").fadeIn("slow");
                   $("#input").val("Ներողություն - " + my_life + " ցանկում առկա չէ Ձեր պատվերից:");
               }
         });
             
        }
       $(".dexin_matucox").show();
      $("#aside").hide();
       var div = $(".dexin");
       var div1 = $(".padnos");
       var div2 = $(".bajak");
       var div3 = $(".chisburger");
       var div4 = $(".minion");
       var div5 = $(".ice_cream");
       var div6= $(".menu_price");
     for(i=0;i<1000; i++){
        div.animate({height: '450px'},  "fast");
        div.animate({width: '290px'}, "fast");
        div.animate({height: '440px'},  "fast");
        div.animate({width: '280px'}, "fast");     	
    }
       for(i=0;i<1000; i++){
        div1.animate({marginTop: '200px'},  "fast");
        div1.animate({marginLeft: '10px'}, "fast");
        div1.animate({marginTop: '195px'},  "fast");
        div1.animate({marginLeft: '0px'}, "fast");     	
    }
        for(i=0;i<1000; i++){
        div2.animate({marginTop: '180px'},  "fast");
        div2.animate({marginLeft: '10px'}, "fast");
        div2.animate({marginTop: '175px'},  "fast");
        div2.animate({marginLeft: '0px'}, "fast");     	
    }
       for(i=0;i<1000; i++){
        div3.animate({marginTop: '195px'},  "fast");
        div3.animate({marginLeft: '10px'}, "fast");
        div3.animate({marginTop: '190px'},  "fast");
        div3.animate({marginLeft: '0px'}, "fast");     	
    }
    for(i=0;i<1000; i++){
        div4.animate({marginTop: '15px'},  "fast");
        div4.animate({marginLeft: '10px'}, "fast");
        div4.animate({marginTop: '10px'},  "fast");
        div4.animate({marginLeft: '0px'}, "fast");     	
    }
       for(i=0;i<1000; i++){
        div5.animate({marginTop: '195px'},  "fast");
        div5.animate({marginLeft: '10px'}, "fast");
        div5.animate({marginTop: '190px'},  "fast");
        div5.animate({marginLeft: '0px'}, "fast");     	
    }
        for(i=0;i<1000; i++){
        div6.animate({marginTop: '216px'},  "fast");
        div6.animate({marginLeft: '10px'}, "fast");
        div6.animate({marginTop: '210px'},  "fast");
        div6.animate({marginLeft: '0px'}, "fast");     	
    }
       $(".fillWidth").trigger("play");
       
        scaleVideoContainer();

        initBannerVideoSize('.video-container .poster img');
        initBannerVideoSize('.video-container .filter');
        initBannerVideoSize('.video-container video');

        $(window).on('resize', function() {
            scaleVideoContainer();
            scaleBannerVideoSize('.video-container .poster img');
            scaleBannerVideoSize('.video-container .filter');
            scaleBannerVideoSize('.video-container video');
        });



        function scaleVideoContainer() {

            var height = $(window).height();
            var unitHeight = parseInt(height) + 'px';
            $('.homepage-hero-module').css('height',unitHeight);

        }

        function initBannerVideoSize(element){

            $(element).each(function(){
                $(this).data('height', $(this).height());
                $(this).data('width', $(this).width());
            });

            scaleBannerVideoSize(element);

        }

        function scaleBannerVideoSize(element){

            var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            videoWidth,
            videoHeight;

            $(element).each(function(){
                var videoAspectRatio = $(this).data('height')/$(this).data('width');

                $(this).width(windowWidth);

                if(windowWidth < 10000){
                    videoHeight = windowHeight;
                    videoWidth = videoHeight / videoAspectRatio;
                    $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                    $(this).width(videoWidth).height(videoHeight);
                }

                $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

            });
        }
     
        setTimeout(function(){
            $(".homepage-hero-module").hide(); 
        }, 33500);
     /*$("body").addClass("restourant");*/
         
        var my_life = $("#my_life").val(); 
        $("#valu_arm").text("Շնորհակալություն Քեզ -  " + my_life + " մեզ այցելելու համար...");
         $("#valu_ann").text("Շնորհակալություն Քեզ -  " + my_life + " մեզ այցելելու համար...");
       $("#valu_all").text("Շնորհակալություն Քեզ -  " + my_life + " մեզ այցելելու համար...");
       $("#none_female").text("Շնորհակալություն Քեզ -  " + my_life + " մեզ այցելելու համար...");
       $("#none_male").text("Շնորհակալություն Քեզ -  " + my_life + " մեզ այցելելու համար...");
       $("#valu_art").text("Շնորհակալություն Քեզ -  " + my_life + " մեզ այցելելու համար...");
       $("#valu_mk").text("Շնորհակալություն Քեզ -  " + my_life + " մեզ այցելելու համար...");
       $("#valu_mar").text("Շնորհակալություն Քեզ -  " + my_life + " մեզ այցելելու համար...");
        $("#close_anna").click(function(){
            $(".rgba").fadeOut("slow");
            $(".anna").fadeOut("slow");
           setTimeout(function(){
                (function pulse(back) {
                    $("#see_you").fadeIn("slow");
                    $("#see svg").fadeIn("slow");
                    $(".bg_none").show();
                   $(".bg_none").show();
                    $('#see_you img').animate(
                        {
                            width: (back) ? $('#see_you img').width() + 20 : $('#see_you img').width() - 20            
                        }, 700);
                    $('#see_you').animate(
                        {          
                            'font-size': (back) ? '100px' : '140px',
                            opacity: (back) ? 1 : 0.5
                        }, 700, function(){pulse(!back)});
                    })(false);
            }, 1000);
        });
       
        $("#close_arm").click(function(){
            $(".arm").fadeOut("slow");
            $(".rgba").fadeOut("slow");
            setTimeout(function(){
                (function pulse(back) {
                     $("#see_you").fadeIn("slow");
                    $("#see svg").fadeIn("slow");
                    $(".bg_none").show();
                   
                    $('#see_you img').animate(
                        {
                            width: (back) ? $('#see_you img').width() + 20 : $('#see_you img').width() - 20            
                        }, 700);
                    $('#see_you').animate(
                        {          
                            'font-size': (back) ? '100px' : '140px',
                            opacity: (back) ? 1 : 0.5
                        }, 700, function(){pulse(!back)});
                    })(false);
            }, 1000);
        });
       $("#close_alice").click(function(){
            $(".alice").fadeOut("slow");
            $(".rgba").fadeOut("slow");
           setTimeout(function(){
                (function pulse(back) {
                     $("#see_you").fadeIn("slow");
                    $("#see svg").fadeIn("slow");
                    $(".bg_none").show();
                    $('#see_you img').animate(
                        {
                            width: (back) ? $('#see_you img').width() + 20 : $('#see_you img').width() - 20            
                        }, 700);
                    $('#see_you').animate(
                        {          
                            'font-size': (back) ? '100px' : '140px',
                            opacity: (back) ? 1 : 0.5
                        }, 700, function(){pulse(!back)});
                    })(false);
            }, 1000);
        });
       
       $("#close_none_female").click(function(){
            $(".none_female").fadeOut("slow");
            $(".rgba").fadeOut("slow");
           setTimeout(function(){
                (function pulse(back) {
                     $("#see_you").fadeIn("slow");
                    $("#see svg").fadeIn("slow");
                    $(".bg_none").show();
                    $('#see_you img').animate(
                        {
                            width: (back) ? $('#see_you img').width() + 20 : $('#see_you img').width() - 20            
                        }, 700);
                    $('#see_you').animate(
                        {          
                            'font-size': (back) ? '100px' : '140px',
                            opacity: (back) ? 1 : 0.5
                        }, 700, function(){pulse(!back)});
                    })(false);
            }, 1000);
        });
       
       $("#close_none_male").click(function(){
            $(".none_male").fadeOut("slow");
            $(".rgba").fadeOut("slow");
           setTimeout(function(){
                (function pulse(back) {
                     $("#see_you").fadeIn("slow");
                    $("#see svg").fadeIn("slow");
                    $(".bg_none").show();
                    $('#see_you img').animate(
                        {
                            width: (back) ? $('#see_you img').width() + 20 : $('#see_you img').width() - 20            
                        }, 700);
                    $('#see_you').animate(
                        {          
                            'font-size': (back) ? '100px' : '140px',
                            opacity: (back) ? 1 : 0.5
                        }, 700, function(){pulse(!back)});
                    })(false);
            }, 1000);
        });
        
       $("#close_art").click(function(){
            $(".art").fadeOut("slow");
            $(".rgba").fadeOut("slow");
           setTimeout(function(){
                (function pulse(back) {
                     $("#see_you").fadeIn("slow");
                    $("#see svg").fadeIn("slow");
                    $(".bg_none").show();
                    $('#see_you img').animate(
                        {
                            width: (back) ? $('#see_you img').width() + 20 : $('#see_you img').width() - 20            
                        }, 700);
                    $('#see_you').animate(
                        {          
                            'font-size': (back) ? '100px' : '140px',
                            opacity: (back) ? 1 : 0.5
                        }, 700, function(){pulse(!back)});
                    })(false);
            }, 1000);
        });
       
       $("#close_mari").click(function(){
            $(".mk").fadeOut("slow");
            $(".rgba").fadeOut("slow");
           setTimeout(function(){
                (function pulse(back) {
                     $("#see_you").fadeIn("slow");
                    $("#see svg").fadeIn("slow");
                    $(".bg_none").show();
                    $('#see_you img').animate(
                        {
                            width: (back) ? $('#see_you img').width() + 20 : $('#see_you img').width() - 20            
                        }, 700);
                    $('#see_you').animate(
                        {          
                            'font-size': (back) ? '100px' : '140px',
                            opacity: (back) ? 1 : 0.5
                        }, 700, function(){pulse(!back)});
                    })(false);
            }, 1000);
        });
        
       $("#close_mk").click(function(){
            $(".mari").fadeOut("slow");
            $(".rgba").fadeOut("slow");
           setTimeout(function(){
                (function pulse(back) {
                     $("#see_you").fadeIn("slow");
                    $("#see svg").fadeIn("slow");
                    $(".bg_none").show();
                    $('#see_you img').animate(
                        {
                            width: (back) ? $('#see_you img').width() + 20 : $('#see_you img').width() - 20            
                        }, 700);
                    $('#see_you').animate(
                        {          
                            'font-size': (back) ? '100px' : '140px',
                            opacity: (back) ? 1 : 0.5
                        }, 700, function(){pulse(!back)});
                    })(false);
            }, 1000);
        });
     
       
    });
    $(".close").click(function(){
       $(this).parent().fadeOut();
    });
    $("#false").click(function(){
       $(".muzics").fadeOut("slow");
    });
    $("#true").click(function(){
       $(".mediPlayer").fadeIn("slow");
        setTimeout(function(){
           $(".muzics").fadeOut("slow"); 
        }, 800);
        
    });
   
});
    




   