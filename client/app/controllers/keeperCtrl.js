app.controller('KeeperCtrl', function(ZookeeperFact, $scope){

const popPage = () =>{
  ZookeeperFact.getAll()
    .then((keepers) => {
      $scope.keepers = keepers
      $scope.$apply()
    })
}

popPage()



});
