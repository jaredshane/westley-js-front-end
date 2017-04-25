app.controller('KeeperEditCtrl', function(ZookeeperFact, $scope){


const popPage = () =>{
  ZookeeperFact.getOne()
    .then((keeper) => {
      $scope.keeper = keeper.keeper
      $scope.$apply()
    })
}

popPage()




});
