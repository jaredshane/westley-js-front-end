app.controller('TrainerEditCtrl', function( TrainerFact, CategoryFact, $scope, $routeParams, $location){

  $scope.edit = true;
  $scope.menu = 'trainer';

  let trainerId = parseInt($routeParams.id);
  const popPage = () =>{
    TrainerFact.getOne(trainerId)
      .then((trainer) => {
        $scope.trainer = trainer
        CategoryFact.getAll()
        .then((categories) => {
          $scope.categories = categories;  // Add categories to trainer edit page
          $scope.$apply()
        })
      })

  }

  popPage()


  $scope.sendEdit = () => {
    let edittedTrainer = $scope.trainer
    TrainerFact.edit(edittedTrainer, trainerId)
    .then((data) => {
      console.log("trainer Added");
      $location.url("/")
    })
    .catch((err) => {
      console.log(err);
    })
  }

  $scope.delete = () => {
    TrainerFact.delete(trainerId)
    .then((data)=> {
      console.log("trainer deleted");
      $location.url("/")
    })
    .catch((err) => {
      console.log(err)
    })
  }



});
