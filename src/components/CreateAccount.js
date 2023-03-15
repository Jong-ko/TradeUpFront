import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorVisible, setErrorVisible] = useState('hidden-message');
    const navigate = useNavigate();

    const AccountCreate = async (event) => {


        console.log('in create account')
        event.preventDefault();
        await fetch("/create_account", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({  
                email: email,
                password: password,
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.success) {
                console.log('Success:', data);

                setErrorVisible('hidden-message');
                navigate("/profile");
            } else {
                setErrorVisible('visible-message');
            }
        })
    }
    
    return (
                <div className="d-flex flex-column justify-content-center align-items-center">
                <form  onSubmit={AccountCreate} required>
                    <div className="createAccount">
                        <p>Creat An Account</p>
                    </div>
                    <div className="mb-3">
                        <label className="handwriting-text">Email</label>
                        <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="handwriting-text">Password</label>
                        <input type="password" placeholder="Password" autoComplete="on" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="mb-3 d-flex justify-content-center align-items-center">
                        <input type="submit" hidden />
                        <button className="babble-btn btn1 mx-3" type="submit">Create</button>
                    </div>
                </form>
                    <p><span className={errorVisible}>Invalid username or password</span></p>
                </div>
        )
}