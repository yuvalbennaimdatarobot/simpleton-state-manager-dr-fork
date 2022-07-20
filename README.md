# Simpleton State Manager

Simple, Generic, Reliable, Transparent and Proven State Manager for your modern Web Application


This is by far THE SIMPLEST Frontend JavaScript State Manager you will ever find or need.

Tired of the heaveyweight, bloated State machines like Redux ? This is your answer.



The SimpletonStateManager is a generic, framework agnostic utility that will help you manage you WebApplication's State no matter how complex it gets.
And until JavaScript becomes a multi-threaded language, is probably all you will need.

React, React with Hooks, React with Crooks, WebComponeents and plain old Vanilla Javascript, you name it, the Simpleton can be your best friend.

I have personally been usng this for the past 5 years statrted with my previous employer, an with my current employer



Installation:

```
npm install simpleton-state-manager
```





Usage Examples:

```javascript

const store = new SimpletonStateManager(); //this is a Singleton val\nilla JavaScript class

store.unsubscribeAll();
const modelOne = { name: 'modelOne' };
store.setModel('modelOne', modelOne);
const modelTwo = { name: 'modelTwo' };
store.setModel('modelTwo', modelTwo);
const models = store.getModelList();

function App() {
  return (
    <StoreProvider store={store}>
      <TodoList />
    </StoreProvider>
  );
}
```
