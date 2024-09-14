// Ensure you have TypeScript configured in your project and that your build process transpiles this file.

function generateResume(): void {
    // Get the form and resume container elements
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeContainer = document.getElementById('resumeContainer') as HTMLDivElement;

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const work = (document.getElementById('work') as HTMLInputElement).value;

    // Generate resume HTML
    const resumeHTML = `
        <div class="resume-header">
            <h2>${name}</h2>
        </div>
        <p>Email: <a href="mailto:${email}">${email}</a></p>
        <p>Phone: ${phone}</p>
        <p>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Work Experience</h3>
        <p>${work}</p>
    `;

    // Update resume container with generated HTML
    resumeContainer.innerHTML = resumeHTML;
    resumeContainer.classList.remove('hidden');
}

// Attach the function to the window object if needed for global access
window['generateResume'] = generateResume;

