YUI.add('leaflet-for-yui', function(Y){

	var L = {};

	Y.Get.css('http://cdn.leafletjs.com/leaflet-0.4/leaflet.css', function (err) {
	    
		if( !err ) {
		
			Y.Get.js(['http://cdn.leafletjs.com/leaflet-0.4/leaflet.js'], function (err) {
			    if (err) {
			        Y.Array.each(err, function (error) {
			            Y.log( error, 'error', 'leaflet-for-yui' );
			        });
			        return;
			    }

			    Y.Leaflet = L;
				
			});
		
		} else {
		
			Y.log( err, 'error', 'leaflet-for-yui' );
			
		}
		
	});
	
}, '0.0.1', {
	requires:[ 'get' ]
});