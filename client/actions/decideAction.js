import Actions from './actions.js';

export const decideAction = (actionCode) => {
  console.log(actionCode);
  if (actionCode === '!getResume') {
    Actions.getResume();
  }
}