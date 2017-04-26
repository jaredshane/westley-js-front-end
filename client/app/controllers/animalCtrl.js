app.controller('AnimalCtrl', function(AnimalFact, $scope){

const popPage = () =>{
  AnimalFact.getAll()
    .then((animals) => {
      $scope.animals = animals
      $scope.$apply()
    })
}

popPage()



});
