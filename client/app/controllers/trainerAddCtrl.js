app.controller('TrainerAddCtrl', function($scope, TrainerFact, $location){

    $scope.edit = false;

    $scope.sendAdd = () => {
      let newTrainer = $scope.trainer
      TrainerFact.add(newTrainer)
      .then((data) => {
        console.log("trainer Added");
        $location.url("/")
      })
      .catch((err) => {
        console.log(err);
      })
    }

});
