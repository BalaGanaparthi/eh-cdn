function load_default(context) {
  if (context.controller !== "mfa-verify-password") {
    const error1_div = document.getElementById("error1_div");
    if (error1_div) {
      error1_div.remove();
    }
    const error2_div = document.getElementById("error2_div");
    if (error2_div) {
      error2_div.remove();
    }
  } else {
    const switchAuthenticator = document.querySelector(
      "[data-se=switchAuthenticator]",
    );
    if (switchAuthenticator) {
      switchAuthenticator.style.display = "none";
    }
  }

  if (
    context.controller === null &&
    context.formName === "select-authenticator-authenticate"
  ) {
    var a_ele = document.getElementsByTagName("a");
    for (i = 0; i < a_ele.length; i++) {
      if (
        a_ele[i].innerText == "Select" &&
        a_ele[i].ariaLabel == "Select Password."
      ) {
        var emailIcon = document.querySelectorAll(
          "#okta-sign-in.auth-container .mfa-okta-email",
        );
        if (emailIcon.length == 1) {
          emailIcon[0].style.display = "none";
        }
        var h3_ele = document.getElementsByTagName("h3");
        for (j = 0; j < h3_ele.length; j++) {
          if (h3_ele[j].innerText == "Email") {
            h3_ele[j].style.display = "none";
          }
        }
        document.querySelector("[data-se=okta_email]").style.display = "none";
        a_ele[i].click();
      }
    }
  }

  if (context.controller === "primary-auth") {
    document.querySelector("[data-se=help]").style.display = "none";
  }

  if (
    context.controller === "primary-auth" &&
    context.formName === "identify" &&
    login_hint
  ) {
    var ele = document.getElementsByTagName("input");
    for (i = 0; i < ele.length; i++) {
      if (ele[i].type == "submit" && ele[i].value == "Next") {
        ele[i].click();
      }
    }
  }
}
