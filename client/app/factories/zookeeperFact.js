app.factory('ZookeeperFact', function($http){
  console.log("here's the zookeeper factory")

    return {
    getAll: function() {
        return new Promise((resolve, reject) =>{
          $http.get(`https://jurassic-park-api.herokuapp.com/api/v1/keepers`)
            .then((data) => {
              resolve(data.data)
            })
        })
      },
    getOne: function(id) {
      return new Promise((resolve, reject) => {
        $http.get(`https://jurassic-park-api.herokuapp.com/api/v1/keepers/${id}`)
          .then((data) => {
            resolve(data.data)
          })
      })
    },
    add: function(newZookeeper) {
      return new Promise((resolve, reject) =>{
        $http.post(`https://jurassic-park-api.herokuapp.com/api/v1/keepers/new`, newZookeeper)
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
        $http.delete(`https://jurassic-park-api.herokuapp.com/api/v1/keepers/${id}`)
          .then((data) => {
            resolve()
          })
      })
    },
    edit: function(editedZooKeeper, id) {
      return new Promise((resolve, reject) => {
        $http.put('https://jurassic-park-api.herokuapp.com/api/v1/keepers/${id}', editedZooKeeper)
        .then((data) => {
          resolve(data.data.zookeepers)
        })
      })
    }
  }
})
