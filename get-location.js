if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude is " + position.coords.latitude + " Longitude is " + position.coords.longitude);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
