import helloWorldTemplate from 'es6/HelloWorld/hello-world.template.html!text';
import HelloWorldController from 'es6/HelloWorld/HelloWorldController';

function router ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  
  $stateProvider.state('helloWorld', {
    url: '/',
    views: {
      application: {
        template: helloWorldTemplate,
        controller: HelloWorldController,
        controllerAs: 'vm',
      }
    }
  });
}

router.$inject = ['$stateProvider', '$urlRouterProvider'];

export default router;