setTimeout(() => {
    firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
            location.replace("index.html");
        }
        else{
            console.log(user)
            document.getElementById("user").innerHTML = "Hello"+user.email
        }
    })
}, 2000);



function logout(){
    
firebase.auth().signOut()
}