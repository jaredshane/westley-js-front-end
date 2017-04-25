app.controller('KeeperCtrl', function(ZookeeperFact, $scope){

const popPage = () =>{
  ZookeeperFact.getAll()
    .then((keepers) => {
      console.log(keepers)
      $scope.keepers = keepers
      $scope.$apply()
    })
}

popPage()



});
