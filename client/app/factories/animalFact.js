app.factory('AnimalFact', function($http) {

  return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/v1/animals`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    getOne: function(id) {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/animals/${id}`)
        .then((data) => {
          resolve(data.data)
        })
      })
    },
    add: function(newAnimal) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/v1/animals/new`, newAnimal)
          .then((data) => {
            resolve(data)
          })
        })
    },

    delete: function(id) {
      return new Promise((resolve,reject) => {
        $http.delete(`http://localhost:3000/api/v1/animals/${id}`)
          .then((data) => {
            resolve()
          })
      })
    },

    edit: (updateInfo, id) => {
      return new Promise((resolve, reject) => {
        $http.put(`http://localhost:3000/api/v1/animals/${id}`, updateInfo)
        .then((data) => {
          resolve()
        })
        .catch((err) => console.log("err:", err))
      })
    }
  }
});
