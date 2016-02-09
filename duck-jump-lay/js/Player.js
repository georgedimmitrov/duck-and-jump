Player.States = {
	Jumped: 4,
	Standing: 3,
	Ducked: 2,
	Down: 1
};

Player.Defaults = {
	Health: 3,
	Points: 0,
	State: Player.States.Standing,
	Name: 'Unknown'
};

function Player($dom) {
	
	var _$dom = $dom;
	
	var _health = Player.Defaults.Health;
	
	var _score = Player.Defaults.Points;
	
	var _state = Player.Defaults.State;
	
	var _name = Player.Defaults.Name;
	
	this.getDom = function() {
		return this._$dom;
	}
	
	this.getHealth = function() {
		return this._health;
	}
	
	this.setHealth = function(health) {
		this._health = health;
	}
	
	this.getPoints = function() {
		return this._points;
	}
	
	this.setPoints = function(points) {
		this._points = points;
	}
}

Player.prototype.fallback = function() {
	var player = $('#player');
	console.log(this);
	player.animate({
		'bottom' : '20px',
		'height' : '210px'
	});
}

Player.prototype.jump = function () {
	var player = $('#player');
	var _this = this;
	
	player.animate({
		bottom: '100px',
		height: '210px',
		width: '45px'
	}, 300, function () {
		_this.fallback();
	});
}


Player.prototype.duck = function () {
	var player = $('#player');
	var _this = this;

	player.animate({
		height:'150px',
		width: '45px'
	},200, function () {

	});
}

Player.prototype.lay = function () {
	var player = $('#player');
	var _this = this;

	player.animate({
		height:'45px',
		width: '210px'
	},200, function () {

	});
}



$(function() {

	$(document).keydown(function (e) {

		if (e.keyCode === 40) {
			e.preventDefault();
			console.log('down arrow');
			Player.prototype.duck();
		}

		if (e.keyCode === 38) {
			Player.prototype.jump();
		}

		if (e.keyCode === 32) {
			Player.prototype.lay();
		}

	});

});


