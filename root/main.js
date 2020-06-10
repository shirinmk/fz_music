$(document).ready(function(){
  


    var imageUrl = "";
  
    $("button").click(function(){
      $("p").hide();
    });
  
      imageUrl = "images/fzBack.jpg";
      $('body').css("background-image", "url(" + imageUrl + ")");
      $('#galleryPage').hide();
      $('#aboutMePage').hide();
      $('#contactPage').hide();
      $('#videoPage').hide();
      $('#musicPage').hide();
  
  
  
     $('#galleryPageMenu').on('click', function(e){
      e.preventDefault();
      imageUrl = "images/gallery8.jpg";
      $('#galleryPage').show();
      $('body').css("background-image", "url(" + imageUrl + ")");
      $('#welcomePage').hide();
      $('#aboutMePage').hide();
      $('#contactPage').hide();
      $('#videoPage').hide();
      $('#musicPage').hide();
      });
  
      $('#homeMenu').on('click', function(e){
       e.preventDefault();
       imageUrl = "images/fzBack.jpg";
       $('#galleryPage').hide();
       $('body').css("background-image", "url(" + imageUrl + ")");
       $('#welcomePage').show();
       $('#aboutMePage').hide();
       $('#contactPage').hide();
       $('#musicPage').hide();
       $('#videoPage').hide();
       });
  
       $('#aboutMenu').on('click', function(e){
        e.preventDefault();
        imageUrl = "images/bioBack.jpg";
        $('#galleryPage').hide();
        $('body').css("background-image", "url(" + imageUrl + ")");
        $('#contactPage').hide();
        $('#aboutMePage').show();
        $('#welcomePage').hide();
        $('#videoPage').hide();
        $('#musicPage').hide();
  
        });
  
        $('#contactMenu').on('click', function(e){
         e.preventDefault();
         imageUrl = "images/gallery5.jpg";
         $('#galleryPage').hide();
         $('body').css("background-image", "url(" + imageUrl + ")");
         $('#contactPage').show();
         $('#aboutMePage').hide();
         $('#welcomePage').hide();
         $('#videoPage').hide();
         $('#musicPage').hide();
         });
  
         $('#musicMenu').on('click', function(e){
          e.preventDefault();
          imageUrl = "images/gallery6.jpg";
          $('#galleryPage').hide();
          $('body').css("background-image", "url(" + imageUrl + ")");
          $('#musicPage').show();
          $('#contactPage').hide();
          $('#aboutMePage').hide();
          $('#welcomePage').hide();
          $('#videoPage').hide();
          });
  
          $('#videoMenu').on('click', function(e){
           e.preventDefault();
           imageUrl = "images/gallery7.jpg";
            $('#videoPage').show();
           $('#galleryPage').hide();
           $('body').css("background-image", "url(" + imageUrl + ")");
           $('#musicPage').hide();
           $('#contactPage').hide();
           $('#aboutMePage').hide();
           $('#welcomePage').hide();
           });
  
  
  
  });
  