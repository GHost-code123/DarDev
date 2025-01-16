$(document).ready(function() {
    $('#nous').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $('Pourquoi-nous').offset().top
          }, 1000);
      });  

    



})