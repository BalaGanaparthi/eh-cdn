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
    '<style nonce="{{nonceValue}}">\r\n      body,\r\n      body * {\r\n        margin: 0;\r\n        padding: 0;\r\n        box-sizing: border-box;\r\n        font-family: Arial, Helvetica, sans-serif !important;\r\n        font-size: 16px;\r\n        color: #363436;\r\n      }\r\n\r\n      .container {\r\n            width: 100%;\r\n        }\r\n\r\n      @media only screen and (max-width: 600px) {\r\n            .header {\r\n                padding: 16px 0;\r\n                text-align: center;\r\n            }\r\n            .login-container {\r\n                margin: 16px;\r\n                padding: 32px 16px;\r\n            }\r\n            h1 {\r\n                padding-left: 16px;\r\n            }\r\n            .password-actions {\r\n                display: flex;\r\n                flex-direction: column;\r\n            }\r\n            .password-actions a {\r\n                margin-top: 16px;\r\n            }\r\n            .password-actions .divider {\r\n                display: none;\r\n            }\r\n            .button-submit {\r\n                width: 160px;\r\n                margin: 13px 0 0;\r\n            }\r\n        }\r\n\r\n      .header {\r\n        height: 76px;\r\n        padding: 16px 0 14px 140px;\r\n        background-color: #363436;\r\n        width: 100%;\r\n      }\r\n\r\n      .header .logo {\r\n        color: #ffffff;\r\n        font-size: 32px;\r\n        font-weight: bold;\r\n      }\r\n\r\n      .login-wrapper {\r\n            margin: 5% auto 20px auto;\r\n            max-width: 688px;\r\n        }\r\n\r\n      h1 {\r\n        font-family: Georgia, "Times New Roman", Times, serif !important;\r\n        font-size: 46px !important;\r\n        font-weight: normal;\r\n        color: #363436 !important;\r\n      }\r\n\r\n      .login-container {\r\n        background-color: #eaeaea;\r\n      }\r\n\r\n      #okta-sign-in.auth-container .okta-sign-in-header {\r\n        background-color: #eaeaea;\r\n        border-bottom-color: #eaeaea;\r\n      }\r\n\r\n      #okta-sign-in.auth-container.main-container {\r\n        background-color: #eaeaea;\r\n        border-color: #ffffff !important;\r\n      }\r\n\r\n      #login-bg-image-id {\r\n        background-color: #fff !important;\r\n      }\r\n\r\n      #okta-sign-in.auth-container input[type="submit"] {\r\n        border-radius: 28px;\r\n        background-color: #008275;\r\n        color: #ffffff;\r\n        text-transform: uppercase;\r\n        border: 0;\r\n        cursor: pointer;\r\n      }\r\n\r\n      #okta-sign-in.auth-container input[type="text"] {\r\n        height: 40px;\r\n        border: none;\r\n        font-weight: bold;\r\n      }\r\n\r\n      #okta-sign-in .social-auth-button.link-button {\r\n        margin-top: 0px;\r\n      }\r\n\r\n      #okta-sign-in .o-form label {\r\n        font-size: 16px;\r\n      }\r\n\r\n      #okta-sign-in.auth-container .okta-form-label {\r\n        font-weight: 100 !important;\r\n        font-family: Arial, Helvetica, sans-serif !important;\r\n      }\r\n\r\n      #okta-sign-in .auth-org-logo {\r\n        display: none;\r\n      }\r\n\r\n      #okta-sign-in.no-beacon .auth-header {\r\n        padding-bottom: 10px;\r\n      }\r\n\r\n      #okta-sign-in .auth-header {\r\n        border-bottom: 1px solid #eaeaea;\r\n      }\r\n\r\n      #okta-sign-in .o-form .input-fix,\r\n      #okta-sign-in .o-form .textarea-fix {\r\n        border: none !important;\r\n      }\r\n\r\n      .okta-idps-container,\r\n      .okta-idps-container * {\r\n        margin: 0 !important;\r\n        padding: 0 !important;\r\n        position: relative !important;\r\n        box-sizing: border-box !important;\r\n      }\r\n\r\n      .okta-idps-container {\r\n        position: relative !important;\r\n        background-color: #E6E6E6 !important;\r\n        border-radius: 4px !important;\r\n      }\r\n\r\n      .okta-idps-container select {\r\n        max-width: 100% !important;\r\n        width: 100% !important;\r\n        padding: 12px 24px 8px 10px !important;\r\n        border: none !important;\r\n        background-color: #fff !important;\r\n        -webkit-appearance: none !important;\r\n        -moz-appearance: none !important;\r\n        appearance: none !important;\r\n      }\r\n\r\n      .okta-idps-container:after {\r\n        content: "" !important;\r\n        position: absolute !important;\r\n        top: 47% !important;\r\n        right: 8px !important;\r\n        width: 0 !important;\r\n        height: 0 !important;\r\n        margin-top: -2px !important;\r\n        border-top: 8px solid #868686 !important;\r\n        border-right: 7px solid transparent !important;\r\n        border-left: 7px solid transparent !important;\r\n        pointer-events: none !important;\r\n      }\r\n    <\/style>\r\n    <div id="login-bg-image-id" class="login-bg-image tb--background"><\/div>\r\n    <div class="container">\r\n      <div class="header" id="MedImpactHeader">\r\n        <img id="MedImpactLogo" style="display: none;" src="data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAAAuCAYAAAA\/ZmtKAAAABHNCSVQICAgIfAhkiAAACllJREFUeJztnHmQVcUVh78DImJccEFxJRg3JBBZBDdEJIUmUsaYkERDrHKLMVtVXLJq3CplLMtEFLE0mE2DQU0YwSCWiUvEOCAKGqkkiIARBCLbBFkk4i9\/9L1Dc1\/3ffcxDO\/N8L6qV\/Nud5\/u03fO6+5zuu+FOnV2EFZtBXY0kjoCZ+L6Ps3MNldZpTrtEUkjJL2jLSyVdGa19dpZ2KlGNknzgY9lkhea2RHbuZ1OQF+gH9ABeAt4xcze3Z7t1KlRJA1SnFO2Q\/1dJZ0vaaKkZyRdK6nf9tC9vbBLtRXYgXTIyeu0LRVK6g5cBHwa6AncAXyzPoLVQdLCwKj2zjbU00\/SY5I2S1og6QpJnVtD5zptFElnS1rpGdpqSZ+pQH64pKcS2QWSLpG0M80OdSpBUhdJn5V0nqSPFJQZKmlWYmRNki6vG1md7YqkIyRN9kbCByR1q7ZebRWTdENO\/kIz+00sU9LZwAmR7JlmNrVF2lWIpEOBIzPJi81svqQTgeMiogvM7Fmvnl2AK4GbgM7AYuBCM3umFdTeecgJB0jSOkm75sjOzJEduyP7kehzZUCPMUneiTm6nu7VMUjSXC\/vHhWcbndWJB0u6aeSxkr6taRHJU2TtNVAVG7dsTswDHgy0MD+wMDtp3L1kXQNcCsu2L0ON5r9sbpatQn6AN8LpN\/hX+TFnlJi3tpI2t8OxAm4Ps0HBtQNrTAHFClUxNjOjaSfXVyXNsXfcIb2r2or0oY4sEihIu77QZIGmNnLaUKyjmuxsclF4HsAS8xscYWyHYGPA12BWWa2rqX6AL8HJpvZB5E29wQGJJdrzGxOoMwuuGnlfzgHqyK9JFkiv9bMFlYodzjufqaDiIC3Ez1UQV0DgT2Sy2A\/M+xXtOIi3JSROauATNBBkPRRSWMkLcmUXyfpBUmxkTSV7yXpaUkbPdnlki6SdFVAj8IOgtx+5rOBz+Ck7tUZuRmSTk5k+0h6TtKmTJkJcuvbVP+bA\/U\/JWlXSfdJWuvJNkn6raS9c+5HN0k3qfR++rybtBvd5ZC0m6RvSXojIP+PJK+zV767p3+s7de8MgcWNbZXM4rdWUCmxNgkXafSf0aI++R+qVn5fpLey5FbG0irxNgmRPLfzJFdr\/L9mu71YVIgf5Okh3LkX1PAI5YLTq\/PkcsyW9I+gXqOUdjIssyR1COR6VlBu5LUI7ZmeyNz3VfSwd71yEz+m5F6\/A6NwcWtimx6XwZcl5HvDDQAeWGIPXLyWkLeEaQulO\/XKZKy98ynE\/ClnPw+wM\/9BLlttj8k7RfleGB8pp5ewAuUxidDfAJolLRvBW02EzO2UDD284lyx+FOOKT8F3gxrxFJo4BvZ5JXAz8EzsGFGzZk8q+X5J89+ypuTZJlCTAb+DBPhxpgeAvlL5V0JDSvV8cRjga8DTwHxByc8+TWnmk9j1J0zeXoDtxYQflmYsb2p0BaGgI5J5M+BbcQDSI3\/I\/LJG8GhpjZLWY2xcy+D\/wgoNvXvevRgeqbgMFm1h9o8Zm0MjQCeUeHVgPPE78XvcrUvwrndGXvVYoBFyffTwMODpR5GehtZqcn7WVnqJQ0Pvplwrsqm4CTgEG4g59ZRuP6e2PyWRVp53demTUxb3Q5brTwD\/8NlbQX7uyWTwPxWBzAJ4H9M2mzzWxuJm0ymSAg7lmBqyTtjut4lvFmtgTAzBolzQV65+iyrcwys5MkfQ43EoS4wswmSnqcsKe+e5k2xpnZVElP4PqdPVEMW7YGnwW64eJb\/qcJuEDSQUm5mOGnDkfMGWsws0YASb+kdCTrChxoZjckZS4AQlPrg2Y2Lb3IC31MYWtj64iz6JO9tE24UTDPgzwtkDZQUhFXvHdiaDEDyrrky3LKtoQlmb8hZnk6bAtrAMxMkv5K2NiOTcsAKyStxBndabgZ57CCbaXrvND\/BsB3CJ\/GrfWWJ59l3veKiBlbR5yx\/TiTfnOSl\/KkmW1QwHP0CK2zKuEA3A0NUXGHW5FgbG4biU3XzZ6kpC64WWXEtjSQyMfWamvTL2Y2HZgeKVcRsTWbmdksYEUmPTtUTinQRrnpoxxdcScvQrS37bKUjZF0fzZ4hLihCfg38bUUQPSABa30uECs0tQIG4BLc+SfyJQPEfqVPgfkHW3ymY\/3i87QNXPdXowv1t9VAJI+RXwH51HgajN7S9JjlDp0AJhZk6RNhI2uOYSUxOUuwk2f6RS6zMxWFumITzljm0Lc2OYW3GJ6NZC2r39+LEXSxcBeuGE8\/QhncCGOBx72rls6ZVcTf\/Q+NlIm9S5jDtk84ItmloaB9izT5kzg1ED60d73IcDt2QKSBpvZzDL1b2Vf5Tbip+GcgBD+FJpXzyRKvaI+ya+zGbnH3n6BC16OByYCDwGbzext3LSQ5cI0wChpNMUCk7XKcEkd5M6ADYuUmZH8PTSSvzE1tCRYGzIkn5KjYwkjJR0iqQNwbSB\/A\/B37zq2\/\/sVuec+xko6KWYkHQDMbBPwVKRMKBZXgpktAh4LZDVIul7SSLm916mUGu2tZpauXyYE6jgEmCu3nfZAEX1qmDOARbgAeWjGEXB\/8n1NpI6+khol3YM7vVJut+ZuSoPp4JYn\/8TNKKGT2HebmS8Xm3m+ADwOfAPYP+ogeN9DTsBK3BZHSrkR8jt4Hk7Crrh12xTc1lT3TP4i4C7v+k5gfaDu7rinz9sDh7G1t+9zn5ktSL4\/n1PHYOBrlK5nfboAmNlqwocewa3begbSZ1I62r2U01YzMSPxOxwytobMkZXchXkyup2D29oqwmJgmJm959WxFLi8jFzZPdoa5v2cvNeBa7zr+4HXytS3GfhzJK9598HM7gJuK6IgbhofYWZZXccCS8sJ506jiTLvAK9k8idnrst6gYlDMJD8cMlG3HrtlMRAs3U8CFwIvJfNw51FO7+cHjXMT3BTjo9wa9chZubHvj4AziJ+L9cAo4B7I\/lD\/Qsz+25S3yTC0+oy3Ah4qpk1ZTPNbD3ucEYDOVuXJu9hD485Zta8LpB0DHCQl9\/oraWQ1JvSwOsSMwvuzSXudC\/gKNyvbEXSocYiry5IApL9cAcZ98O9tGVysg+bXWP4T1dF1zBm9nyyqA6dOl1hZq8n23X9I1W8aGbvB+5VyhozmyNpEuEdl6vN7HZJZ+GmwsXA0+UOUModdDyDLfHMpcAE3zgrQdJuOA\/0aNz\/dB7wcOxAaUC+K25QGYCbrpuAv5hZuZG4NpF0rtzrr\/aU1DFxMsZJuqzaupVD4fNsknRVtXVrbdrcU92S+uPOcYWWADVvbDszRR54qRmSafIRwnrPA361YzWqUwltytiAnxE\/NXtj\/ZWltU2b2UuUex3ptEj2AuAob5umZok4UwDzK33CrE4rIGkfSf+JLKwl6UfV1rFOO0HSvTmGJklteQO+Tq0gqa+kDyNGtkjSJdXWsU47QdJLASObIWmU3KmEOnVajtzbt1M+lHsx35Bq61WnnSFpb0kr5F6zMF7JM5N12i41G\/qQdBvu4OYd9Ve912lV5Dbb67Qj\/g9vzqyXEfze3gAAAABJRU5ErkJggg==" alt="Medimpact" \/>\r\n      <\/div>\r\n      <div class="login-wrapper">\r\n        <div id="okta-login-container"><\/div>\r\n      <\/div>\r\n    <\/div>',
  );
}

