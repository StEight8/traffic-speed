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

		//----------------------------------------------------------------------------
		function prettyPrintAll_Area(feature, layer) {
	      	if (feature.properties) {
				var popupString = '<div class="popup" style="text-align : left"><table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
	                  for (var k in feature.properties) {
					var v = feature.properties[k];
					if (v.length>0) {
						popupString += '<tr><td width="25%">'+ k + '</td><td>' + v + '</td></tr>';
					}
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
		//----------------------------------------------------------------------------
		function prettyPrintOneMap(feature, layer) {
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
		//  Child-care
		//---------------------------------------------------------------------------
		var lyrgeoChildcare_P = L.geoJson(geoChildcare_P, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: childcareIcon});
			},

			onEachFeature: prettyPrintOneMap,
		});
		var groupChildcare_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupChildcare_P.addLayer(lyrgeoChildcare_P);

		//---------------------------------------------------------------------------
		//  Food Centre
		//---------------------------------------------------------------------------
		var lyrgeoFoodCentre_P = L.geoJson(geoFoodCentre_P, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: restaurantIcon});
			},

			onEachFeature: prettyPrintOneMap,
		});
		var groupFoodCentre_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupFoodCentre_P.addLayer(lyrgeoFoodCentre_P);


		//---------------------------------------------------------------------------
		// HDB - Flats
		//---------------------------------------------------------------------------
		function prettyPrintHDBFlats(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td>Address</td><td>' + feature.properties.Blk +' '+ feature.properties.Address + '</td></tr>';
				popupString += '<tr><td>Room-Type</td><td>' + feature.properties.RoomType + '</td></tr>';
				popupString += '<tr><td>Lease</td><td>' + feature.properties.LeaseCommencedDate +' ('+ 
							feature.properties.LeaseRemaining +' of '+ feature.properties.LeasePeriod+' years)</td></tr>';


				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="30%">Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoHDBFlats_P = L.geoJson(geoHDBFlats_P, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: hdbFlatIcon});
			},

			onEachFeature: prettyPrintHDBFlats,
		});
		var groupHDBFlats_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupHDBFlats_P.addLayer(lyrgeoHDBFlats_P);
//		map.addLayer(groupHDBFlats_P);



		//---------------------------------------------------------------------------
		//  Market
		//---------------------------------------------------------------------------
		var lyrgeoMarket_P = L.geoJson(geoMarket_P, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: marketIcon});
			},

			onEachFeature: prettyPrintAll,
		});
		var groupMarket_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupMarket_P.addLayer(lyrgeoMarket_P);


		//---------------------------------------------------------------------------
		//  Police
		//---------------------------------------------------------------------------
		var lyrgeoPolice_P = L.geoJson(geoPolice_P, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: policeIcon});
			},

			onEachFeature: prettyPrintAll,
		});
		var groupPolice_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupPolice_P.addLayer(lyrgeoPolice_P);
//		map.addLayer(groupPolice_P);




		//---------------------------------------------------------------------------
		//  School
		//---------------------------------------------------------------------------
		var lyrgeoSchool_P = L.geoJson(geoSchool_P, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: schoolIcon});
			},

			onEachFeature: prettyPrintOneMap,
		});
		var groupSchool_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupSchool_P.addLayer(lyrgeoSchool_P);

		//---------------------------------------------------------------------------
		//  Shop
		//---------------------------------------------------------------------------
		var lyrgeoShop_P = L.geoJson(geoShops_P, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: shopIcon});
			},

			onEachFeature: prettyPrintAll,
		});
		var groupShop_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupShop_P.addLayer(lyrgeoShop_P);



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

		//---------------------------------------------------------------------------
		//  Wifi
		//---------------------------------------------------------------------------
		function prettyPrintWirelessSG(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td>Name</td><td>' + feature.properties.Name + '</td></tr>';
				popupString += '<tr><td>Address</td><td>' + feature.properties.Address + '</td></tr>';
				popupString += '<tr><td>PostalCode</td><td>' + feature.properties.PostalCode + '</td></tr>';
				popupString += '<tr><td>Located</td><td>' + feature.properties.Located + '</td></tr>';
				popupString += '<tr><td>ISP</td><td>' + feature.properties.ISP + '</td></tr>';

				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="30%">Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}


		var lyrgeoWirelessSG_P = L.geoJson(geoWirelessSG_P, {
			pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: wirelessIcon});
			},

			onEachFeature: prettyPrintWirelessSG,
		});
		var groupWirelessSG_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupWirelessSG_P.addLayer(lyrgeoWirelessSG_P);
