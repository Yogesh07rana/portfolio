// Wait for the entire HTML document to be loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    // --- PORTFOLIO DATA ---
    // All your information is stored in this single object.
    // To update your portfolio, you only need to change the data here.
    const portfolioData = {
        name: "Yogesh",
        title: "Software Developer",
        contact: {
            phone: "9289959390",
            email: "yogesh09004@gmail.com",
            address: "D-37 parvesh nagar, mubarakpur dabas, Delhi 110081"
        },
        profile: "Java Full Stack Developer skilled in building scalable web applications using Java, Spring Boot, and React.js. Passionate about clean code, solving real-world problems, and delivering user-focused solutions in collaborative environments.",
        education: [
            { period: "2022-2026", institution: "Jagannath University", degree: "B.Tech (Computer science and engineering)" },
            { period: "2021-2022", institution: "Sarvodaya Co-ed Vidyalaya", degree: "12TH" },
            { period: "2021-2022", institution: "Sarvodaya Co-ed Vidyalaya", degree: "10TH" }
        ],
        skills: [
            "Java (Core & Advanced)", "Spring Boot Framework", "RESTful API Development",
            "HTML5 & CSS3", "JavaScript (ES6+)", "MySQL (Database Design & Queries)",
            "Git & Github (Version Control)"
        ],
        projects: [
            { title: "Chat application", description: "A Java-based chat app using socket programming that enables real-time messaging between users on the same local network. Supports multiple clients with multithreading for smooth communication." },
            { title: "E-commerce website clone (Amazon Clone (HTML, CSS))", description: "Developed a front-end clone of Amazon's homepage using HTML and CSS. The project replicates the layout, navigation bar, product cards, and responsive design to mimic the look and feel of the original site. Demonstrated skills in page structuring, CSS styling, and responsive UI development." }
        ],
        languages: ["English", "Hindi"]
    };

    // --- DYNAMIC CONTENT INJECTION ---
    // This part of the code takes the data from the object above 
    // and places it into the correct spots in the HTML.

    // Header and Hero section
    document.getElementById('portfolio-name-header').textContent = portfolioData.name;
    document.getElementById('portfolio-name-hero').textContent = portfolioData.name;
    document.getElementById('portfolio-title').textContent = portfolioData.title;
    document.getElementById('profile-description').textContent = portfolioData.profile;

    // Projects
    const projectsContainer = document.getElementById('projects-container');
    portfolioData.projects.forEach(project => {
        const projectEl = document.createElement('div');
        projectEl.className = 'bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300';
        projectEl.innerHTML = `
            <h4 class="text-xl font-semibold text-indigo-700 mb-2">${project.title}</h4>
            <p>${project.description}</p>
        `;
        projectsContainer.appendChild(projectEl);
    });

    // Education
    const educationContainer = document.getElementById('education-container');
    portfolioData.education.forEach(edu => {
        const eduEl = document.createElement('div');
        eduEl.className = 'bg-white p-6 rounded-lg shadow-md';
        eduEl.innerHTML = `
            <div class="flex justify-between items-center">
                <h4 class="text-xl font-semibold">${edu.institution}</h4>
                <p class="text-gray-500">${edu.period}</p>
            </div>
            <p class="text-indigo-600">${edu.degree}</p>
        `;
        educationContainer.appendChild(eduEl);
    });

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    portfolioData.skills.forEach(skill => {
        const skillEl = document.createElement('li');
        skillEl.className = 'flex items-center';
        skillEl.innerHTML = `
            <svg class="w-5 h-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            ${skill}
        `;
        skillsContainer.appendChild(skillEl);
    });
    
    // Languages
    const languagesContainer = document.getElementById('languages-container');
    portfolioData.languages.forEach(lang => {
        const langEl = document.createElement('li');
        langEl.className = 'flex items-center';
        langEl.innerHTML = `
             <svg class="w-5 h-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m4 13l4-4M19 21l-4-4M12 19l4-4"></path><path d="M5 12h14"></path></svg>
            ${lang}
        `;
        languagesContainer.appendChild(langEl);
    });

    // Contact
    const contactContainer = document.getElementById('contact-container');
    contactContainer.innerHTML = `
        <div class="flex items-center text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 mr-3"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <a href="tel:${portfolioData.contact.phone}" class="hover:text-indigo-600">${portfolioData.contact.phone}</a>
        </div>
        <div class="flex items-center text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 mr-3"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <a href="mailto:${portfolioData.contact.email}" class="hover:text-indigo-600">${portfolioData.contact.email}</a>
        </div>
        <div class="flex items-center text-lg text-center md:text-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-600 mr-3 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${portfolioData.contact.address}</span>
        </div>
    `;

    // Footer
    document.getElementById('footer-text').textContent = `© ${new Date().getFullYear()} ${portfolioData.name}. All Rights Reserved.`;


    // --- MOBILE MENU INTERACTIVITY ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
    
    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    });
});
