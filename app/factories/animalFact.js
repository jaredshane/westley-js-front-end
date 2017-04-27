app.factory('AnimalFact', function($http) {

  return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`https://jurassic-park-api.herokuapp.com/api/v1/animals`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    getOne: function(id) {
      return new Promise((resolve, reject) => {
        $http.get(`https://jurassic-park-api.herokuapp.com/api/v1/animals/${id}`)
        .then((data) => {
          resolve(data.data)
        })
      })
    },
    add: function(newAnimal) {
      return new Promise((resolve, reject) =>{
        $http.post(`https://jurassic-park-api.herokuapp.com/api/v1/animals/new`, newAnimal)
          .then((data) => {
            resolve(data)
          })
        })
    },

    delete: function(id) {
      return new Promise((resolve,reject) => {
        $http.delete(`https://jurassic-park-api.herokuapp.com/api/v1/animals/${id}`)
          .then((data) => {
            resolve()
          })
      })
    },

    edit: (updateInfo, id) => {
      return new Promise((resolve, reject) => {
        $http.put(`https://jurassic-park-api.herokuapp.com/api/v1/animals/${id}`, updateInfo)
        .then((data) => {
          resolve()
        })
        .catch((err) => console.log("err:", err))
      })
    }
  }
});
