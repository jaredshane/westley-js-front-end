app.controller('KeeperAddCtrl', function($scope, ZookeeperFact, $location){

    $scope.edit = false;
    $scope.menu = 'keeper';

    $scope.sendAdd = () => {
      let newKeeper = $scope.keeper
      console.log('newKeeper', newKeeper)
      console.log('scope keeper', $scope.keeper)
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
