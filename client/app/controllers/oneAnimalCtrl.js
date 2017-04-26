app.controller('OneAnimalCtrl', function(AnimalFact, $scope, $routeParams){

let animalId = $routeParams.id

const popPage = () =>{
  AnimalFact.getOne(animalId)
    .then((animal) => {
      console.log("animal", animal);
      $scope.animal = animal;
      $scope.$apply()
    })
}

popPage()



});
