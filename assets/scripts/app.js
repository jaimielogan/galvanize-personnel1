// Your code here!

$(document).ready(function(){
  var userRole = $('.roles').text();

  $.ajax({
      url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/roles',
      error: function(err) {console.error(err);},
      method: 'GET',
      success: function(data) {


// Working on dynamically loading in the data from the API
        for(var i of data){
         var $newOpt = $("<option>");
         $newOpt = $newOpt.text(i.title);
         $newOpt = $newOpt.attr("val", i.title);
         $(".roles").append($newOpt);
       }

        $('.roles').change(function() {
          userRole = $('.roles :selected').text();
          for (var i = 0; i < data.length; i++) {
            if (data[i].title === userRole) {
              // Update Image
              $(".image").attr("src", data[i].img);
            }
          }
        });

        // Submit Button
        $("form").submit(function(event){
          event.preventDefault();
          $.ajax({
            type: "POST",
            url: "https://galvanize-student-apis.herokuapp.com/gpersonnel/users",
            data: {
              firstName: $("#first").val(),
              lastName: $("#last").val(),
              role: userRole
            },
            success: $(".save-status").text("Success!").fadeIn(2000).fadeOut(2000)
          });
        });

      }
    });
  });
