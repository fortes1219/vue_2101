import axios from 'axios'

/*
var options = {
  method: 'GET',
  url: 'https://covid-19-statistics.p.rapidapi.com/regions',
  headers: {
    'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
    'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
  }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
*/

const api = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },

  get: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      })
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  post: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  put: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.put(url, params)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },


  delete: (url, params) => {
    return new Promise((resolve, reject) => {
      axios.delete(url)
        .then((response) => {
          resolve(response.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default api

