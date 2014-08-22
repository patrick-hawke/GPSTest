/**
 * Prototype to display the users current GPS coordinates
 */

(function() {
	var x = document.getElementById("coordinates");

    // Executes when the page loads
	window.onload = function() {
		setInterval(function () {
        	getLocation();
//        	showPosition();
			
		}, 500);
       
        // Disable mouse right click by returning false. Context menu isn't displayed
        canvas.oncontextmenu = function () {
            return false;
    };

    // Get the the current location or return an error
	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }
	}
	// Present the location on the screen
	 function showPosition(position) {
	    x.innerHTML = "Latitude: " + position.coords.latitude + 
	    "<br>Longitude: " + position.coords.longitude;
        return x.innerHTML;
	 }
	 
	};


}());