var app = angular.module('app', []);

app.factory('playlist', function() {
	var tracks = [ 
		{
			id: 1,
			name: 'Track 01'
		},
		{
			id: 2,
			name: 'Track 02'
		}
	];
	return {
		name: 'Metallica',
		getTracks: function () {
			return tracks;
		}
	};
});