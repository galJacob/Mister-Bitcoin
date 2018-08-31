import { ADD_ARTICLE } from './Action-types';
import { ADD_NAME } from './Action-types';
import { ADD_MOVE } from './Action-types';
import { FILTER_LIST } from './Action-types';


export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const addName = name => ({ type: ADD_NAME, payload: name });
export const addMove = move => ({ type: ADD_MOVE, payload: move });
export const filterList = (filterBy, contacts) => ({ type: FILTER_LIST, payload: { filterBy, contacts } });


