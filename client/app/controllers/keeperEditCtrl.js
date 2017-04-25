app.controller('KeeperEditCtrl', function(ZookeeperFact, $scope){

  $scope.edit = true;

const popPage = () =>{
  ZookeeperFact.getOne()
    .then((keeper) => {
      $scope.keeper = keeper.keeper
      $scope.$apply()
    })
}

popPage()




});
