app.controller('OneTrainerCtrl', function($scope, $routeParams, TrainerFact){


  $scope.menu = "trainer";

  let trainerId = $routeParams.id;
  console.log("id", trainerId);
  const popPage = () =>{
    TrainerFact.getOne(trainerId)
      .then((trainer) => {
        $scope.trainer = trainer
        console.log(trainer)
        $scope.$apply()
      })
  }

  popPage()




});
