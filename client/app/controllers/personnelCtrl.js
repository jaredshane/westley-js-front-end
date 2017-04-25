app.controller('PersonnelCtrl', function(ZookeeperFact, $scope){


  $scope.menu = "personnel"
  const popPage = () =>{
    ZookeeperFact.getAll()
      .then((keepers) => {
        $scope.keepers = keepers;
        $scope.$apply()
      })
  }

  popPage()



});
