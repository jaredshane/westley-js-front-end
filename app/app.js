const app = angular.module('Zoo', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
      $routeProvider
      .when('westley-js-front-end/#!/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).when('westley-js-front-end/#!/personnel', {
        templateUrl: 'partials/personnel.html',
        controller: 'PersonnelCtrl'
      }).when('westley-js-front-end/#!/personnel/keepers', {
        templateUrl: 'partials/personnel.html',
        controller: 'KeeperCtrl'
      }).when('westley-js-front-end/#!/personnel/keepers/edit/:id', {
        templateUrl: 'partials/keeperEdit.html',
        controller: 'KeeperEditCtrl'
      }).when('westley-js-front-end/#!/personnel/keepers/add', {
        templateUrl: 'partials/keeperEdit.html',
        controller: 'KeeperAddCtrl'
      }).when('westley-js-front-end/#!/personnel/keepers/:id', {
        templateUrl: 'partials/person.html',
        controller: 'OneKeeperCtrl'
      }).when('westley-js-front-end/#!/personnel/trainers', {
        templateUrl: 'partials/personnel.html',
        controller: 'TrainerCtrl'
      }).when('westley-js-front-end/#!/personnel/trainers/edit/:id', {
        templateUrl: 'partials/trainerEdit.html',
        controller: 'TrainerEditCtrl'
      }).when('westley-js-front-end/#!/personnel/trainers/add', {
        templateUrl: 'partials/trainerEdit.html',
        controller: 'TrainerAddCtrl'
      }).when('westley-js-front-end/#!/personnel/trainers/:id', {
        templateUrl: 'partials/person.html',
        controller: 'OneTrainerCtrl'
      }).when('westley-js-front-end/#!/animals', {
        templateUrl: 'partials/animals.html',
        controller: 'AnimalCtrl'
      }).when('westley-js-front-end/#!/animals/edit/:id', {
        templateUrl: 'partials/animalEdit.html',
        controller: 'AnimalEditCtrl'
      }).when('westley-js-front-end/#!/animals/add', {
        templateUrl: 'partials/animalEdit.html',
        controller: 'AnimalAddCtrl'
      }).when('westley-js-front-end/#!/animals/:id', {
        templateUrl: 'partials/animal.html',
        controller: 'OneAnimalCtrl'
      }).otherwise({
        redirectTo: 'westley-js-front-end/#!/'
      })
}])
