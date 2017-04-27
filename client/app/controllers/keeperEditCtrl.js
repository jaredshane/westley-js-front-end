app.controller('KeeperEditCtrl', function( ZookeeperFact, $scope, $routeParams, $location){

  $scope.edit = true;
  $scope.menu = 'keeper';

  let keeperId = parseInt($routeParams.id);
  const popPage = () =>{
    ZookeeperFact.getOne(keeperId)
      .then((keeper) => {
        $scope.keeper = keeper
        $scope.$apply()
      })
  }

  popPage()


  $scope.sendEdit = () => {
    let edittedKeeper = $scope.keeper
    ZookeeperFact.edit(edittedKeeper, keeperId)
    .then((data) => {
      console.log("keeper Added");
      $location.url("/")
    })
    .catch((err) => {
      console.log(err);
    })
  }

  $scope.delete = () => {
    ZookeeperFact.delete(keeperId)
    .then((data)=> {
      console.log("keeper deleted");
      $location.url("/")
    })
    .catch((err) => {
      console.log(err)
    })
  }



});
