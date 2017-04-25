app.controller('AnimalEditCtrl', function($scope, AnimalFact, ZookeeperFact){

const popPage = () =>{
  AnimalFact.getOne()
    .then((animal) => {
      $scope.animal = animal.animal
      $scope.$apply()
    })
}

popPage()


});
