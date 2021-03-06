/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.confiq';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    const handleGoogleSingIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const user = result.user;
                const { displayName, email } = user;
                const singInUser = {
                    name: displayName,
                    email,
                }
                setLoggedInUser(singInUser);
                storeIdToken();
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    // firebese JWT ID token set in session Storage
    const storeIdToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then((idToken) => {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Welcome Back, Please Login<br />to your account.</h2>
            <Button onClick={handleGoogleSingIn} variant="outlined" color="secondary" startIcon={<MailOutlineIcon />}>
                Google Log In
            </Button>
        </div>
    );
};

export default Login;