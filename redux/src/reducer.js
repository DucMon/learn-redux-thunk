import { VisibilityFilters } from "./actions";

const initialState = {
  visibilityFilters: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state, action) {
  if (typeof state === "undefined") {
    return initialState;
  }
  return state;
}

function todoApp(state = initialState, action) {
  return state;
}
