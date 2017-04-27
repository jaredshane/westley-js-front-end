app.factory('TrainerFact', function($http){
  console.log("trainer factory loaded")

  return {
    getAll: function() {
      return new Promise((resolve, reject) =>{
        $http.get(`http://localhost:8080/api/v1/trainers/`)
          .then((data) => {
            resolve(data.data)
          })
      })
    },

    getOne: function(id) {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:8080/api/v1/trainers/${id}`)
        .then((data) => {
          resolve(data.data)
        })
      })
    },

    add: function(newTrainer) {
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:8080/api/v1/trainers/new`, newTrainer)
          .then((data) => {
            resolve(data)
          })
        })
    },

    delete: function(id) {
      return new Promise((resolve,reject) => {
        $http.delete(`http://localhost:8080/api/v1/trainers/${id}`)
          .then((data) => {
            resolve()
          })
      })
    },

    edit: (updateInfo, id) => {
      return new Promise((resolve, reject) => {
        $http.put(`http://localhost:8080/api/v1/trainers/${id}`, updateInfo)
        .then((data) => {
          resolve()
        })
        .catch((err) => console.log("err:", err))
      })
    }



  } // close return
});
