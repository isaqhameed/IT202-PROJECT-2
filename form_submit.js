$(document).ready(function() {
   
                $("#submit_button").on("click", function(){
                 
                    var url = new URL("https://data.cityofchicago.org/resource/7piw-z6r6.json?");
                    if($("#movie_title").val()) {
                        url.searchParams.set("title", $("#movie_title").val());
                    }
                    if($("#park").val()){
                        url.searchParams.set("park", $("#park").val());
                    }
                    
                  $.get(url,
                    function (data) {         
                        var listOfResults = "";
                        $.each(data, function (i,v) {
                           listOfResults = listOfResults.concat(v.title + " |"+v.park + " |" + v.day+ " |" + v.date + "<br>");
                      
                        });
                         document.getElementById("movie_search_result").innerHTML = listOfResults
   
                            
                           
 
                            
                            
                            
                            
                            
                            

// $(document).ready(function() {

//   let endpoint = "https://data.cityofchicago.org/resource/7piw-z6r6.json?";

//   $("#search_button").on("click", function() {

//     let filterString = $("#info-form").serialize();

//     // clear the display
//     $("#cards").empty();

//     let searchString = $("#movie_title").val();
//     let url = endpoint + "title=" + searchString;

//  //   let results = $("#results").val();

// //     if (results != "") {
// //       url = url + "&status=" + results;
// //     }

//     $.get(url, function(response) {

//       let data = response;

//       $.each(data, function(i, v) {

//         // clone card
//         let clone = $(".template").clone();
//         // update values
//         clone.find(".card-title").text(`Title: ${v.title}`);

// //         clone.find(".card-title").addClass(v.results);

// //         clone.find(".card-title").attr("data-results", v.results);

//         clone.find(".card-subtitle").text(`Park: ${v.park}`);
//         clone.find(".card-location").text(`Address: ${v.street_address}`);
//         clone.find(".card-srn").text(`day: ${v.day}`);
// //         clone.find(".card-where-located").text(`Where graffiti is located: ${v.where_is_the_graffiti_located_}`);
// //         clone.find(".card-type-surface").text(`Type of surface: ${v.what_type_of_surface_is_the_graffiti_on_}`);
// //         clone.find(".card-date-created").text(`Request created: ${v.creation_date}`);
// //         clone.find(".card-compl-date").text(`Completion date: ${v.completion_date}`);

//         // insert into DOM
//         $("#cards").append(clone);
//         clone.show();
     

    });

  });

});