//		map.addLayer(groupWirelessSG_P);



		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		// Line
		var lyrgeoPCN_L = L.geoJson(landPCN, {
			color: "#33ff33", 
			weight: 10, 
			opacity: 0.8,

//			onEachFeature: prettyPrintAll_Area,
		});


		var lyrgeoCycling_L = L.geoJson(landLTACycling, {
			color: "#3333ff", 
			weight: 10, 
			opacity: 0.8,

//			onEachFeature: prettyPrintAll_Area,
		});

		var lyrgeoMRTLine_L = L.geoJson(landMRT, {
			color: "#ff33ff", 
			weight: 5, 
			opacity: 0.8,

//			onEachFeature: prettyPrintAll_Area,
		});
//		map.addLayer(lyrgeoMRTLine_L);


		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		// Data - GeoJSON - Air - POLYGON
		//---------------------------------------------------------------------------
		function prettyPrintRunway(feature, layer) {
			if (feature.properties) {
				if (feature.properties.LENGTH.length>0) {
					var popupString = '<div class="popup" style="text-align : left">';

					if (feature.properties.images!=null) {
						var images = feature.properties.images;
						popupString += '<img width="300" src="' + dirImageAir + images[0] + '" />';
					}

					popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 300px">';

//					var popupString = '<div class="popup" style="text-align : left; width: 250px;"><table width="100%" border="1" cellpadding="1" cellspacing="0">';
					popupString += '<tr><td>Airport ID</td><td>' + feature.properties.ARPT_IDENT + '</td></tr>';
					popupString += '<tr><td>Surface</td><td>' + feature.properties.SURFACE + '</td></tr>';
					popupString += '<tr><td>Length</td><td>' + feature.properties.LENGTH + '</td></tr>';
					popupString += '<tr><td>Runway</td><td>' + feature.properties.RWY + '</td></tr>';
					popupString += '<tr><td>Runway Width</td><td>' + feature.properties.RWY_WIDTH+ '</td></tr>';
//					popupString += '<tr><td>LOW_HDG</td><td>' + feature.properties.LOW_HDG + '</td></tr>';
//					popupString += '<tr><td>FID</td><td>' + feature.properties.FID + '</td></tr>';


					if (feature.properties.NOTAM!=null) {
						popupString += '<tr onclick="openURL(\''+ feature.properties.NOTAM +'\');"><td>NOTAM</td><td><u>Click to show</u></td></tr>';
					}

					popupString += '</table></div>';

					layer.bindPopup(popupString);
				}
				else {
					var popupString = '<div class="popup" style="text-align : left"><table border="1" cellpadding="1" cellspacing="0">';
					popupString += '<tr><td>FID</td><td>' + feature.properties.FID+ '</td></tr>';
					popupString += '<tr><td>CYCLE_DATE</td><td>' + feature.properties.CYCLE_DATE+ '</td></tr>';
					popupString += '</table></div>';

					layer.bindPopup(popupString);
				}
			}
		}

		var lyrgeoRunway = L.geoJson(airRunway, {
			color: "#ff3333", 
			"weight": 4, 
			opacity: 0.8,

			onEachFeature: prettyPrintRunway,
		});


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
		// Terminal Approaches - Line
		//---------------------------------------------------------------------------
		function prettyPrintTerminalApproach(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td width="40%">ICAO</td><td width="70%">' + feature.properties.ICAO + '</td></tr>';
				popupString += '<tr><td>Airport ID</td><td>' + feature.properties.ARPT_IDENT + '</td></tr>';
				popupString += '<tr><td>Type</td><td>' + feature.properties.CTRY_AUTH + '</td></tr>';
				popupString += '<tr><td>Attitude</td><td>' + feature.properties.TRAN_ALT + '</td></tr>';

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoTerminalApproach_L = L.geoJson(airTerminalApproach_L, {
			color: "#6666ff", 
			fillColor: "#EDC8A9", 
			weight: 5, 
			opacity: 0.7,

			onEachFeature: prettyPrintTerminalApproach,
		});


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
		//  Dynamic Air NOTAM 
		//---------------------------------------------------------------------------
		function prettyPrintNOTAM(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td width="40%">NOTAM</td><td width="70%">' + feature.properties.NOTAM_ID + ')</td></tr>';
				popupString += '<tr><td>Desc</td><td>' + feature.properties.DESC +'</td></tr>';
				popupString += '<tr><td>Limits</td><td>' + feature.properties.LimitLowerUpper +'</td></tr>';
				popupString += '<tr><td>From - To</td><td>' + feature.properties.DateTimeFromTo +'</td></tr>';


				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="40%">Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoNOTAMDynamic = L.geoJson(geoNOTAMDynamic_P, {
				pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: notamIcon});
			},

			onEachFeature: prettyPrintNOTAM,
		});
		var groupNOTAMDynamic_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupNOTAMDynamic_P.addLayer(lyrgeoNOTAMDynamic);
