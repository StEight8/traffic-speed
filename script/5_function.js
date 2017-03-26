	//---------------------------------------------------------------------------
	// Open URL in a new WINDOW / TAB
	function openURL(thisURL) {
		window.open(thisURL);
	}

	if (typeof(Number.prototype.toRad) === "undefined") {
		Number.prototype.toRad = function() {
			return this * Math.PI / 180;
		}
	}

	function getTileURL(lat, lon, zoom) {
		var xtile = parseInt(Math.floor( (lon + 180) / 360 * (1<<zoom) ));
		var ytile = parseInt(Math.floor( (1 - Math.log(Math.tan(lat.toRad()) + 1 / Math.cos(lat.toRad())) / Math.PI) / 2 * (1<<zoom) ));
		// 1_y0_x1.png
		return "" + zoom + "_y" + ytile + "_x" + xtile;
	}




	// Map Right-Click Context Menu
	function showCoordinates (e) {
		alert(e.latlng);
	}

	function centerMap (e) {
		map.panTo(e.latlng);
	}

	function zoomIn (e) {
		map.zoomIn();
	}

	function zoomOut (e) {
		map.zoomOut();
	}

	function mapTileZXY (e) {
		tileZXY = getTileURL(e.latlng.lat, e.latlng.lng, map.getZoom())

		if (map.getZoom()==15) {
			urllisting = "listing_acra_"+ tileZXY +".htm";
			window.open(urllisting);
		}
		else {
			alert("supports zoom level 15 only. You are at zoom "+ map.getZoom());
		}

//		window.open("listing_acra_12_y2032_x3229.htm");

//		alert(tileZXY);
	}

	function showGSV (e) {
		urlGSV = "http://maps.google.com/maps?q=&layer=c&cbll="+ e.latlng.lat +","+ e.latlng.lng;
		window.open(urlGSV);

//		alert(tileZXY);
	}

