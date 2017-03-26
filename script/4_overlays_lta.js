		//----------------------------------------------------------------------------
		function prettyPrintAll(feature, layer) {
	      	if (feature.properties) {
				var popupString = '<div class="popup" style="text-align : left"><table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
	                  for (var k in feature.properties) {
					var v = feature.properties[k];
					if (v.length>0) {
						popupString += '<tr><td width="25%">'+ k + '</td><td>' + v + '</td></tr>';
					}
				}

				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td>Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}
	
				popupString += '</table></div>';
	
				layer.bindPopup(popupString);
			}
	
			if (!(layer instanceof L.Point)) {
	            	layer.on('mouseover', function () {
	                  	layer.setStyle(hoverStyle);
				});
	
				layer.on('mouseout', function () {
					// layer.setStyle(style);
				});
			}
		}

		//---------------------------------------------------------------------------
		//  Static - LTA - Taxi Stops
		//---------------------------------------------------------------------------
		function prettyPrintTaxi(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td>Name</td><td>' + feature.properties.name + '</td></tr>';
				popupString += '<tr><td>Address</td><td>' + feature.properties.fieldname + '</td></tr>';
				popupString += '<tr><td>With Shelter</td><td>' + feature.properties.fieldshelter + '</td></tr>';

				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="30%">Lat-Lon</td><td style="word-wrap: break-word">' + 
						feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoTaxi_P = L.geoJson(geoTaxiStand_P, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: taxiIcon});
			},

			onEachFeature: prettyPrintTaxi,
		});
		var groupTaxi_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 15 });
		groupTaxi_P.addLayer(lyrgeoTaxi_P);
		//---------------------------------------------------------------------------
		//  Bus Stops
		//---------------------------------------------------------------------------
		function prettyPrintBusStop(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td>Name</td><td>' + feature.properties.BUSSTOP_NAME + '</td></tr>';
				popupString += '<tr><td>Code</td><td>' + feature.properties.BUSSTOP_CODE + '</td></tr>';

				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="30%">Lat-Lon</td><td style="word-wrap: break-word">' + 
						feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoBusStop_P = L.geoJson(geoBusStop_P, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: busstopIcon});
			},

			onEachFeature: prettyPrintBusStop,
		});
		var groupBusStop_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 16 });
		groupBusStop_P.addLayer(lyrgeoBusStop_P);
		//---------------------------------------------------------------------------
		//  Static - LTA - MRT 
		//---------------------------------------------------------------------------
		var groupTrain = new L.LayerGroup();

		var lyrgeoMRTLine_L = L.geoJson(landMRT, {
			color: "#ff33ff", 
			weight: 5, 
			opacity: 0.8,

//			onEachFeature: prettyPrintAll_Area,
		}).addTo(groupTrain);
		//---------------------------------------------------------------------------
		//  Static - LTA - MRT Station
		//---------------------------------------------------------------------------
		function prettyPrintTrain(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td>Name</td><td>' + feature.properties.Name + '</td></tr>';
				popupString += '<tr><td>Address</td><td>' + feature.properties.Address + '</td></tr>';

				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="30%">Lat-Lon</td><td style="word-wrap: break-word">' + 
						feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoTrain_P = L.geoJson(geoTrain_P, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: trainMRTIcon});
			},

			onEachFeature: prettyPrintTrain,
		});
		var groupTrain_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupTrain_P.addLayer(lyrgeoTrain_P);

		groupTrain.addLayer(groupTrain_P);



		//---------------------------------------------------------------------------
		//  Dynamic LTA Carpark Lot - Availabilty
		//---------------------------------------------------------------------------
		function prettyPrintCarparkLotLTA(feature, layer) {
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

		var lyrgeoCarparkLotLTA = L.geoJson(geoCarparkLotLTA_P, {
				pointToLayer: function (feature, latlng) {
					switch (feature.properties.StatusColor) {
						case "green": return L.marker(latlng, {icon: carparkGreenIcon});
						case "red": return L.marker(latlng, {icon: carparkRedIcon});
						case "orange": return L.marker(latlng, {icon: carparkOrangeIcon});
						case "gray": return L.marker(latlng, {icon: carparkGrayIcon});
						default : return L.marker(latlng, {icon: carparkIcon});
					}
			},

			onEachFeature: prettyPrintCarparkLotLTA,
		});
		var groupCarparkLotLTA_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 15 });
		groupCarparkLotLTA_P.addLayer(lyrgeoCarparkLotLTA);




		//---------------------------------------------------------------------------
		// Dynamic Traffic - LTA
		//---------------------------------------------------------------------------
		function prettyPrintTrafficLTA(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 300px">';
				popupString += '<tr width="20%"><td>Name</td><td width="80%">' + feature.properties.name  + '</td></tr>';
				popupString += '<tr><td>When</td><td>' + feature.properties.datetime + '</td></tr>';


				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="10%">Lat-Lon</td><td style="word-wrap: break-word">' + 
						feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoTrafficLTA = L.geoJson(geoLTATraffic_P, {
				pointToLayer: function (feature, latlng) {
					switch (feature.properties.style) {
						case "#traffic_vehiclebreakdown": return L.marker(latlng, {icon: trafficVehiclebreakdownIcon});
						case "#traffic_accident": return L.marker(latlng, {icon: trafficAccidentIcon});
						case "#traffic_faultylights": return L.marker(latlng, {icon: trafficFaultylightsIcon});
						case "#traffic_heavytraffic": return L.marker(latlng, {icon: trafficHeavyIcon});
						case "#traffic_roadwork": return L.marker(latlng, {icon: trafficRoadworkIcon});
						default : return L.marker(latlng, {icon: trafficUnknownIcon});
					}
			},

			onEachFeature: prettyPrintTrafficLTA,
		});

		//---------------------------------------------------------------------------
		//  Dynamic Taxis
		//---------------------------------------------------------------------------
		var lyrgeoTaxiDynamic = L.geoJson(geoTaxiDynamic_P, {
				pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: taxiBlueIcon});
			},
		});
		var groupTaxiDynamic_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 16 });
		groupTaxiDynamic_P.addLayer(lyrgeoTaxiDynamic);


		//---------------------------------------------------------------------------
		// Dynamic Trafiic Speed
		//---------------------------------------------------------------------------
