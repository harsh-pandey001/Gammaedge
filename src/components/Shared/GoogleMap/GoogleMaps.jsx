import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function GoogleMaps(props) {
	const mapRef = useRef(null);
	// 
	useEffect(() => {
		const initializeMap = async () => {
			const loader = new Loader({
                apiKey: "AIzaSyBJJnw3_qRPx1dyYHeloXMCOS8zqjHYakc",
                version: 'weekly', // Update to the desired version
            });

            await loader.load(); // Load the Google Maps JavaScript API

            const google = window.google; // Access the google object


			const locationInMap = {
				lat: 39.60128890889341,
				lng: -9.069839810859907,
			};

			const options = {
				center: locationInMap,
				zoom: 15,
			};

			const map = new google.maps.Map(mapRef.current, options);

			// Get user's current location
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					position => {
						const userLocation = {
							lat:  props.latitude,
							lng: props.longitude,
						};

						// Center map at user's current location
						map.setCenter(userLocation);

						// Add marker at user's current location
						new google.maps.Marker({
							position: userLocation,
							map: map,
						});

						// Calculate route from user's current location to the destination
						const destinationLocation = { lat: 22.718055604414346, lng: 75.85487157555893 };
						const directionsService = new google.maps.DirectionsService();
						const directionsRenderer = new google.maps.DirectionsRenderer({ map });

						directionsService.route(
							{
								origin: userLocation,
								destination: destinationLocation,
								travelMode: google.maps.TravelMode.DRIVING // You can also use 'WALKING', 'BICYCLING', or 'TRANSIT'
							},
							(response, status) => {
								if (status === 'OK') {
									directionsRenderer.setDirections(response);
								} else {
									console.error('Directions request failed due to ' + status);
								}
							}
						);
					},
					error => {
						console.error('Error getting user location:', error);
					}
				);
			} else {
				console.error('Geolocation is not supported by this browser.');
			}
		};

		initializeMap();
	}, []);

	return <div style={{ height: "600px" }} ref={mapRef}></div>;
}
