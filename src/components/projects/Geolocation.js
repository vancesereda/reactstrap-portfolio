

/*const GetGeoLocation = () => {
    function getUserLocation() {
        return new Promise(function(resolve, reject) {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(resolve);
            } else {
              reject("Geolocation is not supported by this browser")
            }
        });
      }
      
      function showPosition(position) {
          var coordinates = new Array();
          coordinates.push(Math.floor(position.coords.latitude));
          coordinates.push(Math.floor(position.coords.longitude));
         // This works
          return coordinates;
      }
      getUserLocation()
        .then(showPosition)
        .catch(function(err) {
          console.log(err);
        });
}

*/

