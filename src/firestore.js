import React, { useEffect, useState } from "react";
import { db } from "./firebase.";
import { addDoc, collection, getDocs } from '@firebase/firestore';

const Firebase = () => {

    const [company, setCompany] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [msg, setMsg] = useState('');
    const [role, setRole] = useState('');
    const [values, setValues] = useState([])
    const ref = collection(db, 'reviewrs');
    useEffect(() => {
        const getReview = async () => {
            const data = await getDocs(ref)
            setValues(data.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })))
            console.log(values);
        };
        getReview();
    }, [])

    const Store = async (e) => {
        e.preventDefault();
        let data = {
            company,
            firstname,
            lastname,
            msg,
            role
        }
        try {
            addDoc(ref, data)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <form onSubmit={Store}>
                <label>Enter Company</label>
                <input type="text" onChange={(e) => setCompany(e.target.value)} />
                <label>Enter Firstname</label>
                <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                <label>Enter Lastname</label>
                <input type="text" onChange={(e) => setLastname(e.target.value)} />
                <label>Enter Message</label>
                <input type="text" onChange={(e) => setMsg(e.target.value)} />
                <label>Enter Role</label>
                <input type="text" onChange={(e) => setRole(e.target.value)} />
                <button type="submit">Post</button>
            </form>
            {values.map((item) => (
                <div key={item.id}>
                    {/* Display your data here */}
                    <h6>Company : {item.company}</h6>
                    <h6>Firstname : {item.firstname}</h6>
                    <h6>Lastname : {item.lastname}</h6>
                    <h6>Position : {item.role}</h6>
                    <h6>Review : {item.msg}</h6>
                    {/* Add more fields as needed */}
                </div>
            ))}
        </>
    )

}

export default Firebase;