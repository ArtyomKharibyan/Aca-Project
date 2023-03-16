import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Form, Alert} from "react-bootstrap";
import {useUserAuth} from "../../context/UserAuthContext";
import OutlinedInput from '@mui/material/OutlinedInput';
import {Button} from "@mui/material"

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const {signUp} = useUserAuth();
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div>
                <h2 className="mb-3">Firebase Auth Signup</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="form" controlId="formBasicPassword">
                        <OutlinedInput className="form"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="signup">
                        <Button type="submit" variant="contained">Sign Up</Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default SignUp;