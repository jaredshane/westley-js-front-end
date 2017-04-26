app.controller('PersonnelCtrl', function(zookeeperFact, $scope){


  $scope.menu = "personnel"
  const popPage = () =>{
    zookeeperFact.getAll()
      .then((keepers) => {
        $scope.keepers = keepers;
        $scope.$apply()
      })
  }

  popPage()



});
