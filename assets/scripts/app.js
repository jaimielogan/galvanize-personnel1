// Your code here!
$(document).ready(function(){
  $.ajax({
      url: 'http://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
      error: function(err) {console.error(err);},
      method: 'GET',
      success: function(data) {
        $('.roles').change(function() {
          var userRole = $('.roles :selected').text();
          for (var i = 0; i < data.length; i++) {
            if (data[i].title === userRole) {
              // Update Image
              $(".image").attr("src", data[i].img);
            }
          }
        });

        // Submit Button
        $(".save").on("submit",function(event){
          event.preventDefault();
          $.ajax({
            type: "POST",
            url: "http://galvanize-student-apis.herokuapp.com/gpersonnel/users",
            data: { firstName: $("#first").val(), lastName: $("#last").val(), role: userRole },
            success: $(".save-status").text("Success!").fadeIn(2000).fadeOut(2000)
          });
        });

      }
    });
  });
