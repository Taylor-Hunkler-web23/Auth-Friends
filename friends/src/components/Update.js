import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const initialItem = {
    name: '',
    age: '',
    email: ''
  };
  
const UpdateForm = props => {
    console.log(props, 'props in updateee')
    const [form, setForm] = useState({initialItem})

 
  




        //   useEffect(() => {
        //     if (props.editFriend) {
        //         setForm({
        //           name: props.editFriend.name,
        //           age: props.editFriend.age,
        //           email: props.editFriend.email
        //         });
            
        // } else {
        //     setForm({ name: "", age: "", email: "" });
        //   }
        //   }, [props.editFriend]);
        


    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = e  => {
       
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/friends/${props.editFriend.id}`, form)
            .then(response =>  {
                //setting response to intitial list of friends
                props.setFriends(response.data)
            })
           
            .catch((error)=> console.log(error))
    }

    



    return (
        <div>
            <h1>Update a friend </h1>
            <form onSubmit={handleSubmit}>
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

                <button onClick={handleSubmit}> Edit</button>
            </form>

        </div>
    )



}
    

export default UpdateForm;