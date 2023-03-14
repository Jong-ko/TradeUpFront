import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const CreateAccount = () => {
    const [username, setUsername] = useState('');
    const [passphrase, setPassphrase] = useState('');
    const [errorVisible, setErrorVisible] = useState('hidden-message');
    const navigate = useNavigate();

    const AccountCreate = async (event) => {
        event.preventDefault();
        await fetch("/create_account", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({  
                username: username,
                passphrase: passphrase,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.success) {
                setErrorVisible('hidden-message');
                navigate("/login");
            } else {
                setErrorVisible('visible-message');
            }
        })
    }
    
    return (
  
                <div className="d-flex flex-column justify-content-center align-items-center">
                <form onSubmit={AccountCreate}>
                    <form className="mb-3">
                        <label className="handwriting-text">Create Username</label>
                        <input type="string" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
                    </form>
                    <form className="mb-3">
                        <label className="handwriting-text">Password</label>
                        <input type="password" placeholder="Password" autoComplete="on" onChange={(event) => setPassphrase(event.target.value)}/>
                    </form>
                    <form className="mb-3 d-flex justify-content-center align-items-center">
                        <input type="submit" hidden />
                        <button className="babble-btn btn1 mx-3" type="submit">Create</button>
                    </form>
                </form>
                    <p><span className={errorVisible}>Invalid username or password</span></p>
                </div>
        
        )
}