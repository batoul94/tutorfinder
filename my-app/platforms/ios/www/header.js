
document.write("<div id=\"header-wrapper\">");
  document.write("<header class=\"header-main\">");
            
            document.write("<div class=\"page-wrapper\">");
                document.write("<img src=\"img/log56.jpg\">");
                    document.write("<button class=\"button-nav-toggle\"><span class=\"icon\">&#9776;</span></button>");
                    document.write("</div>");
       document.write("</header>");
document.write("</div>");
        document.write("<div class=\"menu\">");
            document.write("<nav class=\"nav-main\">");
                document.write("<div class=\"nav-container\">");
                    document.write("<ul>");
                        document.write("<li><a href=\"howTo.html\">How To Join Us</a></li>");
                        document.write("<li> <a href=\"verification.html\">Verification Process</a>");
                            
                            document.write("<li><a href=\"about.html\">About Us</a></li>");
                            document.write("<li><a href=\"contact.html\">Contact Us</a></li>");

                                 $(document).ready(function() {

                                   var markers = []; 

                                              $.ajax({
                                                      url: 'http://localhost:8888/ajaxCalls/profileAjax.php',
                                                      dataType: 'json',
                                                      success: function(data){
                                                                  $.each(data, function(data, res){
                                                                        markers.push(res);
                                                                  });

                                                             if(markers[0].this_isTutor != ''){
                                                                     document.write("<li><a href=\"profile.html\">My profile</a></li>");
                                                             }

                                                        
                                                         }

                                                    }); //end of ajax call 1


                                      });




                            document.write("</ul>");
                document.write("</div>");
           document.write("</nav>");
         document.write("</div>");








  


