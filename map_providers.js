var providers = {};

providers['Stamen_Toner'] = {
    title: 'toner',
    icon: 'images/stamen_toner.png',
    layer: L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    })
};

providers['OneMapSG'] = {
    title: 'onemap',
    icon: 'images/onemapsg.png',
    layer: L.tileLayer('http://www.onemap.sg/arcgis/rest/services/SM256WGS84/MapServer/tile/{z}/{y}/{x}', {
	  minZoom: 12, 
        maxZoom: 18,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    })
}



providers['HERE_satelliteDay'] = {
    title: 'satellite',
    icon: 'images/here_satelliteday.png',
    layer: L.tileLayer('http://{s}.{base}.maps.cit.api.here.com/maptile/2.1/maptile/{mapID}/satellite.day/{z}/{x}/{y}/256/png8?app_id={app_id}&app_code={app_code}', {
        attribution: 'Map &copy; 1987-2014 <a href="http://developer.here.com">HERE</a>',
        subdomains: '1234',
        mapID: 'newest',
        app_id: 'xWVIueSv6JL0aJ5xqTxb',
        app_code: 'djPZyynKsbTjIUDOBcHZ2g',
        base: 'aerial',
        maxZoom: 20
    })
};



providers['OpenStreetMap_Transport'] = {
    title: 'transport',
    icon: 'images/openstreetmap_transport.png',
    layer: L.tileLayer('http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png', {
        attribution: 'OpenStreetMap - Transport',
        maxZoom: 19
    })
};
