app.controller('AnimalAddCtrl', function($scope, $routeParams, CategoryFact, AnimalFact, $location){

  let animalId = $routeParams.id
  $scope.edit = false;

  console.log("from the controller")

  const popPage = () => {
        CategoryFact.getAll()
        .then((categories) => {
          $scope.categories = categories;
          $scope.$apply()
        })

  }

  popPage()

      $scope.sendAdd = () => {
      let newAnimal = $scope.animal
      newAnimal.number_of_kills = parseInt(newAnimal.number_of_kills);
      newAnimal.category_id = parseInt(newAnimal.category_id)
      AnimalFact.add(newAnimal)
      .then((data) => {
        console.log("animal Added");
        $location.url("/")
      })
      .catch((err) => {
        console.log(err);
      })
    }


});
