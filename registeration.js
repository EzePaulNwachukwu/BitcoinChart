window.onload = () => {
  const logincontainer = document.querySelector(".login-container");
  const registercontainer = document.querySelector(".register-container");
  const changeinterface = document.querySelector(".registerurl");
  const changeinterface2 = document.querySelector(".loginurl");
  const errorMessage = document.querySelector(".incorrect");

  // localStorage
  let accDataStore = window.localStorage;

  const formss = document.forms;

  logincontainer.style.display = "none";
  changeinterface.addEventListener("click", (e) => {
    e.preventDefault();
    logincontainer.style.display = "none";
    registercontainer.style.display = "inline";
  });
  changeinterface2.addEventListener("click", (e) => {
    e.preventDefault();
    logincontainer.style.display = "inline";
    registercontainer.style.display = "none";
  });

  const regBtn = document.querySelector(".regBtn");

  regBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const fullName = formss[1].elements["Fname"];
    const userNameR = formss[1].elements["username"];
    const REmail = formss[1].elements["email"];
    const Rpassword = formss[1].elements["password"];
    const confirmPassword = formss[1].elements["confirm-password"];
    let validator = function () {
      const regErromessage = document.querySelector(".incorrectRegMessg");
      regErromessage.style.color = "red";

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (fullName.value === " " || fullName.value.length < 6) {
        regErromessage.textContent =
          "Full name must be at least 6 characters long.";
        regErromessage.style.display = "block";
        return false;
      } else if (userNameR.value === "" || userNameR.value.length < 3) {
        regErromessage.textContent =
          "user name must be at least 6 characters long.";
        regErromessage.style.display = "block";
        return false;
      } else if (!emailPattern.test(REmail.value)) {
        regErromessage.textContent = "Please enter a valid email address.";
        regErromessage.style.display = "block";
        return false;
      } else if (Rpassword.value == " " || Rpassword.value.length < 4) {
        regErromessage.textContent = "must be at least 4 characters long.";
        regErromessage.style.display = "block";
        return false;
      } else if (confirmPassword.value != Rpassword.value) {
        regErromessage.textContent = "password does not match .";
        regErromessage.style.display = "block";
        return false;
      } else {
        regErromessage.textContent = "Registration sucessfull .";
        regErromessage.style.display = "block";
        regErromessage.style.color = "Green";
        return true;
      }
    };

    if (validator() == true) {
      let newprofile = [
        {
          FullName: fullName.value,
          userName: userNameR.value,
          Email: REmail.value,
          password: Rpassword.value,
        },
      ];
      let chechIf = accDataStore.getItem("Accounts");
      if (chechIf == null) {
        let newprofileinfo = JSON.stringify(newprofile);
        //   accDataStore.removeItem("unknown");

        accDataStore.setItem("Accounts", newprofileinfo);
      } else {
        let datafromsrtore = JSON.parse(chechIf);
        //   console.log(get)
        let newdata = [...datafromsrtore, ...newprofile];
        let sting = JSON.stringify(newdata);
        accDataStore.setItem("Accounts", sting);

        //   console.log(newdata);
      }

      logincontainer.style.display = "inline";
      registercontainer.style.display = "none";
    }
  });

  const loginBtn = document.querySelector(".loginBtn");

  const userNameinputorEmail = formss[0].elements["usernameLogin"];
  const inputLoginPassword = formss[0].elements["passwordLogin"];
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let allAcount = accDataStore.getItem("Accounts");
    let allworkingacc = JSON.parse(allAcount);

    console.log(allAcount);

    allworkingacc.forEach((profile) => {
      if (
        (userNameinputorEmail.value == profile.userName ||
          userNameinputorEmail.value == profile.Email) &&
        inputLoginPassword.value == profile.password
      ) {
        location.assign("http://127.0.0.1:5502/bitcoinChart.html");
      } else {
        errorMessage.style.display = "block";
      }
    });
  });
};
