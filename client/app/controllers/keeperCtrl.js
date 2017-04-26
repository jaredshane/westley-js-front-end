app.controller('KeeperCtrl', function(zookeeperFact, $scope){

  $scope.menu = "keepers";

  const popPage = () =>{
    zookeeperFact.getAll()
      .then((keepers) => {
        console.log(keepers)
        $scope.keepers = keepers
        $scope.$apply()
      })
  }

  popPage()



});
