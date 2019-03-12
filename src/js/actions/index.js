import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

// So, the type property is nothing more than a string. The reducer will use that string to determine how to calculate the next state