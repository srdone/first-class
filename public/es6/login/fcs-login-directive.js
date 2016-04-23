export default fcsLogin;

import LoginDirectiveController from './LoginDirectiveController';
import loginDirectiveTemplate from './login-directive.template.html!text';

function fcsLogin() {
	return {
		restrict: 'E',
		controller: LoginDirectiveController,
		template: loginDirectiveTemplate
	};
}