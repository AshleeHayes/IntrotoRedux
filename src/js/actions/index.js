import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

// action creators
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

// So, the type property is nothing more than a string. The reducer will use that string to determine how to calculate the next state

export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        return { type: DATA_LOADED, payload: json };
      });
  };
}