function initConfig(config) {
  config.i18n = {
    en: {
      "oie.registration.form.title": "Register",
      "oie.registration.form.submit": "Next: Verify your email",
      "idx.return.link.otponly.enter.code.on.page.registration": "Register",
      "oie.password.challenge.title": "Verify with your password - CRX Portal",
    },
    es: {
      "registration.signup.text": "*********",
    },
  };
}

function afterError(context, error) {
  if (
    context.controller === "mfa-verify-password" &&
    context.formName === "challenge-authenticator" &&
    context.authenticatorKey === "okta_password" &&
    context.methodType === "password"
  ) {
    if (error.errorSummary === "Unable to sign in") {
      if (appLabel === "CarelonRX Portal") {
        injectCustomErrorContent();
        injectInfoContent();
      }
    }
  }
}

function afterRender(context) {
  if (context.controller === "primary-auth") {
    document.cookie = "luf_reset=false; path=/";
  }
  if (
    context.controller === "mfa-verify" ||
    (context.authenticatorKey != null &&
      context.controller != "mfa-verify-password") ||
    (context.controller === null &&
      context.formName === "select-authenticator-authenticate")
  ) {
    if (context.methodType != "push") {
      luf_reset = getCookie("luf_reset");
      console.log(luf_reset);
      if (luf_reset === "false" || luf_reset === null) {
        document.cookie = "luf_reset=true; path=/";
        el_switchAuthenticator = document.querySelector(
          "[data-se=switchAuthenticator]",
        );
        if (el_switchAuthenticator) {
          el_switchAuthenticator.click();
        }
      }
    }
  }

  el_forgot_pswd = document.querySelector("[data-se=forgot-password]");
  if (el_forgot_pswd && context.controller === "mfa-verify-password") {
    document.querySelector("[data-se=forgot-password]").style.display = "none";
  }

  el_Back = document.querySelector("[data-se=back]");
  if (el_Back) {
    el_Back.onclick = function () {
      window.location.href = "http://localhost:3000/";
    };
  }

  el_Cancel = document.querySelector("[data-se=cancel]");
  if (el_Cancel) {
    el_Cancel.onclick = function () {
      window.location.href = "http://localhost:3000/";
    };
  }

  el_header = document.querySelector(
    "#okta-sign-in.auth-container .okta-sign-in-header",
  );
  if (el_header) {
    el_header.style.setProperty("background-color", "#eaeaea");
  }

  el_main_container = document.querySelector(
    "#okta-sign-in.auth-container.main-container",
  );
  if (el_main_container) {
    el_main_container.style.setProperty("background-color", "#eaeaea");
  }
}

