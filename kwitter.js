function login(){
    username = document.getElementById("userput").value
    localStorage.setItem("username", username)

    window.location="Kwitter_room.html"
}