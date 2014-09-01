/* RainLoop Webmail (c) RainLoop Team | Licensed under CC BY-NC-SA 3.0 */

(function (module, require) {

	'use strict';
	
	var
		_ = require('_'),
		KnoinAbstractScreen = require('Knoin:AbstractScreen')
	;

	/**
	 * @constructor
	 * @extends KnoinAbstractScreen
	 */
	function AdminLoginScreen()
	{
		KnoinAbstractScreen.call(this, 'login', [
			require('View:Admin:Login')
		]);
	}

	_.extend(AdminLoginScreen.prototype, KnoinAbstractScreen.prototype);

	AdminLoginScreen.prototype.onShow = function ()
	{
		require('App:Admin').setTitle('');
	};

	module.exports = AdminLoginScreen;

}(module, require));