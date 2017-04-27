app.controller('OneKeeperCtrl', function($scope, $routeParams, ZookeeperFact){


  $scope.menu = "keeper";

  let keeperId = $routeParams.id;
  console.log("id", keeperId);
  const popPage = () => {
    ZookeeperFact.getOne(keeperId)
      .then((keeper) => {
        $scope.keeper = keeper
        console.log(keeper)
        $scope.$apply()
      })
    ZookeeperFact.getAnimals(keeperId)
    .then( (animals) => {
      console.log(animals)
      $scope.keepersAnimals = animals
    })
  }

  popPage()




});
