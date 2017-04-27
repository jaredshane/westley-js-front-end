app.controller('AnimalEditCtrl', function($scope, AnimalFact, $routeParams, CategoryFact, $location){

  let animalId = $routeParams.id

  $scope.edit = true;

  console.log("from the controller")

  const popPage = () =>{
    AnimalFact.getOne(animalId)
      .then((animal) => {
        $scope.animal = animal;
        CategoryFact.getAll()
        .then((categories) => {
          $scope.categories = categories;
          $scope.$apply()
        })
      })
  }

  popPage()

  $scope.sendEdit = () => {
    let edittedAnimal = $scope.animal
    edittedAnimal.number_of_kills = parseInt(edittedAnimal.number_of_kills);
    edittedAnimal.category_id = parseInt(edittedAnimal.category_id)
    AnimalFact.edit(edittedAnimal, animalId)
    .then((data) => {
      $location.url("/")
    })
    .catch((err) => {
      console.log(err);
    })
  }

  $scope.delete = () => {
    AnimalFact.delete(animalId)
    .then((data)=> {
      $location.url("/")
    })
    .catch((err) => {
      console.log(err)
    })
  }








});
