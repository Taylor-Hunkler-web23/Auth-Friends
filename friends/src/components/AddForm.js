import React, {useState} from 'react';

const Form = props => {
    const [friend, setFriend] = useState ({name: '', age:'', email:'' })


    const handleChange = event => {
        setFriend({
            ...friend,
            [event.target.name]: event.target.value
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

        <button>Add</button>
      </form>
      
      </div>
    )



}

export default Form;