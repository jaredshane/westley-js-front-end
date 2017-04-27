app.controller('TrainerAddCtrl', function($scope, TrainerFact, CategoryFact, $location){

    $scope.edit = false;
    $scope.menu = 'trainer';

    const popPage = () =>{
      CategoryFact.getAll()
        .then((categories) => {
          $scope.categories = categories;
          $scope.$apply()
        })

    }

    popPage()

    $scope.sendAdd = () => {
      let newTrainer = $scope.trainer
      console.log("scope trainer", $scope.trainer)
      console.log("newTrainer", newTrainer)
      TrainerFact.add(newTrainer)
      .then((data) => {
        console.log("trainer Added");
        $location.url("/")
      })
      .catch((err) => {
        console.log(err);
      })
    }

});
