import { useParams } from 'react-router-dom'
import { useEffect} from 'react';
import axios from 'axios';
const User =(props)=>{
    let { id } = useParams();

    useEffect( ()=>{
        const response =  axios.get(`https://reqres.in/api/users/${id}`)
        console.log(response);
    })
return (<h1>User</h1>)
}
export default User;