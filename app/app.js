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
        templateUrl: 'partials/keeperEdit.html',
        controller: 'KeeperEditCtrl'
      }).when('/personnel/keepers/add', {
        templateUrl: 'partials/keeperEdit.html',
        controller: 'KeeperAddCtrl'
      }).when('/personnel/keepers/:id', {
        templateUrl: 'partials/person.html',
        controller: 'OneKeeperCtrl'
      }).when('/personnel/trainers', {
        templateUrl: 'partials/personnel.html',
        controller: 'TrainerCtrl'
      }).when('/personnel/trainers/edit/:id', {
        templateUrl: 'partials/trainerEdit.html',
        controller: 'TrainerEditCtrl'
      }).when('/personnel/trainers/add', {
        templateUrl: 'partials/trainerEdit.html',
        controller: 'TrainerAddCtrl'
      }).when('/personnel/trainers/:id', {
        templateUrl: 'partials/person.html',
        controller: 'OneTrainerCtrl'
      }).when('/animals', {
        templateUrl: 'partials/animals.html',
        controller: 'AnimalCtrl'
      }).when('/animals/edit/:id', {
        templateUrl: 'partials/animalEdit.html',
        controller: 'AnimalEditCtrl'
      }).when('/animals/add', {
        templateUrl: 'partials/animalEdit.html',
        controller: 'AnimalAddCtrl'
      }).when('/animals/:id', {
        templateUrl: 'partials/animal.html',
        controller: 'OneAnimalCtrl'
      }).otherwise({
        redirectTo: '/'
      })
}])
