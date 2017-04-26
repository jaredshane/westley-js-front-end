app.controller('OneAnimalCtrl', function(AnimalFact, $scope){

const popPage = () =>{
  AnimalFact.getOne()
    .then((animal) => {
      $scope.animal = animal.animal
      $scope.$apply()
    })
}

popPage()



});