//		map.addLayer(groupNOTAMDynamic_P);



		//---------------------------------------------------------------------------
		// Basemap - Sea - Charts
		//---------------------------------------------------------------------------
		var seaChartUrl    = 'http://m3.shipfinder.com/tile.c?l=En&m=B&z={z}&y={y}&x={x}';
		var seaChartAttrib = 'ShipFinder Charts';
		var lyrMapSeaChart  = new L.TileLayer(seaChartUrl, {minZoom: 1, maxZoom: 9, attribution: seaChartAttrib});

		var transasChartUrl    = 'http://wms.transas.com/TMS/1.0.0/utt/{z}/{x}/{y}.png?token=7d6b0e2c-3684-40de-8b8c-c50deea14231';
		var transasChartAttrib = 'transas (TMS format)';
		var lyrMapTransasChart  = new L.tileLayer(transasChartUrl, {
			tms: true,
			maxZoom: 17,
			subdomains: 'abc',
			attribution: transasChartAttrib 
		});

		//---------------------------------------------------------------------------
		// Basemap - Sea - SCS
		//---------------------------------------------------------------------------
		var seaSCSUrl    = urlLocal + 'Sea_SCS/Z{z}/{y}/{x}.png';
		var seaSCSAttrib = 'South China Sea Maps';
		var lyrMapSCS  = new L.TileLayer(seaSCSUrl, {minZoom: 6, maxZoom: 11, attribution: seaSCSAttrib});

		//---------------------------------------------------------------------------
		// Basemap - Sea - GEBCO Underwater Contours
		//---------------------------------------------------------------------------
		var noaaContourUrl  = 'http://maps.ngdc.noaa.gov/arcgis/rest/services/web_mercator/gebco08_contours/MapServer/tile/{z}/{y}/{x}';
		var noaaContourAttrib = 'NOAA Underwater Contours';
		var lyrMapNOAAContour  = new L.TileLayer(noaaContourUrl, {minZoom: 1, maxZoom: 8, attribution: noaaContourAttrib});

		//---------------------------------------------------------------------------
		// Area - Sea SG Anchorage
		//---------------------------------------------------------------------------
		var groupMarineZone = new L.LayerGroup();

		function prettyPrintAnchorage(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td width="40%">Name</td><td width="70%">' + feature.properties.NAME + '</td></tr>';
				popupString += '<tr><td>Description</td><td>' + feature.properties.DESC + '</td></tr>';
				popupString += '<tr><td>Sector</td><td>' + feature.properties.SECTOR + '</td></tr>';



				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoAnchorage_A = L.geoJson(seaAnchorage_A, {
			color: "#6633ff", 
			fillColor: "#C800FF", 
			weight: 2, 
			opacity: 0.7,

			onEachFeature: prettyPrintAnchorage,
		}).addTo(groupMarineZone);
//		map.addLayer(lyrgeoAnchorage_A);

		var lyrgeoTrafficZone_A = L.geoJson(seaTrafficZone_A, {
			color: "#6633ff", 
			fillColor: "#C8ccFF", 
			weight: 2, 
			opacity: 0.7,
		}).addTo(groupMarineZone);

		//---------------------------------------------------------------------------
		// Area - Sea Navigation Aids - Lighthouse
		//---------------------------------------------------------------------------
		var groupMarineAids = new L.LayerGroup();

		var lyrgeoLighthouse_P = L.geoJson(seaLighthouse_P, {
				pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: lighthouseIcon});
			},
		}).addTo(groupMarineAids);

		//---------------------------------------------------------------------------
		// Line - Shipping Routes
		//---------------------------------------------------------------------------
		function prettyPrintShippingRoute(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td width="40%">Distance (KM)</td><td width="70%">' + feature.properties.distanceInMetres + '</td></tr>';
				popupString += '<tr><td>Port ID (From->To)</td><td>' + feature.properties.portFrom +'->'+ feature.properties.portTo + '</td></tr>';



				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoShippingRoute_L = L.geoJson(seaShippingRoute_L, {
			color: "#ADD8E6", 
			fillColor: "#FFA500", 
			weight: 5, 
			opacity: 0.8,

			onEachFeature: prettyPrintShippingRoute,
		});


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
		//  Dynamic Sea NTM - Notice To Mariners
		//---------------------------------------------------------------------------
		function prettyPrintNTM(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 250px">';
				popupString += '<tr><td width="40%">NTM</td><td width="70%">' + feature.properties.NTM_ID + ')</td></tr>';
				popupString += '<tr><td>Desc</td><td>' + feature.properties.DESC +'</td></tr>';
				popupString += '<tr><td>Craft</td><td>' + feature.properties.CRAFT +'</td></tr>';
				popupString += '<tr><td>Working Hours</td><td>' + feature.properties.WORKINGHOURS +'</td></tr>';
				popupString += '<tr><td>From - To</td><td>' + feature.properties.DateTimeFromTo +'</td></tr>';


				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="40%">Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}

		var lyrgeoNTMDynamic = L.geoJson(geoNTMDynamic_P, {
				pointToLayer: function (feature, latlng) {
				return L.marker(latlng, {icon: ntmIcon});
			},

			onEachFeature: prettyPrintNTM,
		});
		var groupNTMDynamic_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupNTMDynamic_P.addLayer(lyrgeoNTMDynamic);

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
		// Basemap - Weather - WaveHeight
		//---------------------------------------------------------------------------
		var weatherWaveHeightUrl    = 'http://www.openportguide.org/tiles/actual/significant_wave_height/5/{z}/{x}/{y}.png';
		var weatherWaveHeightAttrib = 'NOAA Underwater Contours';
		var lyrWeatherWaveHeight    = new L.TileLayer(weatherWaveHeightUrl, {minZoom: 1, maxZoom: 7, attribution: weatherWaveHeightAttrib});

		//---------------------------------------------------------------------------
		// Basemap - Weather - Temperature
		//---------------------------------------------------------------------------
		var weatherTempUrl    = 'http://www.openportguide.org/tiles/actual/air_temperature/5/{z}/{x}/{y}.png';
		var weatherTempAttrib = 'NOAA Underwater Contours';
		var lyrWeatherTemp    = new L.TileLayer(weatherTempUrl, {minZoom: 1, maxZoom: 7, attribution: weatherTempAttrib});
		//---------------------------------------------------------------------------
		// Basemap - Weather - Pressure
		//---------------------------------------------------------------------------
		var weatherPressureUrl    = 'http://www.openportguide.org/tiles/actual/surface_pressure/5/{z}/{x}/{y}.png';
		var weatherPressureAttrib = 'NOAA Underwater Contours';
		var lyrWeatherPressure    = new L.TileLayer(weatherPressureUrl, {minZoom: 1, maxZoom: 7, attribution: weatherPressureAttrib});
		//---------------------------------------------------------------------------
		// Basemap - Weather - Precipitation
		//---------------------------------------------------------------------------
		var weatherPrecipitationUrl    = 'http://www.openportguide.org/tiles/actual/precipitation/5/{z}/{x}/{y}.png';
		var weatherPrecipitationAttrib = 'NOAA Underwater Contours';
		var lyrWeatherPrecipitation    = new L.TileLayer(weatherPrecipitationUrl, {minZoom: 1, maxZoom: 7, attribution: weatherPrecipitationAttrib});

		//---------------------------------------------------------------------------
		// Basemap - Weather - Wind
		//---------------------------------------------------------------------------
		var weatherWindUrl    = 'http://www.openportguide.org/tiles/actual/wind_vector/5/{z}/{x}/{y}.png';
		var weatherWindAttrib = 'NOAA Underwater Contours';
		var lyrWeatherWind    = new L.TileLayer(weatherWindUrl, {minZoom: 1, maxZoom: 7, attribution: weatherWindAttrib});


		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		//---------------------------------------------------------------------------
		// Dynamic - Basemap Layers


		//---------------------------------------------------------------------------
		// QI Traffic Speed
		//---------------------------------------------------------------------------

/*
		var lyrWMSMapSynq = L.tileLayer.wms("http://t65a.mapsynq.com:8080/geoserver/gwc/service/wms", {
			layers: 'Traffic_layer_onemap',
			format: 'image/png',
			transparent: true,
			attribution: ""
		});
//		map.addLayer(lyrWMSMapSynq);
*/

		var qiTrafficUrl    = urlLocal + 'Traffic_QI_Speed/{z}/{x}/{y}.png';
		var qiTrafficAttrib = 'Quantum Inventions Traffic Speed';
		var lyrQITraffic    = new L.TileLayer(qiTrafficUrl, {minZoom: 7, maxZoom: 16, attribution: qiTrafficAttrib});




/*
		var gmWeatherUrl    = 'https://mts0.googleapis.com/mapslt?hl=en-US&lyrs=weather_f_ms|invert%3A1&x={x}&y={y}&z={z}&w=256&h=256&source=apiv3&token=68318';
		var gmWeatherAttrib = 'GoogleMap';
		var lyrgmWeather    = new L.TileLayer(gmWeatherUrl, {minZoom: 1, maxZoom: 10, attribution: gmWeatherAttrib});
*/


		//---------------------------------------------------------------------------
		// Google Traffic
		var gmTrafficUrl   = '';
		if (localMapTile) {
			gmTrafficUrl = urlLocal + 'GoogleMap_Traffic/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			gmTrafficUrl = 'http://mt0.google.com/vt?hl=en&src=app&lyrs=m@176115983,traffic|seconds_into_week:-1&style=15&x={x}&y={y}&z={z}';
		}
		var gmTrafficAttrib    = '';
		var lyrgmTraffic = new L.TileLayer(gmTrafficUrl, {minZoom: 1, maxZoom: 20, attribution: gmTrafficAttrib});


		//---------------------------------------------------------------------------
		// Dynamic Cameras
		//---------------------------------------------------------------------------
		var groupCameras = new L.LayerGroup();

		/* geoJSON - Traffic Camera */
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
		var lyrTrafficCam = L.geoJson(geoTrafficCAM, {
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

		var lyrgeoHospital_P = L.geoJson(geoHospital_P, {
				pointToLayer: function (feature, latlng) {
					switch (feature.properties.fclass) {


						case "clinic": return L.marker(latlng, {icon: clinicIcon});
						case "hospital": return L.marker(latlng, {icon: hospitalIcon});

						default : return L.marker(latlng, {icon: pinIcon});
					}
				},

			onEachFeature: prettyPrintHospital, 
		}).addTo(groupCameras);

		var groupHospital_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 11 });
		groupHospital_P.addLayer(lyrgeoHospital_P);
//		map.addLayer(groupHospital_P);



		//---------------------------------------------------------------------------
		//  Dynamic Carpark Lot - Availabilty
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
		var groupCarparkLot_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupCarparkLot_P.addLayer(lyrgeoCarparkLot);
		// map.addLayer(groupCarparkLot_P);

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



				/* display coordinates */
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

			onEachFeature: prettyPrintBCA,
		});
		var groupBCA_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupBCA_P.addLayer(lyrgeoBCA);
