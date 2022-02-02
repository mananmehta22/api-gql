import fetch from "node-fetch";

const resolvers = {
  Query: {
    getUpcoming() {
      fetch(`https://api.spacexdata.com/v5/launches/upcoming`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    getPast() {
      fetch(`https://api.spacexdata.com/v5/launches/past`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    getAll() {
      fetch(`https://api.spacexdata.com/v5/launches`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  },
};

export default resolvers;
