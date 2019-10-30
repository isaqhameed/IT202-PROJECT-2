let map;
// storing markers in array for use later
let markersArray = [];

let chicago = {
  lat: 41.8781,
  lng: -87.6298
};

const APIurl = "https://data.cityofchicago.org/resource/7piw-z6r6.json?";

function initMap(){
    let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8781, lng: -87.6298},
    zoom: 11
  });
        

    $.get(APIurl ,function(response){
          let data = response;
          createMarkers(map,data);
          });
    function createMarkers(map, data) {

    $.each(data, function(i, v) {
      let marker;
          
      let location = {
        lat: parseFloat(v.location.latitude),
        lng: parseFloat(v.location.longitude)
      }
        
      if(v.rating == "PG"){
      marker = new google.maps.Marker({
          map: map,
          position: location,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
          }
        })
      } else {
        marker = new google.maps.Marker({
          map: map,
          position: location,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
          }
        })
      }    
        let infowindow = new google.maps.InfoWindow({
        content: 'Title: ' + v.title + '<br/>' + 'Park: ' + v.park +
          '<br/>Address: ' + v.park_address + '<br/>'
        });

      marker.addListener('click', function(results) {
        infowindow.open(map, marker);
      });

//       let textBox = document.getElementById("input-search-bar").innerHTML;
//       console.log(textBox);
//       if (textBox.innerHTML > 0) {
//         marker.setMap(null);

//       }
         });
  }
};