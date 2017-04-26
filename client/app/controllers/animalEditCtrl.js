app.controller('AnimalEditCtrl', function($scope, AnimalFact, $routeParams){

  let animalId = $routeParams.id

  console.log("from the controller")

  const popPage = () =>{
    AnimalFact.getOne(animalId)
      .then((animal) => {
        $scope.animal = animal
        $scope.$apply()
      })
  }

  popPage()


});
