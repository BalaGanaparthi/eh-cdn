function loadConfig() {
  const commentWrapper = document.getElementById("okta-login-container");
  if (commentWrapper) {
    commentWrapper.remove();
  }
  const commentWrapper2 = document.getElementById("login-bg-image-id");
  if (commentWrapper) {
    commentWrapper.remove();
  }
  document.write(
    '<style>\r\n        \/* ---------------------- BASE ------------------------*\/\r\n        *,\r\n        *:before,\r\n        *:after {\r\n            margin: 0;\r\n            padding: 0;\r\n            box-sizing: border-box;\r\n        }\r\n\r\n        body {\r\n            background: #000000;\r\n        }\r\n\r\n        .container {\r\n            font-family: \'Lato\', \'Arial\', sans-serif;\r\n            font-size: 1em;\r\n            font-weight: 300;\r\n            line-height: 1.5;\r\n            text-rendering: optimizeLegibility;\r\n            display:flex;\r\n            width: 100%;\r\n            margin: auto;\r\n            position: relative;\r\n            \/* max-width: 1280px; *\/\r\n        }\r\n\r\n        \/* 768px *\/\r\n        @media (min-width: 48em) {\r\n            .container {\r\n\r\n            }\r\n        }\r\n\r\n        \/* 1024px *\/\r\n        @media (min-width: 64em) {\r\n            .container {\r\n                font-size: calc(1em * 1.2);\r\n            }\r\n        }\r\n\r\n        \/* 1366px *\/\r\n        @media (min-width: 85.375em) {\r\n            .container {\r\n                font-size: calc(1em * 1.3);\r\n            }\r\n        }\r\n\r\n        \/* 1920px *\/\r\n        @media (min-width: 120em) {\r\n            .container {\r\n                font-size: calc(1em * 1.4);\r\n            }\r\n        }\r\n\r\n        \/* 2560px *\/\r\n        @media (min-width: 160em) {\r\n            .container {\r\n                font-size: calc(1em * 1.6);\r\n            }\r\n        }\r\n\r\n        h1,\r\n        h2,\r\n        h3 {\r\n            font-weight: 300;\r\n        }\r\n\r\n        h1 {\r\n            font-size: 240%; \r\n            word-spacing: 0.3rem;\r\n            letter-spacing: 0.1rem;\r\n            margin: 0.3em 0;\r\n            line-height: 1;\r\n        }\r\n\r\n        h2 {\r\n            font-size: 100%;\r\n        }\r\n\r\n        p {\r\n            font-weight: 100;\r\n        }\r\n\r\n        \/* ---------------------- LOGIN ------------------------*\/\r\n\r\n        .container header {\r\n            position: absolute;\r\n            top: 2em;\r\n            left: 5em;\r\n        }\r\n\r\n        header h1 {\r\n            font-weight: 800;\r\n            font-size: 240%; \r\n            word-spacing: 0.2rem;\r\n            letter-spacing: 0.07rem;\r\n            margin: 0.3em 0;\r\n            color: black;\r\n        }\r\n\r\n        .content {\r\n            display: flex;\r\n            flex-direction: row;\r\n            width: 100%;\r\n        }\r\n\r\n        .information-section {\r\n            min-height: 100vh;\r\n            color: black;\r\n            flex-direction: column;\r\n            text-align: left;\r\n            width: 50%;\r\n            padding: 5em;\r\n            background-size: cover;\r\n            background-position: center;\r\n            background-attachment: fixed;\r\n        }\r\n\r\n        .information {\r\n            margin-top: 25%;\r\n        }\r\n\r\n        .information-section h1 {\r\n        color: black;\r\n        }\r\n\r\n        .information-section h2 {\r\n            font-weight: 600;\r\n        }\r\n\r\n        .information-section p {\r\n            font-weight: 200;\r\n        }\r\n\r\n        .information-section ul {\r\n            list-style: none;\r\n            padding-top: 0.5em;\r\n        }\r\n\r\n        .information-section li {\r\n            margin-bottom: 1em;\r\n        }\r\n\r\n        .login-section {\r\n            min-height: 100vh;\r\n            background: white;\r\n            width: 50%;\r\n            padding: 5em;\r\n            max-width: 600px;\r\n        }\r\n\r\n        .col {\r\n            flex: 1;\r\n        }\r\n\r\n        \/*---------------------------- OKTA SIGN IN WIDGET OVERRIDES -----------------------*\/\r\n\r\n        #okta-sign-in.auth-container.main-container {\r\n            background-color: white;\r\n            border: 0;\r\n            font-family: \'Lato\', \'Arial\', sans-serif;\r\n        }\r\n\r\n        #okta-sign-in.auth-container .okta-sign-in-header {\r\n            border: 0;\r\n        }\r\n\r\n        #okta-sign-in.auth-container input[type="submit"] {\r\n            background: #f45224;\r\n            color: black;\r\n            border: 0;\r\n        }\r\n\r\n        #okta-sign-in.auth-container .registration-link,\r\n        #okta-sign-in.auth-container .auth-footer\r\n        {\r\n            color: #f45224;\r\n        }\r\n\r\n        #okta-sign-in.auth-container .o-form-input-name-remember {\r\n            display: none;\r\n        }\r\n\r\n        \r\n\r\n        #okta-sign-in.auth-container .o-form-head {\r\n            color: #777;\r\n            font-weight: bold;\r\n        }\r\n\r\n        .login-section input::placeholder {\r\n            opacity: 0.5\r\n        }\r\n\r\n        .login-section input {\r\n            color: #777;\r\n        }\r\n\r\n        .login-section input:-webkit-autofill {\r\n            -webkit-text-fill-color: #777;\r\n            color: #777\r\n        }\r\n\r\n        .login-section #okta-sign-in .auth-org-logo {\r\n            display: none;\r\n        }\r\n\r\n        .login-section #okta-sign-in a.help:active, \r\n        .login-section #okta-sign-in a.help:link, \r\n        .login-section #okta-sign-in a.help:visited {\r\n            color: #f45224;\r\n        }\r\n\r\n        .login-section #okta-sign-in {\r\n            margin-top: 0;\r\n            min-height: 0;\r\n        }\r\n    <\/style>\r\n<main role="main" class="container" style="background-image: url(\'https:\/\/i.imgur.com\/6IQDYI1.jpg\')">\r\n           <section class="col login-section"> <div id="okta-login-container"><\/div> <\/section>\r\n        <section class="col information-section">\r\n            <div id="info-container"\/>\r\n          <h1>One account to access:<\/h1>\r\n            <ul>\r\n                <li> <h2>My Home<\/h2> <p>Check our new developments, see your new home development and contracts<\/p> <\/li>\r\n                <li> <h2>Payments<\/h2> <p>Check and setup your payments<\/p> <\/li>\r\n                <li> <h2>AtkoPoints<\/h2> <p>Access our Loyalty Program and change points for appliances and home services<\/p> <\/li>\r\n            <\/ul> \r\n        <\/section>\r\n    <\/main>',
  );
}

function initConfig(config) {
  config.i18n = {
    en: {
      "primaryauth.title": "Login",
      "oie.registration.form.title": "Register",
      "oie.registration.form.submit": "Next: Verify your email",
      "idx.return.link.otponly.enter.code.on.page.registration": "Register",
      "oie.password.challenge.title":
        "Verify with your password - Anthem Portal",
    },
    es: {
      "registration.signup.text": "*********",
    },
  };
}

function afterRender(context) {
  el_Back = document.querySelector("[data-se=back]");
  if (el_Back) {
    el_Back.onclick = function () {
      window.location.href = "http://localhost:5000/";
    };
  }

  el_Cancel = document.querySelector("[data-se=cancel]");
  if (el_Cancel) {
    el_Cancel.onclick = function () {
      window.location.href = "http://localhost:5000/";
    };
  }
}
