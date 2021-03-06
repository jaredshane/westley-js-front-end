app.factory('CategoryFact', function($http){
  console.log("here's the category factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`https://jurassic-park-api.herokuapp.com/api/v1/categories`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    getOne: function(id) {
      return new Promise((resolve, reject) => {
        $http.get(`https://jurassic-park-api.herokuapp.com/api/v1/categories/${id}`)
          .then((data) => {
            resolve(data.data)
          })
      })
    },
    add: function(categoryName) {

      return new Promise((resolve, reject) =>{
        $http.post(`https://jurassic-park-api.herokuapp.com/api/v1/categories/new`, categoryName)
          .then((data) => {
            resolve(data.data)
          })
          .catch((err) => {
            console.log(err)
          })
        })
    },
    edit: function(categoryName, id) {
      return new Promise((resolve, reject) => {
        $http.put('https://jurassic-park-api.herokuapp.com/api/v1/categories/${id}', categoryName)
        .then((data) => {
          resolve(data.data)
        })
      })
    }
  }
})
