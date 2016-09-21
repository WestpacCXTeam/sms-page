/***************************************************************************************************************************************************************
 *
 * SMS logic
 *
 * JS for toggling each input field
 *
 **************************************************************************************************************************************************************/


(function(GUI) {

	var module = {};


	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// Settings
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	choices = {
		1: {
			result: 'Could improve',
			feedback: 'Want to talk about it?<br><a href="tel:1300130467">Call 1300 130 467</a> or <a href="mailto:insert-email-here">send a message</a>',
			more: 'Tell us why',
		},
		2: {
			result: 'It was OK',
			feedback: '',
			more: 'Suggest an improvement',
		},
		3: {
			result: 'I liked it',
			feedback: '',
			more: 'Tell us why',
		}
	};


	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// private function: open / close a dropdown
	//
	// @param   _isOpen  [boolen]         Whether to open or close the dropdown
	// @param   $parent  [jquery object]  The parent element
	// @param   $menu    [jquery object]  The dropdown menu element
	//
	// @return  [none]
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	function toggelDropdown(_isOpen, $parent, $menu) {
		GUI.debugging( 'sms: dropdown menu', 'report' );
	}

	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// module init method
	//
	// Run this method once after your DOM was loaded
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	module.init = function smsInit() {
		GUI.debugging( 'sms: Initiating', 'report' );

		$('.js-rating').on('change', function() {
			var value = parseInt( $(this).val() );

			GUI.sms.renderFeedback( value );
		});

		$('.js-rating:checked').trigger('change');

		$('.js-more-btn').on('click', GUI.sms.showMore );
	};


	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// render feedback for star rating
	//
	// @param   value  [string]  The value of the star rating
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	module.renderFeedback = function smsRenderFeedback( value ) {
		GUI.debugging( 'sms: running renderFeedback', 'report' );

		if( value === 1 || value === 2 || value === 3 ) {

			$('.js-more-info').addClass('is-hidden');

			$('.js-text-result')
				.text( choices[ value ].result );

			$('.js-feedback')
				.html( choices[ value ].feedback )
				.removeClass('is-hidden');

			$('.js-more-btn-text')
				.text( choices[ value ].more );

			$('.js-more-btn')
				.removeClass('is-hidden');

			$('.js-submit').removeClass('is-hidden');

		}

	};


	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	// show the textarea and hide the rest
	//------------------------------------------------------------------------------------------------------------------------------------------------------------
	module.showMore = function smsRenderFeedback() {
		GUI.debugging( 'sms: running showMore', 'report' );

		$('.js-feedback').addClass('is-hidden');
		$('.js-more-info').removeClass('is-hidden');
	};


	GUI.sms = module;


	// run module
	GUI.sms.init();

}(GUI));