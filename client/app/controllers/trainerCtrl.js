app.controller('TrainerCtrl', function(TrainerFact, $scope){

  $scope.menu = "trainers";

  const popPage = () =>{
    TrainerFact.getAll()
      .then((trainers) => {
        $scope.trainers = trainers
        $scope.$apply()
      })
  }

  popPage()

});
