import axios from "axios";
let CancelToken = axios.CancelToken;
const getQueryString = (params: any) => {
  let esc = encodeURIComponent;
  return (
    "?" +
    Object.keys(params)
      .map(k => esc(k) + "=" + esc(params[k]))
      .join("&")
  );
}
let cancel = () => { };
const getJsonBody = (params: any) => {
  return params;
}
export const cancelRequest = () => {
  return cancel;
};

export const fetch = (requestType: string, resourceURL: string, authToken: string, parameters?: string ): any => {
  var queryString =""
  switch (requestType) {
    case "GET":
      return new Promise((resolve, reject) => {
        if(parameters!=null && parameters!=undefined){
          queryString = getQueryString(parameters);
        }
        else{
          queryString = ""
        }
        axios
          .get(resourceURL + queryString, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            }),
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json",
              "Authorization": "Bearer " + authToken
            }
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            console.log(error.response);
            reject(error);
          });
      });

    case "POST":
      return new Promise((resolve, reject) => {
        var jsonBody = getJsonBody(parameters);
        axios
          .post(resourceURL, jsonBody, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            }),
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json",
              "Authorization": "Bearer " + authToken
            }
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            if (error.response.data.email) {
              reject(error.response.data.email);
            } else if (error.response.data.password) {
              reject(error.response.data.password);
            }
          });
      });

    case "PUT":
      return new Promise((resolve, reject) => {
        var jsonBody = getJsonBody(parameters);
        axios
          .put(resourceURL, jsonBody, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            }),
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json",
              "Authorization": "Bearer " + authToken
            }
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });

    case "PATCH":
      return new Promise((resolve, reject) => {
        var jsonBody = getJsonBody(parameters);
        axios
          .patch(resourceURL, jsonBody, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            }),
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json",
              "Authorization": "Bearer " + authToken
            }
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });

    case "DELETE":
      return new Promise((resolve, reject) => {
        var queryString = getQueryString(parameters);
        axios
          .delete(resourceURL + queryString, {
            cancelToken: new CancelToken(function executor(c) {
              cancel = c;
            }),
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json",
              "Authorization": "Bearer " + authToken
            }
          })
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });

    default:
      break;
  }
}