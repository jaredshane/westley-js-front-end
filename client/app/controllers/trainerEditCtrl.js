app.controller('TrainerEditCtrl', function( TrainerFact, $scope, $routeParams, $location){

  $scope.edit = true;

  let trainerId = parseInt($routeParams.id);
  const popPage = () =>{
    TrainerFact.getOne(trainerId)
      .then((keeper) => {
        $scope.trainer = trainer
        $scope.$apply()
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
