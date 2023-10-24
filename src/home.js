import React, { useState } from "react";
import Input from "./Core components/input";
import profile from './Assets/profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Home = () => {

    const [Background, setBackground] = useState('');
    const [text, setText] = useState('');
    const [primary, setPrimary] = useState('');


    const SetTheme = () => {
        document.documentElement.style.setProperty('--background', Background);
        document.documentElement.style.setProperty('--primary', primary);
        document.documentElement.style.setProperty('--text', text);
    }

    const Reset = () => {
        document.documentElement.style.setProperty('--background', '#FFFFFF');
        document.documentElement.style.setProperty('--primary', '#7F00FF');
        document.documentElement.style.setProperty('--text', '#2E2E2E');
    }

    return (
        <div className='container box' data-aos='zoom-in'>
            <div className='texts'>
                <h1>Hi I'm Deepak</h1>
                <h4 className="role" data-text="Full Stack Developer">Full Stack Developer</h4>
                <h6>I'm a full-stack developer skilled in both front-end and back-end technologies,
                    crafting versatile web applications with a focus on user experience and performance.
                </h6>
                <div className='mail'>
                    <h4>Email</h4>
                    <h6>deepakvenkatesh2003@gmail.com</h6>
                </div>
                <div className='icons'>
                    <a href="https://www.linkedin.com/in/deepakv11/" target="blank"><i className="bi bi-linkedin" /></a>
                    <a href="https://github.com/Deepak-Venkates" target="blank"><i className="bi bi-github" /></a>
                </div>
            </div>
            {/* Button trigger modal */}
            {/* Modal */}

            <div className='image'>
                <div className='img-container'>
                    <img src={profile} width='350' height='450'/>
                </div>
            </div>
                        <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel" style={{color:"black"}}>
                                Pick Your Theme
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <center>
                                <h6>Choose Background Colour</h6>
                                <Input type='color' name='color' value={Background} onchange={(e) => setBackground(e.target.value)} />
                                <br />
                                <br />
                                <h6>Choose Text Colour</h6>
                                <Input type='color' name='color' value={text} onchange={(e) => setText(e.target.value)} />
                                <br />
                                <br />
                                <h6>Choose Primary Colour</h6>
                                <Input type='color' name='color' value={primary} onchange={(e) => setPrimary(e.target.value)} />
                            </center>
                        </div>
                        <div className="modal-footer" >
                            <button
                                type="button"
                                onClick={Reset}
                                data-bs-dismiss="modal"
                            >
                                Reset
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>

                            <button
                                type="button"
                                onClick={SetTheme}
                                data-bs-dismiss="modal"
                            >
                                Change Theme
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;