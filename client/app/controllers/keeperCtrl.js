app.controller('KeeperCtrl', function(ZookeeperFact, $scope){

  $scope.menu = "keepers";

  const popPage = () =>{
    ZookeeperFact.getAll()
      .then((keepers) => {
        console.log(keepers)
        $scope.keepers = keepers
        $scope.$apply()
      })
  }

  popPage()



});
