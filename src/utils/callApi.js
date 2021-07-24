import axios from "axios";

export function callApi(url, setProducts) {
  axios
    .get(`/${url}`)
    .then((response) => {
      const data = response.data;
      setProducts(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
