import Actions from './actions.js';

export const decideAction = (actionCode) => {
  if (actionCode === '!**getResume') {
    return Actions.getResume();
  } 
}