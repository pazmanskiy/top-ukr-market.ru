(function() {

	var self = this;

	this.isFadeIn = false;
	this.count = 0;
	this.$comebacker = $('.comebacker');
	this.$modal = $comebacker.find('.comebacker-modal');
	this.$closeButton = $comebacker.find('.comebacker-button-close');

	this.fadeIn = function() {
		self.$comebacker.fadeIn(250);
		self.$modal.animate({
			opacity: 1,
			top: 50
		}, 250);
		self.count++;
		self.isFadeIn = true;
	}

	this.fadeOut = function() {
		self.$comebacker.fadeOut(250);
		self.$modal.animate({
			opacity: 0,
			top:0
		}, 250);
		self.isFadeIn = false;
	}

	this.init = function() {
		$(window).on('mouseout', function(event) {
			if (event.pageY - $(window).scrollTop() < 0 && isFadeIn === false && self.count === 0) {
				self.fadeIn();
			}
		});

		self.$closeButton.on('click', function() {
			self.fadeOut();
		});

		$(window).on('popstate', function() {
			self.fadeOut();
		});
	}

	this.init();

})();