app.controller('KeeperCtrl', function(ZookeeperFact, $scope){

  $scope.menu = "keepers";

  const popPage = () =>{
    ZookeeperFact.getAll()
      .then((keepers) => {
        $scope.keepers = keepers
        $scope.$apply()
      })
  }

  popPage()



});
