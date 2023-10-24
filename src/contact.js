import { useState } from "react";
import React  from "react";
import Input from "./Core components/input";
import Textarea from "./Core components/textarea";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    return (
        <div className='contact box'>
            <h1>Contact Me</h1>
            <div className='contact-container'>
                <div className='logos'>
                    <div className='phone logo'>
                        <i className="bi bi-telephone" />
                        <h6>+91 6379137611</h6>
                    </div>
                    <div className='email logo'>
                        <i className="bi bi-envelope" />
                        <h6>deepakvenkatesh2003@gmail.com</h6>
                    </div>
                    <div className='location logo'>
                        <i className="bi bi-geo-alt" />
                        <h6>Uthukuli</h6>
                    </div>
                </div>
                <div className='form'>
                    <form action="mailto:deepakvenkatesh2003@gmail.com" method='get' enctype="text/plain">
                        <Input type='text' name='name' placeholder='Enter Your Name' value={name} onchange={(e) => setName(e.target.value)} />
                        <Input type='mail' name='mail' placeholder='Enter Your Mail' value={email} onchange={(e) => setEmail(e.target.value)} />
                        <Textarea placeholder='Message' value={msg} onchange={(e) => setMsg(e.target.value)} />
                        <input type='submit' value='Send Mail' className='submit' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;