const customHtmlContent = `
                <div style="background-color : #fdf0e6;margin-top: 10px; padding: 10px; border-top: 1px solid #ccc; font-size: 0.9rem; color: #444;">
                    <p><span><p><div class="errorlist"><p tabindex="0" class="errorlist"><strong>Sorry, we can't complete your login. Here are a few reasons why:</strong></p><ul class="errorlist"><li tabindex="0" align="left"> If youâ€™re an Anthem or Wellpoint member, your pharmacy benefits arenâ€™t available on the CarelonRx website. Please log in to your health plan's website to view them.</li><li tabindex="0" align="left"> Incorrect Username and Password. Please try again or <a class="highlightBlue" href="forgot-username">reset your Username or Password.</a> Note that your account will be locked after more than six incorrect attempts.</li><li tabindex="0" align="left"> You're not signed up to use our site. <a class="highlightBlue" href="register">Register Now.</a></li><li tabindex="0" align="left"> Online access isn't enabled for your plan.</li></ul><div><strong tabindex="0">If none of these reasons apply to you, our website could be experiencing technical difficulties. Please try again later.</strong><div tabindex="0">If you continue to have trouble logging in and believe it's because of a technical issue, please contact our Technical support team at <a class="highlightBlue line" href="tel:1-844-430-0335" data-analytics="loginTechSupportPhoneNumber">1-844-430-0335</a> (TTY/TD 711), Monday - Friday, 8 a.m. to 8 p.m. ET.</div></div></div></p><!----><!----></span><!----></p>
                </div>
                `;