//		map.addLayer(groupBCA_P);

		//---------------------------------------------------------------------------
		//  Dynamic Traffic News / Waze
		//---------------------------------------------------------------------------
		function prettyPrintTrafficNews(feature, layer) {
	      	if (feature.properties) {

				var popupString = '<div class="popup" style="text-align : left">';

				popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 300px">';
				popupString += '<tr width="30%"><td>Desc</td><td width="70%">' + feature.properties.desc + '</td></tr>';

				popupString += '<tr><td>Type</td><td>' + feature.properties.name + '</td></tr>';
				popupString += '<tr><td>When</td><td>' + feature.properties.DateTimeCreated + '</td></tr>';


				/* display coordinates */
		      	if (feature.geometry) {
					popupString += '<tr><td width="10%">Lat-Lon</td><td style="word-wrap: break-word">' + 
						feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
				}

				popupString += '</table></div>';

				layer.bindPopup(popupString);

			}
		}
		//---------------------------------------------------------------------------
		// Dynamic Traffic - QI News
		//---------------------------------------------------------------------------
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

			onEachFeature: prettyPrintTrafficNews,
		});
		var groupTrafficNewsSG_P = L.markerClusterGroup({ zoomToBoundsOnClick: true, disableClusteringAtZoom: 17 });
		groupTrafficNewsSG_P.addLayer(lyrgeoTrafficNewsSG);
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



				/* display coordinates */
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

