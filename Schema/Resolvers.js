import fetch from "node-fetch";

const resolvers = {
  Query: {
    async getUpcoming() {
      return fetch(`https://api.spacexdata.com/v3/launches/upcoming`)
        .then((response) => response.json())
        .then((data) => {
          var upcoming = JSON.stringify(data.length);
          console.log(upcoming);
          return upcoming;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getPast() {
      return fetch(`https://api.spacexdata.com/v3/launches/past`)
        .then((response) => response.json())
        .then((data) => {
          var past = JSON.stringify(data.length);
          console.log(past);
          return past;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAll() {
      return fetch(`https://api.spacexdata.com/v3/launches`)
        .then((response) => response.json())
        .then((data) => {
          var all = JSON.stringify(data.length);
          console.log(all);
          return all;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};

export default resolvers;
