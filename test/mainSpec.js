describe('playlist', function() {

	beforeEac(function(){
		module('app');
		inject(function(_playlist_){
			playlist = _playlist_;
		});
	});

	it('should get correct playlist name', function () {
		expect(playlist.name).toEqual('Metallica');
	});

	it('should get list of tracks', function () {
		tracks = [
			{
				id: 1, 
				name: 'Track 01'
			}, {
				id: 2, 
				name: 'Track 02'
			}
		];
		expect(playlist.getTracks()).toEqual(tracks);
	});
})