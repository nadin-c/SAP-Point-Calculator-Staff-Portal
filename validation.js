function validateAndRedirect() {
    var facultyId = document.getElementById("facultyId").value;
    var password = document.getElementById("password").value;

    // Faculty ID pattern check
    var facultyIdPattern = /^kec_\d{4}$/;
    if (!facultyIdPattern.test(facultyId)) {
        alert("Faculty ID should be in the format 'kec_1111'");
        return;
    }

    // Password check
    if (password === "") {
        alert("Password cannot be empty");
        return;
    }

    // Redirect to submission.html upon successful validation
    window.location.href = "submission.html";
}