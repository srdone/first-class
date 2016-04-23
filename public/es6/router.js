import helloWorldTemplate from 'es6/HelloWorld/hello-world.template.html!text';
import HelloWorldController from 'es6/HelloWorld/HelloWorldController';

import baseControllerTemplate from 'es6/base-controller.template.html!text';
import BaseController from 'es6/BaseController';

import loginViewTemplate from 'es6/login/login.view.html!text';
console.log(loginViewTemplate);

function router ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('app', {
      abstract: true,
      template: baseControllerTemplate,
      controller: BaseController,
      controllerAs: 'vm',
      resolve: {
        // requirements: function (requirementService) {
        //   return requirementService.getAllRequirements();
        // }
        requirements: function () {
          return [];
        }
      }
    })
    .state('app.main', {
      url: '/',
      views: {
        mainView: {
          template: loginViewTemplate,
          controller: BaseController
        }
      }
    })
    .state('helloWorld', {
      url: '/helloWorld',
      template: helloWorldTemplate,
      controller: HelloWorldController,
      controllerAs: 'vm'
    });
}

router.$inject = ['$stateProvider', '$urlRouterProvider'];

export default router;