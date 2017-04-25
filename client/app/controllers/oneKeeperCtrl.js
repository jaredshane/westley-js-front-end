app.controller('OneKeeperCtrl', function(){


const popPage = () =>{
  ZookeeperFact.getOne()
    .then((keeper) => {
      $scope.keeper = keeper.keeper
      $scope.$apply()
    })
}

popPage()




});
