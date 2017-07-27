function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
	var directionsDisplay2 = new google.maps.DirectionsRenderer;
    var directionsService2 = new google.maps.DirectionsService;
	var directionsDisplay3 = new google.maps.DirectionsRenderer;
    var directionsService3 = new google.maps.DirectionsService;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7
    });
	var map2 = new google.maps.Map(document.getElementById('map2'), {
	      zoom: 7
    });
	var map3 = new google.maps.Map(document.getElementById('map3'), {
      zoom: 7
    });

    directionsDisplay.setMap(map);
	//var radios = document.getElementsByName("grp1");
 
    //取得したラジオボタンオブジェクトから選択されたものを探し出す
  /*	var result;
  	for(var i=0; i<radios.length; i++){
    	if (radios[i].checked) {
      		//選択されたラジオボタンのvalue値を取得する
      		result = radios[i].value;
      		break;
    	}
  	}*/
    calculateAndDisplayRoute(directionsService, directionsDisplay,"JR久留米駅");
	directionsDisplay2.setMap(map2);
	calculateAndDisplayRoute(directionsService2, directionsDisplay2,"西鉄久留米駅");
	directionsDisplay3.setMap(map3);
	calculateAndDisplayRoute(directionsService3, directionsDisplay3,"西鉄宮の陣駅");
    }

    function calculateAndDisplayRoute(directionsService, directionsDisplay,result) {
    var start = result;
    var end = "久留米高専";
    directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
}