/*
		var pulsingIcon3 = L.icon.pulse({iconSize:[12,12],color:'red'});
		var mark1 = L.marker([ 1.27197, 103.83218 ],{icon: pulsingIcon3, title: 'Traffic Incident'});
		var mark2 = L.marker([ 1.3409, 103.83471 ],{icon: pulsingIcon3, title: 'Traffic Incident'});
		var mark3 = L.marker([ 1.33086, 103.81891 ],{icon: pulsingIcon3, title: 'Traffic Incident'});
*/		

		var groupTrafficNews = new L.LayerGroup();
//		groupTrafficNews.addLayer(mark1);
//		groupTrafficNews.addLayer(mark2);
//		groupTrafficNews.addLayer(mark3);
		groupTrafficNews.addLayer(groupTrafficNewsSG_P);
		groupTrafficNews.addLayer(lyrgeoTrafficWaze);

//		map.addLayer(groupTrafficNews);

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
//		map.addLayer(groupPUB_FloodSensor_P);



		// HADR
		//---------------------------------------------------------------------------
		//  Data - GeoJSON - POINT - Weather - PDC
		//---------------------------------------------------------------------------
		function prettyPrintPDC(feature, layer) {
			if (feature.properties) {
					var popupString = '<div class="popup" style="text-align : left">';

					if (feature.properties.images!=null) {
						var images = feature.properties.images;
						popupString += '<img width="300" src="' + dirImageAir + images[0] + '" />';
					}

					popupString += '<table  border="1" cellpadding="1" cellspacing="0" style="table-layout: fixed; width: 300px">';

					popupString += '<tr><td width="40%">TITLE</td><td>' + feature.properties.TITLE + '</td></tr>';
					popupString += '<tr><td>ALERT ID</td><td>' + feature.properties.ALERTID + '</td></tr>';
					popupString += '<tr><td>TYPE</td><td>' + feature.properties.TYPE + '</td></tr>';

					// INFORMATION=blue (2), ADVISORY=green (4), WATCH=yellow (1), WARNING=red (3)
					popupString += '<tr><td>SEVERITY_TITLE</td><td>' + feature.properties.SEVERITY_TITLE + '</td></tr>';
					popupString += '<tr><td>SEVERITY_ID</td><td>' + feature.properties.SEVERITY_ID + '</td></tr>';
					popupString += '<tr><td>CREATEDATETIME</td><td>' + feature.properties.CREATEDATETIME + '</td></tr>';
					popupString += '<tr><td>UPDATEDDATETIME</td><td>' + feature.properties.UPDATEDDATETIME + '</td></tr>';

					// display coordinates
			      	if (feature.geometry) {
						popupString += '<tr><td>Lat-Lon</td><td style="word-wrap: break-word">' + feature.geometry.coordinates[1] +','+ feature.geometry.coordinates[0] + '</td></tr>';
					}

					if (feature.properties.SOURCE!=null) {
						popupString += '<tr onclick="openURL(\''+ feature.properties.SOURCE +'\');"><td style="word-wrap: break-word">SOURCE</td><td><u>'+ feature.properties.SOURCE +'</u></td></tr>';
					}

					popupString += '</table></div>';

					layer.bindPopup(popupString);
				}
		}

		// INFORMATION=blue (2), ADVISORY=green (4), WATCH=yellow (1), WARNING=red (3)
		var lyrgeoPDC = L.geoJson(activePDC, {
			pointToLayer: function (feature, latlng) {
				switch (feature.properties.TYPE) {
					case "BIOMEDICAL": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeBiomedicalIcon2});
							case "3" : return L.marker(latlng, {icon: activeBiomedicalIcon3});
							case "4" : return L.marker(latlng, {icon: activeBiomedicalIcon4});
							default : return L.marker(latlng, {icon: activeBiomedicalIcon1});
						}
					case "CYCLONE": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeCycloneIcon2});
							case "3" : return L.marker(latlng, {icon: activeCycloneIcon3});
							case "4" : return L.marker(latlng, {icon: activeCycloneIcon4});
							default : return L.marker(latlng, {icon: activeCycloneIcon1});
						}
					case "DROUGHT": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeDroughtIcon2});
							case "3" : return L.marker(latlng, {icon: activeDroughtIcon3});
							case "4" : return L.marker(latlng, {icon: activeDroughtIcon4});
							default : return L.marker(latlng, {icon: activeDroughtIcon1});
						}
					case "EARTHQUAKE": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeEarthquakeIcon2});
							case "3" : return L.marker(latlng, {icon: activeEarthquakeIcon3});
							case "4" : return L.marker(latlng, {icon: activeEarthquakeIcon4});
							default : return L.marker(latlng, {icon: activeEarthquakeIcon1});
						}
					case "FLOOD": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeFloodIcon2});
							case "3" : return L.marker(latlng, {icon: activeFloodIcon3});
							case "4" : return L.marker(latlng, {icon: activeFloodIcon4});
							default : return L.marker(latlng, {icon: activeFloodIcon1});
						}
					case "HIGHSURF": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeHighSurfIcon2});
							case "3" : return L.marker(latlng, {icon: activeHighSurfIcon3});
							case "4" : return L.marker(latlng, {icon: activeHighSurfIcon4});
							default : return L.marker(latlng, {icon: activeHighSurfIcon1});
						}
					case "LANDSLIDE": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeLandslideIcon2});
							case "3" : return L.marker(latlng, {icon: activeLandslideIcon3});
							case "4" : return L.marker(latlng, {icon: activeLandslideIcon4});
							default : return L.marker(latlng, {icon: activeLandslideIcon1});
						}
					case "STORM": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeStormIcon2});
							case "3" : return L.marker(latlng, {icon: activeStormIcon3});
							case "4" : return L.marker(latlng, {icon: activeStormIcon4});
							default : return L.marker(latlng, {icon: activeStormIcon1});
						}
					case "TSUNAMI": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeTsunamiIcon2});
							case "3" : return L.marker(latlng, {icon: activeTsunamiIcon3});
							case "4" : return L.marker(latlng, {icon: activeTsunamiIcon4});
							default : return L.marker(latlng, {icon: activeTsunamiIcon1});
						}

					case "VOLCANO": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeVolcanoIcon2});
							case "3" : return L.marker(latlng, {icon: activeVolcanoIcon3});
							case "4" : return L.marker(latlng, {icon: activeVolcanoIcon4});
							default : return L.marker(latlng, {icon: activeVolcanoIcon1});
						}
					case "WILDFIRE": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeWildFireIcon2});
							case "3" : return L.marker(latlng, {icon: activeWildFireIcon3});
							case "4" : return L.marker(latlng, {icon: activeWildFireIcon4});
							default : return L.marker(latlng, {icon: activeWildFireIcon1});
						}
					case "WINTERSTORM": 
	 					switch (feature.properties.SEVERITY_ID) {
							case "2" : return L.marker(latlng, {icon: activeWinterstormIcon2});
							case "3" : return L.marker(latlng, {icon: activeWinterstormIcon3});
							case "4" : return L.marker(latlng, {icon: activeWinterstormIcon4});
							default : return L.marker(latlng, {icon: activeWinterstormIcon1});
						}
					default : return L.marker(latlng, {icon: fireIcon});
				}
			},

			coordsToLatLng: function (coords) {
				longitude = coords[0];
				latitude = coords[1];
				var latlng = L.latLng(latitude, longitude);
	 			if (longitude < 0) {
					return latlng.wrap(360, 0);
				}
				else
					return latlng.wrap();
			},

			onEachFeature: prettyPrintPDC,
		});

		map.addLayer(lyrgeoPDC);


		//---------------------------------------------------------------------------
		// GoogleMap Labels

		var gmLabelsUrl    = '';
		if (localMapTile) {
			gmLabelsUrl    = urlLocal + 'Google Labels/{z}/{y}/{z}_y{y}_x{x}.png';
		}
		else {
			gmLabelsUrl    = 'https://mts0.google.com/vt/lyrs=h@'+ keyGoogleRoad +'&hl=en&src=app&x={x}&y={y}&z={z}&s=Galil';
		}
		var gmLabelsAttrib = 'GoogleMap Labels';
		var lyrgmLabels    = new L.TileLayer(gmLabelsUrl, {minZoom: 1, maxZoom: 18, attribution: gmLabelsAttrib});