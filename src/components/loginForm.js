import React, { useState } from "react";

const LoginForm = ({ LoginUser, error }) => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    LoginUser(details);
  };

  // const submitForm = async (event) => {
  //     await fetch('/users', {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //             userName: userName,
  //             email: email,
  //             lastName: lastName,
  //             firstName: firstName,
  //             password: password
  //         }),
  //     })
  //     .then((response) => response.json())
  //     .then((data) => {
  //         console.log('Success:', data);
  //         dispatch(logIn(data));

  //     })
  // }

  return (
    <div id="login-box">
      <form id="add-user" onSubmit={submitForm}>
        <h1>Login</h1>
        {error !== "" ? <div style={{ color: "red" }}>{error}</div> : ""}
        <div className="login-lables">
          <label htmlFor="userName">First Name: </label>
          <br></br>
        </div>
        <input
          onChange={(e) =>
            setDetails({ ...details, firstName: e.target.value })
          }
          value={details.firstName}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="John"
          required
        />
        <br></br>
        <div className="login-lables">
          <label htmlFor="name">Last Name:</label>
          <br></br>
        </div>
        <input
          onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
          value={details.lastName}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Doe"
          required
        />
        <br></br>
        <div className="login-lables">
          <label className="login-labels" htmlFor="email">
            Email Address:
          </label>
          <br></br>
        </div>
        <input
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          type="email"
          id="email"
          name="email"
          placeholder="john.doe@gmail.com"
          required
        />
        <br></br>
        <div className="login-label">
          <label className="login-labels" htmlFor="password">
            Password:
          </label>
          <br></br>
        </div>

        <div className="login-labels" />
        <input
          type="password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
          id="password"
          name="password"
          placeholder="123abc!..."
          required
        />
        <br></br>
        <button
          type="submit"
          style={{ margin: "10px" }}
          id="add-userBtn"
          value="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;