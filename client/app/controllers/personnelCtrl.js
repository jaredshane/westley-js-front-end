app.controller('PersonnelCtrl', function(ZookeeperFact, $scope){

const popPage = () =>{
  ZookeeperFact.getAll()
    .then((keepers) => {
      $scope.keepers = keepers
      console.log(keepers)
      $scope.$apply()
    })
}

popPage()



});
