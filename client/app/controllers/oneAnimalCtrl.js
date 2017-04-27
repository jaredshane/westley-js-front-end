app.controller('OneAnimalCtrl', function(AnimalFact, AnimalKeeperFact, $scope, $routeParams){

let animalId = $routeParams.id

const popPage = () =>{
  AnimalFact.getOne(animalId)
    .then((animal) => {
      $scope.animal = animal;
      $scope.$apply()
    })
    .then( () => {
      AnimalKeeperFact.getKeepersForAnimal(animalId)
      .then( (keeper) => {
        $scope.keeper = keeper;
        $scope.$apply()
      })
    })
}

popPage()



});
