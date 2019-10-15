import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Form = props => {
    console.log(props,'p')
    const [friend, setFriend] = useState ({name: '', age:'', email:'' })


    const handleChange = event => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit =event => {
        event.preventDefault()

        axiosWithAuth()
        .post('/api/friends', friend)
        .then(response => {
            props.history.push('/protected')
        })


    }


    return(
<div>
    <h1>Add a friend</h1>
      <form>
          <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          />

        <input
        name="age"
        type="number"
        placeholder="Age"
        onChange={handleChange}

        />
        <input
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleChange}
        />

        <button onClick={handleSubmit}> Add</button>
      </form>
      
      </div>
    )



}

export default Form;