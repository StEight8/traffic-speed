		//---------------------------------------------------------------------------
		// Dynamic Traffic - QI News
		//---------------------------------------------------------------------------
		function prettyPrintTrafficQI(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 300px">';
				popupString += '<tr width="20%"><td>Desc</td><td width="80%">' + feature.properties.desc + '</td></tr>';

				popupString += '<tr><td>Type</td><td>' + feature.properties.name + '</td></tr>';
				popupString += '<tr><td>When</td><td>' + feature.properties.DateTimeCreated + '</td></tr>';


				// display coordinates
		      	if (feature.geometry) {
					popupString += '<tr><td width="10%">Lat-Lon</td><td style="word-wrap: break-word">' + 
						feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoTrafficNewsSG = L.geoJson(geoTrafficNewsSG_P, {
				pointToLayer: function (feature, latlng) {
					switch (feature.properties.type) {
						case "#traffic_vehiclebreakdown": return L.marker(latlng, {icon: trafficVehiclebreakdownIcon});
						case "#traffic_accident": return L.marker(latlng, {icon: trafficAccidentIcon});
						case "#traffic_faultylights": return L.marker(latlng, {icon: trafficFaultylightsIcon});
						case "#traffic_heavytraffic": return L.marker(latlng, {icon: trafficHeavyIcon});
						case "#traffic_roadwork": return L.marker(latlng, {icon: trafficRoadworkIcon});
						default : return L.marker(latlng, {icon: trafficUnknownIcon});
					}
			},

			onEachFeature: prettyPrintTrafficQI,
		});
//		var groupTrafficNewsSG_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
//		groupTrafficNewsSG_P.addLayer(lyrgeoTrafficNewsSG);
		//---------------------------------------------------------------------------
		// Dynamic Traffic - Waze
		//---------------------------------------------------------------------------
		function prettyPrintWaze(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 300px">';
				popupString += '<tr width="30%"><td>Name</td><td width="70%">' + feature.properties.name + '</td></tr>';
				popupString += '<tr><td>Street</td><td>' + feature.properties.street +'</td></tr>';
				popupString += '<tr><td>Road Type</td><td>' + feature.properties.roadType +'</td></tr>';
				popupString += '<tr><td>Confidence</td><td>' + feature.properties.confidence + '</td></tr>';
				popupString += '<tr><td>Reliability</td><td>' + feature.properties.reliability + '</td></tr>';
				popupString += '<tr><td>Waze ID</td><td>' + feature.properties.uuid + '</td></tr>';
				popupString += '<tr><td>Reported By</td><td>' + feature.properties.reportBy + '</td></tr>';



				// display coordinates
		      	if (feature.geometry) {
					popupString += '<tr><td width="30%">Lat-Lon</td><td style="word-wrap: break-word">' + 
						feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}


		var lyrgeoTrafficWaze = L.geoJson(geoTrafficWaze_P, {
				pointToLayer: function (feature, latlng) {
					switch (feature.properties.name) {

						case "ACCIDENT": return L.marker(latlng, {icon: wazeAccidentIcon});
						case "CHIT_CHAT": return L.marker(latlng, {icon: wazeChitChatIcon});
						case "HAZARD": return L.marker(latlng, {icon: wazeHazardIcon});
						case "JAM": return L.marker(latlng, {icon: wazeJamIcon});
						case "POLICE": return L.marker(latlng, {icon: wazePoliceIcon});
						case "ROAD_CLOSED": return L.marker(latlng, {icon: wazeRoadClosedIcon});
						default : return L.marker(latlng, {icon: wazeIcon});
					}
			},

			onEachFeature: prettyPrintWaze,
		});


		var groupTrafficNews = new L.LayerGroup();
		groupTrafficNews.addLayer(lyrgeoTrafficNewsSG);
		groupTrafficNews.addLayer(lyrgeoTrafficWaze);



		//---------------------------------------------------------------------------
		//  Dynamic PUB Flood Sensors
		//---------------------------------------------------------------------------
		function prettyPrintPUBFloodSensor(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 300px">';
				popupString += '<tr width="20%"><td>Name</td><td width="80%">' + feature.properties.name +' ('+ feature.properties.code +')</td></tr>';
				popupString += '<tr><td>Status</td><td>' + feature.properties.statusDesc + '</td></tr>';
				popupString += '<tr><td>Water Level</td><td>' + feature.properties.waterLevel + '</td></tr>';
				popupString += '<tr><td>When</td><td>' + feature.properties.createDateDate + '</td></tr>';


				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="10%">Lat-Lon</td><td style="word-wrap: break-word">' + 
						feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoPUB_FloodSensor_P = L.geoJson(geoPUB_FloodSensor_P, {
				pointToLayer: function (feature, latlng) {
					switch (feature.properties.statusCode) {
						case "fs_black": return L.marker(latlng, {icon: floodsensorBlackIcon});
						case "fs_green": return L.marker(latlng, {icon: floodsensorGreenIcon});
						case "fs_red": return L.marker(latlng, {icon: floodsensorRedIcon});
						case "fs_yellow": return L.marker(latlng, {icon: floodsensorYellowIcon});
						default : return L.marker(latlng, {icon: floodsensorBlackIcon});
					}
			},

			onEachFeature: prettyPrintPUBFloodSensor,
		});
		var groupPUB_FloodSensor_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupPUB_FloodSensor_P.addLayer(lyrgeoPUB_FloodSensor_P);

		//---------------------------------------------------------------------------
		//  Dynamic Construction - BCA
		//---------------------------------------------------------------------------
		function prettyPrintBCA(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 300px">';
				popupString += '<tr width="20%"><td>Name</td><td width="80%">' + feature.properties.name + '</td></tr>';
				popupString += '<tr><td>Address</td><td>' + feature.properties.address +' S'+ feature.properties.postalcode +'</td></tr>';
				popupString += '<tr><td>Desc</td><td>' + feature.properties.title + '</td></tr>';
				popupString += '<tr><td>BCA ID</td><td>' + feature.properties.bca_id + '</td></tr>';
				popupString += '<tr><td>LOT NO.</td><td>' + feature.properties.lotno + '</td></tr>';



				// display coordinates
		      	if (feature.geometry) {
					popupString += '<tr><td width="10%">Lat-Lon</td><td style="word-wrap: break-word">' + 
						feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoBCA = L.geoJson(geoBCA_Activity_P, {
				pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: constructionBCAIcon});
			},

			onEachFeature: prettyPrintAll,
		});
		var groupBCA_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupBCA_P.addLayer(lyrgeoBCA);

		//---------------------------------------------------------------------------
		//  Dynamic HDB Carpark Lot - Availabilty
		//---------------------------------------------------------------------------
		function prettyPrintCarparkLot(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td>Name</td><td>' + feature.properties.Name + '</td></tr>';
				popupString += '<tr><td>Vacancy</td><td>' + feature.properties.Vacancy + '</td></tr>';

				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="30%">Lat-Lon</td><td style="word-wrap: break-word">' + 
						feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoCarparkLot = L.geoJson(geoCarparkLot_P, {
				pointToLayer: function (feature, latlng) {
					switch (feature.properties.StatusColor) {
						case "green": return L.marker(latlng, {icon: carparkGreenIcon});
						case "red": return L.marker(latlng, {icon: carparkRedIcon});
						case "orange": return L.marker(latlng, {icon: carparkOrangeIcon});
						case "gray": return L.marker(latlng, {icon: carparkGrayIcon});
						default : return L.marker(latlng, {icon: carparkIcon});
					}
			},

			onEachFeature: prettyPrintCarparkLot,
		});
		var groupCarparkLot_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 15 });
		groupCarparkLot_P.addLayer(lyrgeoCarparkLot);



		//---------------------------------------------------------------------------
		// Dynamic Cameras
		//---------------------------------------------------------------------------
		var groupCameras = new L.LayerGroup();

		function onEachPOINT_floodCam(feature, layer) {
			if (feature.properties) {
				var images = feature.properties.images;
				var slideshowContent = '';

				for(var i = 0; i < images.length; i++) {
					var img = images[i];
	
					slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
	                             	'<img src="' + dirTrafficCam + img + '" width="300" />' +
						'</div>';
				}

				// Create custom popup content
				var popupContent =  '<div id="' + feature.properties.id + '" class="popup">' +
	                       		'<h2>' + feature.properties.name + '</h2>' +
						'<div class="slideshow">' +
						slideshowContent +
						'</div>' +
						'<div class="cycle">' +
						// '<a href="#" class="next" onclick="return window.open(\'file:///D:/My%20Data/TrafficWebCam/MY/'+ feature.properties.name +'.htm\')">History &raquo;</a>' +
	                           '</div>'
      	                 '</div>';

				layer.bindPopup(popupContent,{
	    					closeButton: true,
					minWidth: 300
				});
			}
		}

		// Cameras - Flood
		var lyrFloodCam = L.geoJson(geoWebCamFloodSG, {
				pointToLayer: function (feature, latlng) {
					switch (feature.properties.type) {
						case "#traffic_camera": return L.marker(latlng, {icon: cctvIcon});
						case "#flood_camera": return L.marker(latlng, {icon: floodIcon});
						case "#panorama_camera": return L.marker(latlng, {icon: panoramaIcon});
						case "#cell_tower": return L.marker(latlng, {icon: celltowerIcon});
						case "#camera": return L.marker(latlng, {icon: cameraIcon});
						default : return L.marker(latlng, {icon: baseballIcon});
					}
				},
				onEachFeature: onEachPOINT_floodCam,
		}).addTo(groupCameras);

		//---------------------------------------------------------------------------
		// Cameras - Hospital / Polyclinic
		//---------------------------------------------------------------------------
		var dirImageSGQueueCam  = 'data/geojson/images_sg_polyclinic/';
		function prettyPrintHospital(feature, layer) {
			if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				if (feature.properties.images!=null) {
					var images = feature.properties.images;
					popupString += '<img width="300" src="' + dirImageSGQueueCam + images[0] + '" />';
				}


				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td>NAME</td><td>' + feature.properties.name + '</td></tr>';

				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="30%">Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);
				
			}
		}

		var lyrgeoHospital_P = L.geoJson(geoHospitalSG_P, {
				pointToLayer: function (feature, latlng) {
					switch (feature.properties.fclass) {


						case "clinic": return L.marker(latlng, {icon: clinicIcon});
						case "hospital": return L.marker(latlng, {icon: hospitalIcon});

						default : return L.marker(latlng, {icon: pinIcon});
					}
				},

			onEachFeature: prettyPrintHospital, 
		}).addTo(groupCameras);



		//---------------------------------------------------------------------------
		// Area - Restricted Airspace - Drone 
		//---------------------------------------------------------------------------
		var groupRestrictedAirspace = new L.LayerGroup();

		function prettyPrintDrone(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td width="40%">Name</td><td width="70%">' + feature.properties.MAPTIP + '</td></tr>';
				popupString += '<tr><td>Description</td><td>' + feature.properties.DESCRIPTIO + '</td></tr>';

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoDrone_A = L.geoJson(airDrone, {
			color: "#ff6633", 
			fillColor: "#EDC8A9", 
			weight: 2, 
			opacity: 0.5,

			onEachFeature: prettyPrintDrone,
		}).addTo(groupRestrictedAirspace);
		//---------------------------------------------------------------------------
		// Area - Restricted Airspace - SUALP
		//---------------------------------------------------------------------------
		function prettyPrintSUALP(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td width="40%">Name</td><td width="70%">' + feature.properties.NAME + '</td></tr>';
				popupString += '<tr><td>ICAO</td><td>' + feature.properties.ICAO + '</td></tr>';
				popupString += '<tr><td>CON_AGCY</td><td>' + feature.properties.CON_AGCY + '</td></tr>';
				popupString += '<tr><td>COMM_NAME</td><td>' + feature.properties.COMM_NAME + '</td></tr>';
				popupString += '<tr><td>Frequency</td><td>' + feature.properties.FREQ1 +'/'+ feature.properties.FREQ2 + '</td></tr>';

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoRestricted_A = L.geoJson(airRestricted_A, {
			color: "#ff6633", 
			fillColor: "#FFC800", 
			weight: 2, 
			opacity: 0.7,

			onEachFeature: prettyPrintSUALP,
		}).addTo(groupRestrictedAirspace);

		//---------------------------------------------------------------------------
		//  Dynamic Aircraft Tracks - FlightRadar24
		//---------------------------------------------------------------------------
		function prettyPrintAircraft(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td width="40%">Callsign/Flight No.</td><td width="70%">' + feature.properties.CALLSIGN +' ('+ feature.properties.FLIGHT + ')</td></tr>';
				popupString += '<tr><td>Heading</td><td>' + feature.properties.HEADING + '</td></tr>';
				popupString += '<tr><td>Aircraft Type</td><td>' + feature.properties.AIRCRAFTTYPE + '</td></tr>';
				popupString += '<tr><td>Radar</td><td>' + feature.properties.RADAR + '</td></tr>';
				popupString += '<tr><td>Speed (in Knots)</td><td>' + feature.properties.SPEEDINKNOTS + '</td></tr>';
				popupString += '<tr><td>Start-End</td><td>' + feature.properties.LOCATIONSTART +'->'+ feature.properties.LOCATIONEND +'</td></tr>';


				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="40%">Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoAirDynamic = L.geoJson(geoAirDynamic_P, {
				pointToLayer: function (feature, latlng) {
					var rotAngle = feature.properties.HEADING +'deg';
//				return L.marker(latlng, {icon: aircraftIcon});
					return L.marker(latlng, {icon: L.divIcon({html:'<img src="images/icon_aircraft.png" style="-webkit-transform: rotate(39deg); -moz-transform:rotate('+ rotAngle +');" />'}) } );

			},

			onEachFeature: prettyPrintAircraft,
		});
		var groupAirDynamic_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupAirDynamic_P.addLayer(lyrgeoAirDynamic);

		//---------------------------------------------------------------------------
		// Basemap - Sea - SCS
		//---------------------------------------------------------------------------
		var seaSCSUrl    = urlLocal + 'Sea_SCS/Z{z}/{y}/{x}.png';
		var seaSCSAttrib = 'South China Sea Maps';
		var lyrMapSCS    = new L.TileLayer(seaSCSUrl, {minZoom: 6, maxZoom: 11, attribution: seaSCSAttrib});

		//---------------------------------------------------------------------------
		//  Dynamic Sea Tracks - FleetMon
		//---------------------------------------------------------------------------
		function prettyPrintVessel(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td>Name</td><td>' + feature.properties.name + '</td></tr>';
				popupString += '<tr><td>IMO</td><td>' + feature.properties.imo + '</td></tr>';
				popupString += '<tr><td>Length</td><td>' + feature.properties.length + '</td></tr>';
				popupString += '<tr><td>Speed</td><td>' + feature.properties.speed + '</td></tr>';
				popupString += '<tr><td>Start-End</td><td>' + feature.properties.location +'->'+ feature.properties.destination +'</td></tr>';
				popupString += '<tr><td>Last Reported</td><td>' + feature.properties.lastReported + '</td></tr>';

				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="40%">Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoSeaDynamic = L.geoJson(geoSeaDynamic_P, {
				pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: trackSeaIcon});
			},

			onEachFeature: prettyPrintVessel,
		});
		var groupSeaDynamic_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 13 });
		groupSeaDynamic_P.addLayer(lyrgeoSeaDynamic);

		//---------------------------------------------------------------------------
		// Videos Youtube
		//---------------------------------------------------------------------------
		var groupVideos = new L.LayerGroup();

		var pulsingIcon3 = L.icon.pulse({iconSize:[12,12],color:'red'});
		var mark1 = L.marker([ 1.34268, 103.84043 ],{icon: pulsingIcon3, title: 'Traffic Incident'});
		mark1 .bindPopup("Bradell - Marymount Flyover<video width=\"320\" height=\"280\" controls autoplay><source src=\"data/videos/video_Traffic_SG_02_Braddell.mp4\" type=\"video/mp4\"></video>").openPopup();

		var mark2 = L.marker([ 1.3409, 103.83471 ],{icon: pulsingIcon3, title: 'Traffic Incident'});
		var mark3 = L.marker([ 1.33086, 103.81891 ],{icon: pulsingIcon3, title: 'Traffic Incident'});
		groupVideos.addLayer(mark1);

//		groupVideos.addLayer(mark2);
//		groupVideos.addLayer(mark3);


		//---------------------------------------------------------------------------
		// Traffic Speed - QI
		//---------------------------------------------------------------------------
		var qiTrafficUrl    = urlLocal + 'Traffic_QI_Speed/{z}/{x}/{y}.png';
		var qiTrafficAttrib = 'Quantum Inventions Traffic Speed';
		var lyrQITraffic    = new L.TileLayer(qiTrafficUrl, {minZoom: 7, maxZoom: 16, attribution: qiTrafficAttrib});

		//---------------------------------------------------------------------------
		// Google Traffic
		//---------------------------------------------------------------------------
		var gmTrafficUrl   = '';
		if (localMapTile) {
			gmTrafficUrl = urlLocal + 'GoogleMap_Traffic/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			gmTrafficUrl = 'http://mt0.google.com/vt?hl=en&src=app&lyrs=m@176115983,traffic|seconds_into_week:-1&style=15&x={x}&y={y}&z={z}';
		}
		var gmTrafficAttrib    = '';
		var lyrgmTraffic = new L.TileLayer(gmTrafficUrl, {minZoom: 1, maxZoom: 20, attribution: gmTrafficAttrib});