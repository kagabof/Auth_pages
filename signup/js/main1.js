document.addEventListener("DOMContentLoaded", () => {
   /**
    * This happen when the page load at the first time
    */

    studentBtn = document.getElementById("register-form-teacher");
    studentBtn.style.display = "none";
    let current = "student";
    document.getElementById("student-button").style.opacity = 0.7;

    /**
     * This function run when a user click on 'As a teacher button'
     */
    document.getElementById("teacher-button").onclick = () => {
        if (current === "student") {
            console.log('.....in')
            document.getElementById("register-form-student").style.display = "none";
            document.getElementById("register-form-teacher").style.display = "block";
            document.getElementById("student-button").style.opacity = 1;
            document.getElementById("teacher-button").style.opacity = 0.7;
            current ="teacher"
            return;
        }
        return;
    };

    /**
     * This function run when a user click on 'As a student button'
     */
    document.getElementById("student-button").onclick = () => {
        if (current === "teacher") {
            document.getElementById("register-form-teacher").style.display = "none";
            document.getElementById("register-form-student").style.display = "block";
            document.getElementById("teacher-button").style.opacity = 0.7;
            document.getElementById("student-button").style.opacity = 1;
            current = "student"
            return;
        }
        return;
    };
});
