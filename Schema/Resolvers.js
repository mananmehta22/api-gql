import fetch from "node-fetch";

const resolvers = {
  Query: {
    getUpcoming() {
      fetch(`https://api.spacexdata.com/v5/launches/upcoming`)
        .then((response) => response.json())
        .then((data) => console.log(data.length))

    
    },
    getPast() {
      fetch(`https://api.spacexdata.com/v5/launches/past`)
        .then((response) => response.json())
        .then((data) => {
            var past = JSON.stringify(data.length);
            console.log(typeof(past));
            return past;
        })
    },
    getAll() {
      fetch(`https://api.spacexdata.com/v5/launches`)
        .then((response) => response.json())
        .then((data) => console.log(data.length));
    },
  },
};

export default resolvers;
