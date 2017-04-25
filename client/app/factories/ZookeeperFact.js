app.factory('ZookeeperFact', function($http){
  console.log("here's the zookeeper factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`http://localhost:3000/api/v1/keepers`)
            .then((data) => {
              console.log(data.data)
              resolve(data.data)
            })
        })
      },
    getOne: function(id) {
      return new Promise((resolve, reject) => {
        $http.get(`http://localhost:3000/api/v1/keepers/${id}`)
          .then((data) => {
            resolve(data.data)
          })
      })
    },
    add: function(newZookeeper) {
      console.log("add from factory")
      return new Promise((resolve, reject) =>{
        $http.post(`http://localhost:3000/api/v1/keepers/new`, newZookeeper)
          .then((data) => {
            resolve(data.data)
          })
          .catch((err) => {
            console.log(err)
          })
        })
    },
    delete: function(id) {
      return new Promise((resolve, reject) => {
        $http.delete(`http://localhost:3000/api/v1/keepers/${id}`)
          .then((data) => {
            console.log("data from delete")
            resolve()
          })
      })
    },
    edit: function(editedZooKeeper, id) {
      return new Promise((resolve, reject) => {
        $http.put('http://localhost:3000/api/v1/keepers/${id}', editedZooKeeper)
        .then((data) => {
          resolve(data.data.zookeepers)
        })
      })
    }
  }
})
