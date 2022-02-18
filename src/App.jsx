import './App.scss';
import FormInput from './components/FormInput';
import { useRef, useState } from 'react';

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    comfirm: '',
  })


// To prevent re-render of the page use new FormData
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   console.log(Object.fromEntries(data.entries()));
  // }

  return (
    <div className="app">
      <form >
        <FormInput 
        placeholder="Name" 
        name="username"    
        />
        <FormInput name="email" placeholder="Email"/>
        <FormInput name="password" placeholder="Password"/>
        <FormInput name="comfirm" placeholder="Comfirm Password"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
