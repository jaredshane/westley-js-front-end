const app = angular.module('Zoo', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
      $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).when('/personnel', {
        templateUrl: 'partials/personnel.html',
        controller: 'PersonnelCtrl'
      }).when('/personnel/keepers', {
        templateUrl: 'partials/personnel.html',
        controller: 'KeeperCtrl'
      }).when('/personnel/keepers/edit/:id', {
        templateUrl: 'partials/personEdit.html',
        controller: 'KeeperEditCtrl'
      }).when('/personnel/keepers/add', {
        templateUrl: 'partials/personEdit.html',
        controller: 'KeeperAddCtrl'
      }).when('/personnel/keepers/:id', {
        templateUrl: 'partials/person.html',
        controller: 'OneKeeperCtrl'
      }).when('/animals', {
        templateUrl: 'partials/animals.html',
        controller: 'AnimalCtrl'
      }).when('/animals/edit/id', {
        templateUrl: 'partials/animalEdit.html',
        controller: 'AnimalEditCtrl'
      }).when('/animals/add', {
        templateUrl: 'partials/animalEdit.html',
        controller: 'AnimalAddCtrl'
      }).when('/animal/:id', {
        templateUrl: 'partials/animals.html',
        controller: 'OneAnimalCtrl'
      }).otherwise({
        redirectTo: '/'
      })
}])
