app.controller('KeeperAddCtrl', function($scope, ZookeeperFact, $location){

    $scope.edit = false;

    $scope.sendAdd = () => {
      let newKeeper = $scope.keeper
      ZookeeperFact.add(newKeeper)
      .then((data) => {
        console.log("keeper Added");
        $location.url("/")
      })
      .catch((err) => {
        console.log(err);
      })
    }

});
