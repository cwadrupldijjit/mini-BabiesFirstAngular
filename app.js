/* global angular */
(function() {
	var app = angular.module('friendsList', []);
	
	app.controller('MainController', function() {
		this.friends = ['Jordyn', 'Ryan', 'Chelsey'];
		
		this.newFriend = "";
		
		this.addFriend = function() {
			var isFound = false;
			
			for (var i = 0; i < this.friends.length; i++) {
				if (this.newFriend === this.friends[i])
					isFound = true;
			}
			if (!isFound)
				this.friends.push(this.newFriend);
		};
	});
})();