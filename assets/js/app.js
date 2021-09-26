SignIn = () => {
  var Email = document.getElementById("SIgnInEmail").value;
  var Password = document.getElementById("SignInPassword").value;
  // alert(`${Email} ${Password}`)

  firebase.auth().signInWithEmailAndPassword(Email, Password)
    .then(function (result) {
      window.location.href = './Screens/Home.Html'
    })
    .catch(function (err) {
      var errorMessage = err.message;
      alert(errorMessage)
    })
}
SignUp = () => {
  var Email = document.getElementById("SignUpEmail").value;
  var Password = document.getElementById("SignUpPassword").value;

  // alert(`${UserName} ${Email} ${Password} ${Country} ${City}`)

  firebase.auth().createUserWithEmailAndPassword(Email, Password)
    .then(function (result) {
      // console.log(result)
      setData(result.user.uid)
      window.location.href = './Screens/Home.Html';
    })
    .catch(function (err) {
      var errorMessage = err.message;
      alert(errorMessage)
    })
}

// is function s Database  me data set ho raha h
setData = (Uid) => {
  var Email = document.getElementById("SignUpEmail").value;
  var Password = document.getElementById("SignUpPassword").value;
  var UserName = document.getElementById("UserName").value;
  var Country = document.getElementById("Country").value;
  var City = document.getElementById("City").value;
  firebase.database().ref('users/' + Uid).set({
    UserName: UserName,
    Email: Email,
    Password: Password,
    Country: Country,
    City: City,
    UID: Uid
  });
}
