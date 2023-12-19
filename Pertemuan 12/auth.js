function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

   
    if (username === "aldinokhalifah" && password === "siswa-nf23") {
        window.location.href = "success.html";
        
    } else {
        alert("Username dan password yang Anda masukkan tidak valid");
    }
}
