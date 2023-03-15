import React, { useState } from "react";
import "../App.css";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {logIn,setUserAccount } from '../features/swapSlice'

export const Login = () => {
    const [username, setUsername] = useState('');
    const [passphrase, setPassphrase] = useState('');
    const [errorVisible, setErrorVisible] = useState('hidden-message');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const AccountLogin = async (event) => {
        event.preventDefault();
        await fetch("/login", {
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
                dispatch(logIn());
                dispatch(setUserAccount(username));
                //setUsername('');
                //setPassphrase('');
                navigate("/");
            } else {
                setErrorVisible('visible-message');
            }
        })
    }

    return (
                <div className="d-flex flex-column justify-content-center align-items-center">
                <form onSubmit={AccountLogin}>
                    <div className="mb-3">
                        <label className="handwriting-text">Login Username</label>
                        <input type="string" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="handwriting-text">Password</label>
                        <input type="password" placeholder="Password" autoComplete="on" onChange={(event) => setPassphrase(event.target.value)}/>
                    </div>
                    <div className="mb-3 d-flex justify-content-center align-items-center">
                        <input type="submit" hidden />
                        <button className="babble-btn btn1 mx-3" type="submit">Login</button>
                    </div>
                </form>
                    <span className="handwriting-text folder-label" onClick={() => navigate("/profile")} >Don't have an account? Create an account now</span>
                    <p><span className={errorVisible + " handwriting-text"}>Invalid username or password</span></p>
                </div>
        )
}