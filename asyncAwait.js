// promises
const anyName = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          error: "you must login",
        });
      }, 1000);
    });
  };
  
  anyName()
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("you just performed an operation"));
  const loginUser = (name, email) =>
    new Promise((success, fail) => {
      setTimeout(() => {
        if (name || email) {
          return success({ name, email, token: "user token" });
        }
        fail({
          message: "user cannot login ",
        });
      }, 100);
    });
  
  const getUserDetail = (token) =>
    new Promise((success, fail) => {
      setTimeout(() => {
        if (token)
          return success({
            userImage: "jhdsgbjhbdhjfbhj",
          });
        fail({
          message: "Token is required",
        });
      }, 2000);
    });
  
  loginUser("LIncoln", "lincoln.kantet@gmail.com")
    .then(({ token }) => {
      getUserDetail(token)
        .then((res) => {
          console.log(res);
          loginUser()
            .then(() => {})
            .catch();
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
  
  const consumePromises = async () => {
    try {
      const userData = await loginUser("LIncoln", "lincoln.kantet@gmail.com");
      const userImage = await getUserDetail(userData?.token);
      console.log(userImage);
    } catch (error) {
      console.log(error);
    }
  };
  //
  const nameUser = "LIncoln0";
  
  // if (nameUser === "LIncoln") {
  //   console.log("name is similar to LIncoln");
  // } else if (nameUser === "LIncoln0") {
  //   console.log("name is LIncoln0");
  // } else {
  //   console.log("name is something else");
  // }
  
  // ternery operatpr
  // nameUser === "LIncoln"
  //   ? console.log("name is similar to LIncoln")
  //   : name === "LIncoln0"
  //   ? console.log("name is LIncoln0")
  //   : console.log("name is something else");
  
  //short-circuit
  nameUser === "LIncoln0" && console.log("name is LIncoln0");
  
  // switch
  
  switch (nameUser) {
    case "LIncoln0":
      return console.log("name is LIncoln0");
    case "jksdkjdsk":
      return console.log("do something  else");
  
    default:
      console.log("name is something else");
  }
  
  // || or operator
  
  consumePromises();