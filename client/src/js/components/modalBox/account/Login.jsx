import React, { useState } from "react";

import { LoginForm } from "./LoginForm.jsx";
import { SignUpForm } from "./SignUpForm.jsx";

import * as constants from "../../../constants";

export const Login = props => {
    const [page, setPage] = useState("login"); // Either "login" or "signUp"

    /**
     * Logs a user in
     * 
     * @param {string} username 
     * @param {string} password 
     * 
     * @returns a promise that resolves if successful and rejects if authentication fails
     */
    const logIn = async (username, password) => {
        const response = await fetch(`${constants.serverOrigin}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-cache",
            body: JSON.stringify({ username, password })
        });

        if (response.status !== 200)
            throw new Error("Auth failed");

        props.afterLogin(await response.json());
        return true;
    };

    if (page === "login") {
        return (
            <div className="modal login" onClick={event => event.stopPropagation()}>
                <div className="modal-header">
                    <h2>Login</h2>
                    <i className="material-icons button-close" onClick={props.handleClose}>close</i>
                </div>
                <div className="modal-body">
                    <LoginForm
                        handleSubmit={(username, password) => logIn(username, password)}
                        handleSignUpCta={() => setPage("signUp")}
                    />
                </div>
            </div>
        );
    } else if (page === "signUp") {
        return (
            <div className="modal sign-up" onClick={event => event.stopPropagation()}>
                <div className="modal-header">
                    <h2>Sign Up</h2>
                    <i className="material-icons button-close" onClick={props.handleClose}>close</i>
                </div>
                <div className="modal-body">
                    <SignUpForm
                        afterSignUp={(username, password) => logIn(username, password)}
                        handleLoginCta={() => setPage("login")}
                    />
                </div>
            </div>
        );
    }
};