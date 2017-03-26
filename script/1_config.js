

	var urlKML       = 'http://192.168.123.100:8080'; // '127.0.0.1:8080'; 
// 	var urlLocal     = '../../../rhcc/data/'; This DOES NOT WORK
	var urlLocal     = '../data/';
	var mapCenterLat = 36.39918; // 14.33644; // 1.36835;    // 3.44278;
	var mapCenterLon = 128.01270;  // 103.76999;  // 101.92421;
	var mapZoom      = 7;
	var localMapTile = false;

	var dirScript    = 'script/';
	var dirData      = 'data/geojson/';

	var dirRemote        = 'https://c5acbdfadff9c521bbc31aa6afee6eb97d0d7c03.googledrive.com/host/0B2ahwC3Xs15tMW4zcVVUdXZKRnM/';
	var dirScriptRemote  = dirRemote + 'script/';
	var dirDataRemote    = dirRemote + 'data/geojson/';

	var dirFloodCam   = 'data/geojson/flood_cam/';
	var dirTrafficCam = 'data/geojson/traffic_cam/';
	var dirPanoromio  = 'data/geojson/images_panoromio/';
	var dirImageAir  = 'data/geojson/images_air/';
	var dirImageSea  = 'data/geojson/images_sea/';

	var dirHADRImage  = 'data/geojson/images_hadr/';

	/* map tile keys - z5MapLayers.js */
	var keyGoogleAerial = '174';
	var keyGoogleRoad   = '306000000';
	var keyNokia        = '451cf15c7a';