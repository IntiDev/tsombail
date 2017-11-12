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
alert(`El usuario ${nombre} ha sido creado
exitosamente con la cuenta ${correo}`);
setTimeout(redireccionar,1000);
}
const redireccionar = ()=>{
window.location="../views/mail.html";
}
function mostrarUsuarios(usuarios) {
const userName = document.getElementById("userName").value;
const userPassWord = document.getElementById("userPassWord").value;
usuarios.forEach(function(usuario){
  console.log(usuario);
  });
  for(let i = 0 ; i<usuarios.length ; i++){
      if(usuarios[i].email == userName &&  usuarios[i].password==userPassWord){
        redireccionar();
      }
  }
}
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
