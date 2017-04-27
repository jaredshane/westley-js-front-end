app.controller('PersonnelCtrl', function(ZookeeperFact, TrainerFact, $scope){


  $scope.menu = "personnel"
  const popPage = () =>{
    ZookeeperFact.getAll()
      .then((keepers) => {
        $scope.keepers = keepers;
        $scope.$apply()
      })
      .then( () => {
        TrainerFact.getAll()
        .then((trainers) => {
          $scope.trainers = trainers;
          $scope.$apply()
        })
      })
  }

  popPage()



});
