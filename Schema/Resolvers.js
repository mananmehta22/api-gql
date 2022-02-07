import fetch from "node-fetch";

const resolvers = {
  Query: {
    getUpcoming() {
      fetch(`https://api.spacexdata.com/v3/launches/upcoming`)
        .then((response) => 
        response.json())
        .then((data) => {
          var upcoming = JSON.stringify(data.length);
          console.log(upcoming);
          return upcoming;
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPast() {
      fetch(`https://api.spacexdata.com/v3/launches/past`)
        .then((response) => response.json())
        .then((data) => {
          var past = JSON.stringify(data.length);
          console.log(past);
          return past;
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAll() {
      fetch(`https://api.spacexdata.com/v3/launches`)
        .then((response) => response.json())
        .then((data) => {
          var all = JSON.stringify(data.length);
          console.log(all);
          return all;
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
};

export default resolvers;