const customInfoContent = `
                <div class="login-right-pane"><div class="border-thick-line"></div><p tabindex="0" class="anthem_redirection_register_title"> Are You a Member of One of These Health Plans?</p><div tabindex="0" class="redirection_subheading"> To access your pharmacy benefits, please visit your health planâ€™s website to log in. Once there, bookmark your planâ€™s site for future pharmacy needs.</div><div class="brand_section"><div class="redirection_logo"><img src="https://www.carelonrx.com/assets/images/ABCBS.png" class="logo_ABC"></div><div class="redirection-anthem-section"><p tabindex="0" class="redirection_anthem_text">If you have an <strong>Anthem Blue Cross</strong> and <strong> Blue Shield </strong> plan, please visit their website to log in.</p><a data-analytics="memberAnthemBCBSContinueButton" href="https://www.anthem.com/account-login/"><button class="anthem_redirection_button">CONTINUE</button></a></div></div><div class="brand_section"><div class="redirection_logo"><img src="https://www.carelonrx.com/assets/images/ABC.png" class="logo_ABC"></div><div class="redirection-anthem-section"><p tabindex="0" class="redirection_anthem_text">If you have an <strong>Anthem Blue Cross</strong> plan, please visit their website to log in.</p><a data-analytics="memberAnthemBCContinueButton" href="https://www.anthem.com/ca/account-login/"><button class="anthem_redirection_button">CONTINUE</button></a></div></div><div class="brand_section"><div class="redirection_logo"><img src="https://www.carelonrx.com/assets/images/Logo_Wellpoint_RGB_100pct.png" class="logo_ABC"></div><div class="redirection-anthem-section"><p tabindex="0" class="redirection_anthem_text">If you have a <strong>Wellpoint</strong> plan, please visit their website to register to log in</p><a data-analytics="memberAnthemBCContinueButton" href="https://member.wellpoint.com/public/login"><button class="anthem_redirection_button">CONTINUE</button></a></div></div></div>
                `;

function injectCustomErrorContent() {
  const widget_div = document.getElementById("okta-login-container");
  const error1_div = document.getElementById("error1_div");
  if (!error1_div) {
    const customDiv = document.createElement("div");
    customDiv.id = "error1_div";
    customDiv.innerHTML = customHtmlContent;
    widget_div.appendChild(customDiv);
  }
}

function injectInfoContent() {
  const info_div = document.getElementById("info-container");
  const error2_div = document.getElementById("error2_div");
  if (!error2_div) {
    const customDiv = document.createElement("div");
    customDiv.id = "error2_div";
    customDiv.innerHTML = customInfoContent;
    info_div.appendChild(customDiv);
  }
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    // Trim leading spaces from the cookie string
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    // If the cookie string starts with the name we're looking for, return its value
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null; // Return null if the cookie is not found
}
