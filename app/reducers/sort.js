import {
  ChangeSort,
} from '../actions/sort';


const InitialState = {
  sort: 'old',
};

export default function posts(state = InitialState, action) {
  switch (action.type) {
    case ChangeSort: {
      console.log(action);
      state.sort = action.sort;
      return state;
    }

    default:
      return state;
  }
}
