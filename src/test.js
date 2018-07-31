const getRecipes = new Promise((resolve, reject) => {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const key = "d0bae227a6e9d58da98ac7250daa9380";
  const url = `${proxy}http://food2fork.com/api/search?key=${key}&q=pizza`;

  //Open a new XHR
  var request = new XMLHttpRequest();
  request.open("GET", url);

  // When the request loads, check whether it was successful
  request.onload = function() {
    if (request.status === 200) {
      resolve(request.response);
    } else {
      reject(
        Error(
          "An error occurred while loading image. error code:" +
            request.statusText
        )
      );
    }
  };
  request.send();
});

const getWeather = async (id, callback) => {
  // const cors = "https://cors-anywhere.herokuapp.com/";
  // fetch(`${cors}https://www.metaweather.com/api/location/${id}/`)
  //   .then(result => {
  //     console.log(result);
  //     return result.json();
  //   })
  //   .then(data => callback(false, data))
  //   .catch(error => {
  //     callback(true, error);
  //   });
  try {
    const cors = "https://cors-anywhere.herokuapp.com/";
    let results = await fetch(
      `${cors}https://www.metaweather.com/api/location/${id}/`
    );
    let data = await results.json();
    return data;
  } catch (error) {
    return error;
  }
};

getWeather(418)
  .then(data => console.log(data))
  .catch(error => console.log(error));