/*
	Performance issues
		var lyrgeoSpeedLTA_L = L.geoJson(landLTASpeed, {
			style: function(feature) {
				if (feature.properties.SPEED!=null) {
					if (feature.properties.SPEED<20) {
						return {color: "#ff3366", weight: 3, opacity: 0.8};
					}
					else if (feature.properties.SPEED>19 && feature.properties.SPEED<40) {
						return {color: "#FFA500", weight: 3, opacity: 0.8};
					}
					else if (feature.properties.SPEED>40) {
						return {color: "#004E00", weight: 3, opacity: 0.8};
					}
					else {
						return {color: "#c0c0c0", weight: 3, opacity: 0.8};
					}
				}
				else {
					return {color: "#c0c0c0", weight: 3, opacity: 0.8};
				}
			},
	
//			onEachFeature: prettyPrintAll_Area,
		});
*/

		//---------------------------------------------------------------------------
		// Dynamic Cameras
		//---------------------------------------------------------------------------
		function onEachPOINT_trafficCam(feature, layer) {
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

		// Cameras - Flood & Traffic
		var lyrTrafficCam = L.geoJson(geoWebCamTrafficSG, {
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
				onEachFeature: onEachPOINT_trafficCam,
		});


		//---------------------------------------------------------------------------
		var ltaTrafficUrl    = urlLocal + 'Traffic_LTA_Speed/{z}/{x}/{y}.png';
		var ltaTrafficAttrib = 'LTA Traffic Speed';
		var lyrLTATraffic    = new L.TileLayer(ltaTrafficUrl, {minZoom: 7, maxZoom: 16, attribution: ltaTrafficAttrib});