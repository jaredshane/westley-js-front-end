app.controller('OneAnimalCtrl', function(AnimalFact, AnimalKeeperFact, $scope, $routeParams){

let animalId = $routeParams.id

const popPage = () =>{
  AnimalFact.getOne(animalId)
    .then((animal) => {
      console.log("animal", animal);
      $scope.animal = animal;
      $scope.$apply()
    })
    .then( () => {
      AnimalKeeperFact.getKeepersForAnimal(animalId)
      .then( (keeper) => {
        console.log("keeper", keeper);
        $scope.keeper = keeper;
        $scope.$apply()
      })
    })
}

popPage()



});
