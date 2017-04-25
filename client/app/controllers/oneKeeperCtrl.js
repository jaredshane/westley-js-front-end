app.controller('OneKeeperCtrl', function($scope, $routeParams){

  let keeperId = $routeParams.id;
  const popPage = () =>{
    ZookeeperFact.getOne(keeperId)
      .then((keeper) => {
        $scope.keeper = keeper.keeper
        $scope.$apply()
      })
  }

  popPage()




});
