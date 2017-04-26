app.factory('AnimalKeeperFact', function($http){
  console.log('here\'s the animal_keeper factory')

  return {
    getKeepersForAnimal: function(id) {
        return new Promise((resolve, reject) =>{
          $http.get(`https://jurassic-park-api.herokuapp.com/api/v1/animals/keepers/${id}`)
            .then((data) => {
              resolve(data.data)
            })
        })
      }
  }

})
