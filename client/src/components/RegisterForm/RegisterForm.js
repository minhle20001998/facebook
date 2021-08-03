/* eslint-disable */
import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./RegisterForm.css";
import { generateDays, generateMonths, generateYears } from '../../utils/date';
import { validateEmailOrPhone } from '../../utils/number';
import { register } from '../../utils/api/userAPI';
const RegisterForm = (props) => {

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email_or_phone, setEmailPhone] = useState('');
    const [password, setPassword] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [gender, setGender] = useState('');


    async function handleRegister(e) {
        e.preventDefault();
        const dob = new Date(`${year}-${month}-${day}`);
        const { email, phoneNumber } = validateEmailOrPhone(email_or_phone);
        const userInfo = { lastName, firstName, email, phoneNumber, password, dob, gender };
        const data = await register(userInfo);
        props.handleOpenRegisterDialog()
    }





    return (
        <Dialog open={props.open} >
            <div className="register-form"></div>
            <DialogTitle id="form-dialog-title">
                <div className="">
                    <div className="register-title">Đăng ký</div>
                    <div className="register-sub">Nhanh chóng và dễ dàng.</div>
                </div>
                <img onClick={() => props.handleOpenRegisterDialog()} className="close-btn" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png" alt="x" />
            </DialogTitle>
            <hr className="register-hr" />
            <DialogContent className="register-form-content">
                <form action="" onSubmit={(e) => { handleRegister(e) }}>
                    <div className="input-area">
                        <input onInput={(e) => { setLastName(e.target.value) }} name="lastName" type="text" placeholder="Họ" className="input-text" required="required" />
                        <input onInput={(e) => { setFirstName(e.target.value) }} name="firstName" type="text" placeholder="Tên" className="input-text" required="required" />
                    </div>
                    <div className="input-area ">
                        <input onInput={(e) => { setEmailPhone(e.target.value) }} name="email_or_phone" type="text" className="input-text max" placeholder="Số di động hoặc email" required="required" />
                    </div>
                    <div className="input-area ">
                        <input onInput={(e) => { setPassword(e.target.value) }} name="password" type="password" className="input-text max" placeholder="Mật khẩu mới" required="required" />
                    </div>
                    <div className="select-area">
                        <p>Ngày sinh</p>
                        <span className="dob-selection">
                            <select onChange={(e) => { setDay(e.target.value) }} name="day" id="date" required >
                                <option value="">Ngày</option>
                                {generateDays()}
                            </select>
                            <select onChange={(e) => { setMonth(e.target.value) }} name="month" id="date" required >
                                <option value="">Tháng</option>
                                {generateMonths()}
                            </select>
                            <select onChange={(e) => { setYear(e.target.value) }} name="year" id="date" required >
                                <option value="">Năm</option>
                                {generateYears()}
                            </select>

                        </span>
                    </div>
                    <div className="select-area">
                        <p>Giới tính</p>
                        <span className="gender-selection">
                            <span className="gender">
                                <label htmlFor="female">Nữ</label>
                                <input onChange={(e) => { setGender(e.target.value) }} type="radio" name="gender" id="female" value="female" required="required" />
                            </span>
                            <span className="gender">
                                <label htmlFor="male">Nam</label>
                                <input onChange={(e) => { setGender(e.target.value) }} type="radio" name="gender" id="male" value="male" required="required" />
                            </span>
                        </span>
                    </div>
                    <p className="term">
                        Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                    </p>
                    <DialogActions>
                        <button className="action-btn" type="submit" id="save-btn">Đăng ký</button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog >
    )
}


export default RegisterForm;