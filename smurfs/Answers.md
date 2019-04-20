1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
map, forEach, every. we use ...state


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
`action` are functions that do something. `reducers` update state based on where the actions land in the switch function. `store` job is to store state in one central location in redux. The store is the place where redux stores state which is why it is called single source of truth.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

1.  What is middleware?

software that intercepts code before being passed through out the UI->Action->Reducer cycle.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows asychrous request and changes action-creators by allows you to write action creators that return a function instead of an action

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect()() method
