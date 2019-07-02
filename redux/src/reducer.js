import {
  VisibilityFilters,
  SET_INVISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from "./actions";

const initialState = {
  visibilityFilters: VisibilityFilters.SHOW_ALL,
  todos: []
};

// function todoApp(state, action) {
//   if (typeof state === "undefined") {
//     return initialState;
//   }
//   return state;
// }

function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_INVISIBILITY_FILTER:
      return Object.assign({}, state, { visibilityFilters: action.filter });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, { text: action.text, completed: false }]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        })
      });
    default:
      return state;
  }
}
