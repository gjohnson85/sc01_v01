angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page2', {
    url: '/main',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('aboutSaintConnection', {
    url: '/about',
    templateUrl: 'templates/aboutSaintConnection.html',
    controller: 'aboutSaintConnectionCtrl'
  })

  .state('dataPage', {
    url: '/DataPage',
    templateUrl: 'templates/dataPage.html',
    controller: 'dataPageCtrl'
  })

$urlRouterProvider.otherwise('/main')

  

});