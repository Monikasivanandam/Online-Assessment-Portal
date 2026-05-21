import { useState } from "react";

import { Link,useNavigate } from "react-router-dom";

import API from "./api";

import "../../styles/common.css";

function Login() {

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const navigate = useNavigate();

    const login = async () => {

        try {

            const res = await API.post(
                "/auth/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "user",
                JSON.stringify(res.data)
            );

            alert("Login Successful");

            navigate("/exams");

            if (res.data.role === "admin") {

    navigate("/admin");

} else {

    navigate("/exams");
}

        } catch (err) {

            console.log(err);

            alert(
                err.response?.data ||
                "Login Failed"
            );
        }
    };

    return (

        <div className="page-container">

            <div className="glass-card">

                <h1>Login</h1>

                <input
                    type="email"
                    placeholder="Enter Email"
                    className="input-box"
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-box"
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <button
                    className="btn"
                    onClick={login}
                >
                    Login
                </button>
<Link to="/">

                <p
                    style={{
                        marginTop: "20px",
                        cursor: "pointer",
                        textAlign:"center"
                    }}

                   
                >
                    Create New Account
                </p>
</Link>
            </div>

        </div>
    );
}

export default Login;