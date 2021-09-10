import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1> My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Learn React again'/>
      <Todo text='Learn React done'/>
 
    </div>
  );
}
//to make avaiable outside of this file
export default App;
