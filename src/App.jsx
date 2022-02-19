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

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Name',
      errorMsg: 'Username is required',
      label: 'Username',
      required: true
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMsg: 'Email is required',
      label: 'Email',
      required: true
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMsg: 'Password is required',
      label: 'Password',
      required: true
    },
    {
      id: 4,
      name: 'comfirm',
      type: 'password',
      placeholder: 'Comfirm password',
      errorMsg: 'Password is not match',
      label: 'Comfirm',
      required: true,
      pattern: values.password
    },
  ]

  const errorMsg = 'Required'


// To prevent re-render of the page use new FormData
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.target);
  //   console.log(Object.fromEntries(data.entries()));
  // }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  console.log(values);

  return (
    <div className="app">
      <form >
        { inputs.map(input => (
          <FormInput 
            key={input.id}
            {...input}
            value={values[input.name]}
            handleChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
