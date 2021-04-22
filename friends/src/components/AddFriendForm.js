import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const initialValues = {

    name: '',
    age: '',
    email: '',
}

function AddFriendForm() {

const [formValues, setFormValues] = useState(initialValues);
const {push} =useHistory()
    const handleChanges = e =>{

        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>{
        
        e.preventDefaulet();
        axiosWithAuth()
        .post('/api/friends', formValues)
        .then((res) => {
            push('/friends')
        })
        .catch(err => console.log({err}))

    }

    return(

        <div>
            <h3>Add New Friend</h3>
            <form onSubmit={handleSubmit}>
                <label htlmlFor="name">Name</label>
                <input id= "name" name="name" value={formValues.name} onChange={handleChanges}/>
                <label htlmlFor="age">Age</label>
                <input id= "age" name="age" value={formValues.age} onChange={handleChanges}/>
                <label htlmlFor="email">Email</label>
                <input id= "email" name="email" value={formValues.email} onChange={handleChanges}/>
                <button>Add Friend</button>
            </form>
        </div>
    )
}
export default AddFriendForm