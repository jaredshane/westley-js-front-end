app.factory('CategoryFact', function($http){
  console.log("here's the category factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/v1/categories`)
            .then((data) => {
              console.log(data.data)
              resolve(data.data)
            })
        })
      },
    getOne: function(id) {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/categories/${id}`)
          .then((data) => {
            resolve(data.data)
          })
      })
    },
    add: function(categoryName) {
      console.log("add from factory")
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/v1/categories/new`, categoryName)
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
        $http.put('http://localhost:3000/api/v1/categories/${id}', categoryName)
        .then((data) => {
          resolve(data.data)
        })
      })
    }
  }
})
