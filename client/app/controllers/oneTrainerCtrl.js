app.controller('OneTrainerCtrl', function($scope, $routeParams, TrainerFact, CategoryFact){


  $scope.menu = "trainer";

  let trainerId = $routeParams.id;
  console.log("id", trainerId);
  const popPage = () =>{
    TrainerFact.getOne(trainerId)
      .then((trainer) => {
        console.log("trainer", trainer)
        $scope.trainer = trainer
        console.log(trainer)
        $scope.$apply()
      })
      .then( () => {
        CategoryFact.getOne($scope.trainer.category_id)
        .then((category) => {
          $scope.category = category
          $scope.$apply()
        })
      })
  }

  popPage()




});
