import react from 'react';

const Skills = () => {

    return (
        <div className='skills box'>
            <h1>Skills</h1><br />
            <h2>Technical Skills</h2>
            <div className='technical'>
                <div className='front-end'>
                    <h4><i class="bi bi-code-slash" /> Front-end </h4>
                    <div className='skillname'>
                        <div><h5>Html</h5></div>
                        <div className='outerdiv'><div className='innerdiv html' /></div>
                    </div>
                    <div className='skillname'>
                        <div><h5>CSS</h5></div>
                        <div className='outerdiv'><div className='innerdiv css' /></div>
                    </div>
                    <div className='skillname'>
                        <div><h5>Java Script</h5></div>
                        <div className='outerdiv'><div className='innerdiv js' /></div>
                    </div>
                    <div className='skillname'>
                        <div><h5>React Js</h5></div>
                        <div className='outerdiv'><div className='innerdiv react' /></div>
                    </div>
                    <div className='skillname'>
                        <div><h5>Bootstrap</h5></div>
                        <div className='outerdiv'><div className='innerdiv bs' /></div>
                    </div>
                </div>
                <div className='back-end'>
                    <h4><b><i class="bi bi-braces" /></b>  Back-end </h4>
                    <div className='skillname'>
                        <div><h5>Node Js</h5></div>
                        <div className='outerdiv'><div className='innerdiv node' /></div>
                    </div>
                    <div className='skillname'>
                        <div><h5>Express Js</h5></div>
                        <div className='outerdiv'><div className='innerdiv express' /></div>
                    </div>
                    <div className='skillname'>
                        <div><h5>Python</h5></div>
                        <div className='outerdiv'><div className='innerdiv python' /></div>
                    </div>
                    <div className='skillname'>
                        <div><h5>Java</h5></div>
                        <div className='outerdiv'><div className='innerdiv java' /></div>
                    </div>
                </div>
                <div className='db'>
                    <h4><i class="bi bi-database-check" />  Database</h4>
                    <div className='skillname'>
                        <div><h5>MySQL</h5></div>
                        <div className='outerdiv'><div className='innerdiv mysql' /></div>
                    </div>
                    <div className='skillname'>
                        <div><h5>Mongo DB</h5></div>
                        <div className='outerdiv'><div className='innerdiv mongo' /></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Skills;