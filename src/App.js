import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

const employees = [
  {id: 1, name: 'Ningguang', country: 'Liyue'},
  {id: 2, name: 'Xiangling', country: 'Mondstadt'},
  {id: 3, name: 'Ganyu', country: 'Inazuma'},
  {id: 4, name: 'Aether', country: 'Snezhnaya'},
  {id: 5, name: 'Yoimiya', country: 'Inazuma'},
];



//App: class based document
class App extends Component{
  //js object which have key value pairs
  

  render(){
    
    
    return(
      <div>
      {employees.map(employee => {
        return (
          <div key={employee.id}>
            <h2>Name: {employee.name} 
            </h2>
            <h2>Country: {employee.country}</h2>
            <button onClick={() => this.setState({count: employee.country ="Sumeru"})}>
          Change Country to Sumeru
        </button>
            <hr />
          </div>
        );
      })}
    </div>
    )

  }
}


export default App;
