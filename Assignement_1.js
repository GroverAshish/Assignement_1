function display() {
    var firstname = document.completeform['firstname'];
    var lastname = document.completeform['lastname'];
    var email = document.completeform['email'];
    var address = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    var num = document.completeform['mobilenum'];
    var pass = document.completeform['password'];
    var confirm = document.completeform['confirmpassword'];
    var mobnum = /^[6-9]\d{9}$/;
    var psw = /^[A-Za-z]\w{7,14}$/;
    if (firstname.value === "") {
        alert("Please enter your first name.");
        firstname.focus();
        return false;
    }

    if (lastname.value === "") {
        alert("Please enter your last name.");
        address.focus();
        return false;
    }

    if (num.value === "") {
        alert(
            "Please enter your telephone number.");
        num.focus();
        return false;
    }

    if(!num.value.match(mobnum)){
        alert(
            "Please enter valid Phone number.");
        num.value="";
        num.focus();
        return false;
    }


    if (email.value === "") {
        alert(
            "Please enter your e-mail address.");
        email.focus();
        return false;
    }

    if(email.value.match(address)){
        alert(
            "Please Enter Valid email address.");
        email.value="";
        email.focus();
        return false;
    }
    
    
    if (pass.value === "") {
        alert(
            "Please enter your Password.");
        pass.focus();
        return false;
    }

    if(!pass.value.match(psw))
    {
        alert(
            "Please choose valid password!");
            pass.focus();
            return false;
    }
    
    if (confirm.value === "") {
        alert(
            "Please confirm password.");
        confirm.focus();
        return false;
    }

    if(pass.value!==confirm.value)
    {
        alert(
            "Pasword must be same.")
        confirm.focus();
        return false;
    }


    var div = document.getElementById("showcontent");
    div.innerHTML = `
    <table>
  <tr>
    <th>First Name</th>
    <br>
    <th>Last Name</th>
    <th>Mobile No</th>
    <th>Email</th>
    <th>Password</th>
  </tr>
  <tr>
    <td>${firstname.value}</td>
    <td>${lastname.value}</td>
    <td>${num.value}</td>
    <td>${email.value}</td>
    <td>${pass.value}</td>
  </tr>
</table>
          `
    return false;
}