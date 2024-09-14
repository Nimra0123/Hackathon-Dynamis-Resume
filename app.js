// Ensure you have TypeScript configured in your project and that your build process transpiles this file.
function generateResume() {
    // Get the form and resume container elements
    var form = document.getElementById('resumeForm');
    var resumeContainer = document.getElementById('resumeContainer');
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var linkedin = document.getElementById('linkedin').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var work = document.getElementById('work').value;
    // Generate resume HTML
    var resumeHTML = "\n        <div class=\"resume-header\">\n            <h2>".concat(name, "</h2>\n        </div>\n        <p>Email: <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n        <p>Phone: ").concat(phone, "</p>\n        <p>LinkedIn: <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(work, "</p>\n    ");
    // Update resume container with generated HTML
    resumeContainer.innerHTML = resumeHTML;
    resumeContainer.classList.remove('hidden');
}
// Attach the function to the window object if needed for global access
window['generateResume'] = generateResume;
