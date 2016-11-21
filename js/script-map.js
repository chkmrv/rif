

		var objects = {
			o1: {
				coords: [51.661946, 39.20427],
				title: 'Риф',
				description: 'ул. Чебышева 28а'
			}
		};

		$(function () {
			// $(window).bind('load', function() {
		 //        $('#after-load').animate({opacity: 0}, 'slow');
		 //        $('#after-load').hide("fast");
		 //        // setTimeout($('#after-load').fadeOut().remove(),500);
		 //    });

				var myMap = new google.maps.Map($('#map_canvas').get(0), {

					center:  new google.maps.LatLng(51.661946, 39.20427),
					zoom: 16,
					scrollwheel: false,
					// 50b557
					icon: 'img/location_icon.png',
					styles: [
						    {
						        "featureType": "administrative.province",
						        "elementType": "all",
						        "stylers": [
						            {
						                "visibility": "off"
						            }
						        ]
						    },
						    {
						        "featureType": "landscape",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": 65
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "poi",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": 51
						            },
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "road.highway",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "road.arterial",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": 30
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "road.local",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "lightness": 40
						            },
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "transit",
						        "elementType": "all",
						        "stylers": [
						            {
						                "saturation": -100
						            },
						            {
						                "visibility": "simplified"
						            }
						        ]
						    },
						    {
						        "featureType": "transit",
						        "elementType": "geometry.fill",
						        "stylers": [
						            {
						                "visibility": "on"
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "geometry",
						        "stylers": [
						            {
						                "hue": "#ffff00"
						            },
						            {
						                "lightness": -25
						            },
						            {
						                "saturation": -97
						            }
						        ]
						    },
						    {
						        "featureType": "water",
						        "elementType": "labels",
						        "stylers": [
						            {
						                "visibility": "on"
						            },
						            {
						                "lightness": -25
						            },
						            {
						                "saturation": -100
						            }
						        ]
						    }
						]
				
				}),
				$list = $('#testList'),
				list = {},
				balloon = new google.maps.InfoWindow();

				for (var i in objects) {
					var title = objects[i].title,
						description = '<div><p>' + title + '</p><p>' + objects[i].description + '</p></div>';

					list[i] = $('<li>', {
							'class': 'item active'
						})
						.data('marker', new google.maps.Marker({
							position: new google.maps.LatLng(
								objects[i].coords[0],
								objects[i].coords[1]
							),
							icon: 'img/location_icon.png',
							title: title,
							id: i
						}))
						.data('description', description)
						.data('balloon', new google.maps.InfoWindow({
							content: description
						}))
						.on('click', function () {
							var $item = $(this);

							if ($item.hasClass('active')) {
								$item.data('marker').setMap(null);
								$item.removeClass('active');
							} else {
								$item.data('marker').setMap(myMap);
								$item.addClass('active');
							}
						})
						.prependTo($list);

					list[i].data('marker').setMap(myMap);
					google.maps.event.addListener(list[i].data('marker'), 'click', function () {
						var $item = list[this.id];
						// $('.place-slider .slide').hide();
						// $('.place-slider .slide').append('<span>номер -  '+ this.id  +'</span>');
						
						balloon.setContent($item.data('description'));
						balloon.open(myMap, $item.data('marker'));

					  	myMap.setCenter(list[i].data('marker').getPosition());
					  	myMap.setZoom(17);
					});
				}
			});
