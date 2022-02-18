import './App.scss';
import FormInput from './components/FormInput';
import { useRef, useState } from 'react';

function App() {

  console.log('render page')


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput 
        placeholder="Name" 
        name="usename"
        
        />
        <FormInput name="email" placeholder="Email"/>
        <FormInput name="password" placeholder="Password"/>
        <FormInput name="other" placeholder="Other"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
