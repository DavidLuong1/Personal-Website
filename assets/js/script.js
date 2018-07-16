/**********************************************************************/
/*   Shorthand For Retrieving Elements By Their ID's                  */
/**********************************************************************/
     function getID(id){
         return document.getElementById(id);
     }

/**********************************************************************/
/*   Smooth Scrolling                                                 */
/**********************************************************************/
     $(window).on('scroll', function(){
         var scrupIcon = $("<img id='sTopIcon' />");
             scrupIcon.attr({
              'src': 'assets/img/arrow.png',
              'alt': 'Up Arrow'                  
             });

         if($(window).scrollTop() > 640){ 
            if($(window).width() > 567){
               $('#header').addClass('active');            
               $('.active').css({
                  'background-color': '#f7f7f7',
                  'padding': '10px 2.5px 10px 10px',
                  'box-shadow': '0px 2.5px 20px #1170aa',
                  'transition': 'all 0.3s ease'  
               });
               $('.items a').css('color', '#000');  
            }

                $(scrupIcon).css({
                  'width': '1.75em',
                  'border-radius': '0.25em',
                  'padding': '5px',            
                  'background-color': '#d8561a', 
                  'position': 'fixed',            
                  'right': '0',            
                  'bottom': '0',
                  'transform': 'rotate(180deg)',                          
                  'cursor': 'pointer'                        
                });
                $(scrupIcon).insertBefore('footer').appendTo('body');                                   
                $(scrupIcon).click(function(){                                        
                    $('html, body').animate({scrollTop: 0}, 'slow');                                        
                });                       

         }               
         else if(!($(window).scrollTop() > 640)){
            if($(window).width() > 567){
                $('#header').removeClass('active');
                $('#header').css({
                  'background-color': '#000',
                  'padding': '20px 2.5px 20px 10px',
                  'box-shadow': 'none'                 
                });
                $('.items a').css('color', '#fff');                
            }          
         }     
     }); //end of onscroll()                 


     $('#header > li:nth-child(2) > a, #arrow').click(function(){
         $('html, body').animate({scrollTop: $('#cover').height()}, 'slow');
     });
     $('#header > li:nth-child(4) > a').click(function(){
         $('html, body').animate({scrollTop: $('#cover').height() + $('#about').height() + 25 * 2}, 'slow');
     });
     $('#header > li:last-child > a').click(function(){
         $('html, body').animate({scrollTop: $('#cover').height() + $('#about').height() + $('#projects').height() + 60}, 'slow');
     }); 
         
     if($(window).width() <= 480){
         $('#header > li:nth-child(4) > a').click(function(){
              $('html, body').animate({scrollDown: $('#cover').height() + $('#about').height()}, 'slow');
         });          
     }
         

/**********************************************************************/
/*  Menu Toggling                                                     */
/**********************************************************************/
     if( $(window).width() <= 567 ){                                             
         $('#header').hide();    
         $('#menu').click(function(){                                  
               $('#header').slideToggle();                                           
         });                                
     }      

     function cross( n ){
         n.classList.toggle("cross");
     }

/**************************************************************************************************************/
/*  Form Validation                                                                                           */
/**************************************************************************************************************/
     function validateForm(){
         var errMsg = '',
               lengthOfFirstName = getID('firstname').value.length,
               lengthOfLastName = getID('lastname').value.length,
               lengthOfEmail = getID('email').value.length;

         if(lengthOfFirstName == 0){
               errMsg += "Please Fill In Your First Name.<br/>";
               getID('firstname').style.border="2px solid #f44336";            
               getID('firstname').style.backgroundColor="#ffe5e5";
         }

         if(lengthOfLastName == 0){
               errMsg += "Please Fill In Your Last Name.<br/>";            
               getID('lastname').style.border="2px solid #f44336";
               getID('lastname').style.backgroundColor="#ffe5e5";
         }

         if(lengthOfEmail == 0){
               errMsg += "Please Provide Your Email Address.<br/>";            
               getID('email').style.border="2px solid #f44336";
               getID('email').style.backgroundColor="#ffe5e5";
         }

         if(lengthOfFirstName != 0 && lengthOfFirstName < 2){
               errMsg += "Your First Name Must Be At Least 2 Letters Long.<br/>";
         }

         if(lengthOfLastName != 0 && lengthOfLastName < 2){
               errMsg += "Your Last Name Must Be At Least 2 Letters Long.<br/>";
         }

         if(errMsg){
               getID('errorMsg').innerHTML = "ERROR: &ensp;Form Cannot Be Submitted.<br/><br/>" + errMsg;
               return false;               
         }else{ return true; }
     }

