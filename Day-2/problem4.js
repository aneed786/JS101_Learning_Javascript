//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

//Data base details of account
let dataBase_user = "Aneed58";
let dataBase_pass = "78657865";


// login to website details
let user_name = "Naveed52";
let user_pass = "78657865";

if (dataBase_user ==user_name) {
  if (dataBase_pass == user_pass) {
    console.log("Login Successfull");
   }
  else{
    console.log("your password is not matching")
  }
}
else{
  console.log("your username name is wrong")
}
