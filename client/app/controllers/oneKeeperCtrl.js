app.controller('OneKeeperCtrl', function($scope, $routeParams, ZookeeperFact){


  $scope.menu = "keeper";

  let keeperId = $routeParams.id;
  console.log("id", keeperId);
  const popPage = () => {
    ZookeeperFact.getOne(keeperId)
      .then((keeper) => {
        $scope.keeper = keeper
        $scope.$apply()
      })
    ZookeeperFact.getAnimals(keeperId)
    .then( (animals) => {
      $scope.keepersAnimals = animals
      $scope.$apply()
    })
  }

  popPage()




});
