document.addEventListener("DOMContentLoaded", () => {
    console.log('......hello')
    document.getElementById("signin-1").style.display = "none";
    let current = "signup";
    document.getElementById("signup-1-link").onclick = () => {
        if (current === "signup") {
            console.log('.....in')
            document.getElementById("signup-1").style.display = "none";
            document.getElementById("signin-1").style.display = "block";
            current ="signin"
            return;
        }
        return;
    };

    document.getElementById("signin-1-link").onclick = () => {
        if (current === "signin") {
            document.getElementById("signin-1").style.display = "none";
            document.getElementById("signup-1").style.display = "block";
            current = "signup"
            return;
        }
        return;
    };
});