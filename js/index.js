// Array of users
const users=[{name:"Analin", email:"foglzerika@gmail.com",password:"1234"}];
// Constructor user
const User =class{
    constructor(name,email,password){
      this.name=name;
      this.email=email;
      this.password=password;
    }
}
// Initialize Firebase
const config = {
  apiKey: "AIzaSyAUND5wUBFDHs--tuXEUZ4YDJvni58Fafs",
  authDomain: "deepdive-1508900168963.firebaseapp.com",
  databaseURL: "https://deepdive-1508900168963.firebaseio.com",
  projectId: "deepdive-1508900168963",
  storageBucket: "deepdive-1508900168963.appspot.com",
  messagingSenderId: "237950207129"
};
firebase.initializeApp(config);
// Init obj usuarios
const objDb = {
  usuarios: []
};
const database = firebase.database();
const formulario = document.getElementById("createUser");
formulario.addEventListener("click", function(){
const nombre = document.getElementById("nameNewUser").value;
const correo = document.getElementById("emailNewUser").value;
const password = document.getElementById("passwordNewUser").value;
if(creaUsuarioNuevo){
  objDb.usuarios.push({
    name: nombre,
    email: correo,
    password: password
  });
  guardarDatos(objDb)
  creaUsuarioNuevo(nombre,correo)
}else{
  alert("invalid email");
}
});

const isValidEmail = (mail)=>{
return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
}
const creaUsuarioNuevo = (nombre,correo)=>{
// alert(`El usuario ${nombre} ha sido creado
// exitosamente con la cuenta ${correo}`);

swal({
  timer: 3000,
  title: `El usuario ${nombre} ha sido creado
  exitosamente con la cuenta ${correo}`,
  showConfirmButton: false,
  icon: "success",
  })
//setTimeout(redireccionar,4000);

}
const redireccionar = ()=>{
  window.location="views/main2.html";
}
const addNewUser = ()=>{
  const nameUser = document.getElementById('nameNewUser').value;
  const email=document.getElementById('emailNewUser').value;
  const passwordUser=document.getElementById('passwordNewUser').value;
  if(isValidEmail(email)){
    const userNew = new User( nameUser,email,passwordNewUser);
    users.push(userNew);
    //redireccionar();
  }else{
    alert("The email is invalid")
    swal({
      timer: 3000,
      title: `El usuario y/o correo es incorrecto`,
      showConfirmButton: false,
      icon: "fail",
      })
  }

}
const checkCount = ()=>{
  const userName = document.getElementById("userName").value;
  const userPassWord = document.getElementById("userPassWord").value;
  // console.log(`${userName} ${userPassWord}`);
  validCount(userName,userPassWord)
  console.log(users)


}
const validCount= (userName,userPassWord)=>{
  for(let i = 0 ; i < users.length ; i++){

    if(users[i].name == userName && users[i].password == userPassWord){
      redireccionar();
    }else{

      swal({
        timer: 2000,
        title: `El usuario y/o correo es incorrecto`,
        showConfirmButton: false,
        icon: "fail",
        })
    }
  }
}
function mostrarUsuarios(usuarios) {
const userName = document.getElementById("userName").value;
const userPassWord = document.getElementById("userPassWord").value;
usuarios.forEach(function(usuario){
  // console.log(usuario);
  });
  for(let i = 0 ; i<usuarios.length ; i++){
      if(usuarios[i].email == userName &&  usuarios[i].password==userPassWord){
        //redireccionar();
      }
  }
}
const btnLogin=document.getElementById("go")
btnLogin.addEventListener("click",checkCount);
const guardarDatos=(usuarios) =>{
// Para guardar en base de dato usar el metodo .set()
database.ref("/").set(usuarios);
}
//Leer datos: Usar el metodo .on('value')
database.ref("/usuarios").on("value", function(snapshot){
var usuarios = snapshot.val();
objDb.usuarios = usuarios;
const valida =document.getElementById("go");
valida.addEventListener("click",function(){
   mostrarUsuarios(usuarios);
})
});
