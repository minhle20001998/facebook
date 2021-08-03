/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { login } from '../../utils/api/userAPI';
import { validateEmailOrPhone } from '../../utils/number';
import { useUserUpdate } from '../../context/UserContext';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import jwt_decode from "jwt-decode";
import './Login.css'


function Login(props) {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("")
    const [dialogOpen, setDialogOpen] = useState(false);
    const [message, setMessage] = useState("");
    const setUser = useUserUpdate();


    async function handleLogin(e) {
        e.preventDefault();
        const { email, phoneNumber } = validateEmailOrPhone(username);
        let result;
        if (email) {
            result = await login({ email, password });
        } else if (phoneNumber) {
            result = await login({ phoneNumber, password });
        }
        switch (result) {
            case "wrong email or phone number":
                handleAlert("Email hoặc số di động bạn nhập không kết nối với tài khoản nào")
                break;
            case "wrong password":
                handleAlert("Mật khẩu bạn đã nhập không chính xác")
                break;
            default:
                handleSaveToken(result.token, result.refreshToken)
                const decoded = jwt_decode(result.token)
                setUser(decoded)
                break;
        }
    }

    function handleSaveToken(token, refreshToken) {
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        history.push('/')
    }

    function handleAlert(message) {
        setAlert(true)
        setMessage(message)
        setTimeout(() => {
            setAlert(false)
            setMessage(message)
        }, 5000)

    }

    function handleOpenRegisterDialog() {
        setDialogOpen(!dialogOpen)
    }


    return (<>
        {dialogOpen && <RegisterForm
            open={dialogOpen}
            handleOpenRegisterDialog={handleOpenRegisterDialog}
        />}
        <div className="login-page">
            {alert && <div className="alert">
                <p>{message}</p>
            </div>}
            <div className="logo">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook" />
                <h2>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h2>
            </div>
            <div className="login-form">
                <form onSubmit={handleLogin}>
                    <input onInput={(e) => { setUsername(e.target.value) }} name="username" type="text" placeholder="Email hoặc số điện thoại" required />
                    <input onInput={(e) => { setPassword(e.target.value) }} name="password" type="password" placeholder="Mật khẩu" required />
                    <button type="submit">Đăng nhập</button>
                    <Link to="/login/identify">Quên mật khẩu?</Link>
                    <div className="break"></div>
                    <button onClick={() => { handleOpenRegisterDialog() }} className="register-btn">Tạo tài khoản mới</button>
                </form>
                <p> <b>Tạo trang</b> dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.</p>
            </div>
        </div>
        <footer>
            <div className="cover">
                <div className="lang">
                    <ul>
                        <li>Tiếng Việt</li>
                        <li>English (UK)</li>
                        <li>Français (France)</li>
                        <li>Español</li>
                        <li>Português (Brasil)</li>
                        <li>Italiano</li>
                    </ul>
                </div>
                <hr />
                <div className="nav">
                    <ul>
                        <li>Đăng ký</li>
                        <li>Đăng nhập</li>
                    </ul>
                </div>
                <div className="copyright">
                    <ul><li> Facebook © 2021</li></ul>
                </div>
            </div>
        </footer>
    </>
    )
}

export default Login;