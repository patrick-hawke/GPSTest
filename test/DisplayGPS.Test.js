/**
 * Created by pat on 21/08/2014.
 */

TestCase("DisplayGPSTest", {
    "test GPS": function() {
        var getCoords = new DisplayGPS();
        assertNotNull(getCoords());
    }
});