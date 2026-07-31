import fs from 'fs';
import PDFDocument from 'pdfkit';

// Create a new PDF document (A4 size)
const doc = new PDFDocument({
  size: 'A4',
  margins: {
    top: 40,
    bottom: 40,
    left: 45,
    right: 45
  },
  autoFirstPage: true
});

// Write to public/Gangadhar_Reddy_Resume.pdf
const outputDir = 'public';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
const writeStream = fs.createWriteStream(`${outputDir}/Gangadhar_Reddy_Resume.pdf`);
doc.pipe(writeStream);

// Styles and Colors
const primaryColor = '#1e3a8a'; // Dark Blue
const textColor = '#1e293b';    // Slate 800
const secondaryColor = '#475569'; // Slate 600
const bulletColor = '#3b82f6';   // Blue 500

doc.fillColor(textColor);

// Title / Header
doc.fontSize(24).font('Helvetica-Bold').fillColor(primaryColor).text('T. GANGADHAR REDDY', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(11).font('Helvetica-Oblique').fillColor(secondaryColor).text('Full Stack Developer | Python, React.js, FastAPI, AI Integration', { align: 'center' });
doc.moveDown(0.4);

// Contact Info
const contactInfo = 'Kadapa, Andhra Pradesh, India  |  gangadharreddy065@gmail.com  |  +91 9603228769';
doc.fontSize(9.5).font('Helvetica').fillColor(textColor).text(contactInfo, { align: 'center' });

// Social Links
const socialsX = doc.x;
const socialsY = doc.y;
doc.moveDown(0.2);
doc.fontSize(9.5).font('Helvetica-Bold')
  .fillColor(primaryColor)
  .text('LinkedIn: linkedin.com/in/gangadharreddy065  |  GitHub: github.com/gangadharreddy065-create', { align: 'center' });

doc.moveDown(0.5);

// Draw a line separator
const drawLine = () => {
  doc.strokeColor('#cbd5e1').lineWidth(0.8).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown(0.4);
};

// Section Helper
const sectionHeader = (title) => {
  doc.moveDown(0.5);
  doc.fontSize(11).font('Helvetica-Bold').fillColor(primaryColor).text(title.toUpperCase());
  doc.moveDown(0.2);
  drawLine();
};

// SECTION 1: PROFESSIONAL SUMMARY
sectionHeader('Professional Summary');
doc.fontSize(9).font('Helvetica').fillColor(textColor).text(
  'Final-year B.Tech CSE (AI & Data Science) student with hands-on experience building and deploying full-stack web applications using React.js, FastAPI, Python, and SQL. Skilled in REST API development, JWT authentication, database design, and Git-based version control. Proven ability to ship production-deployed projects end-to-end, from UI design to cloud deployment, with growing expertise in AI/ML integration. Seeking SDE, Full Stack, or Web Developer internship roles.',
  { align: 'justify', lineGap: 2 }
);

// SECTION 2: TECHNICAL SKILLS
sectionHeader('Technical Skills');

const writeSkillLine = (label, details) => {
  doc.fontSize(9).font('Helvetica-Bold').fillColor(textColor).text(`•  ${label}: `, { camelCase: false, continued: true })
     .font('Helvetica').fillColor(textColor).text(details);
  doc.moveDown(0.25);
};

writeSkillLine('Core (hands-on, project-tested)', 'Python, JavaScript, SQL, React.js, FastAPI, Flask, SQLAlchemy, PostgreSQL, MySQL, SQLite, JWT Authentication, Role-Based Access Control, REST API Development, Git, GitHub');
writeSkillLine('Familiar With', 'Next.js, OpenCV, MediaPipe, Postman, Gunicorn, HTML5, CSS3, Responsive Web Design');
writeSkillLine('Core Concepts', 'OOP, DBMS, Data Structures, Problem Solving, Agile-style Project Workflow');

// SECTION 3: PROJECTS
sectionHeader('Projects');

const projectHeader = (name, techStack) => {
  doc.fontSize(10).font('Helvetica-Bold').fillColor(textColor).text(name, { continued: true })
     .font('Helvetica-Oblique').fillColor(secondaryColor).text(`  —  Tech Stack: ${techStack}`);
  doc.moveDown(0.25);
};

const bulletPoint = (text) => {
  doc.fontSize(9).font('Helvetica').fillColor(textColor).text('   •  ', { continued: true })
     .text(text, { align: 'justify', lineGap: 1.5 });
  doc.moveDown(0.15);
};

const links = (live, code) => {
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(primaryColor)
     .text(`      Live Demo: ${live}  |  GitHub: ${code}`);
  doc.moveDown(0.4);
};

// Project 1
projectHeader('Jobetix — Full Stack Job Portal Application', 'React.js, FastAPI, SQLAlchemy, PostgreSQL, JWT, Render');
bulletPoint('Developed and deployed a production full-stack job portal supporting user registration, login, job search, and application workflows for both job seekers and employers.');
bulletPoint('Implemented JWT-based authentication and role-based access control, securing API endpoints across two distinct user roles.');
bulletPoint('Built and integrated RESTful APIs using FastAPI with PostgreSQL for persistent data storage, replacing an earlier SQLite implementation to support production-scale deployment.');
bulletPoint('Designed a fully responsive React.js frontend and resolved SPA routing and CORS configuration issues during deployment.');
links('https://job-portal-frontend-195k.onrender.com/', 'https://github.com/gangadharreddy065-create/Full-Stack-Job-Portal-Application');

// Project 2
projectHeader('Intelligent Attendance Monitoring System with Anti-Proxy Detection', 'Python, Flask, SQLite, OpenCV, MediaPipe, Gunicorn');
bulletPoint('Built a computer-vision-based attendance management system using OpenCV and MediaPipe to detect and prevent proxy attendance through facial/landmark verification.');
bulletPoint('Designed and implemented secure attendance tracking, record management, and audit features using Flask and SQLite.');
bulletPoint('Improved attendance verification accuracy and transparency compared to manual/roll-call methods, and deployed the system using Gunicorn for production-style serving.');
links('https://attendance-demo.netlify.app', 'https://github.com/gangadharreddy065-create/attendance-system');

// Project 3
projectHeader('Student Management System', 'Next.js 16, React 19, TypeScript, Prisma ORM, PostgreSQL, Vercel');
bulletPoint('Built a full-stack student management web application using Next.js 16 (App Router) and React 19, enabling administrators to perform complete CRUD operations with real-time dashboard analytics.');
bulletPoint('Architected the backend with Next.js Route Handlers and Prisma ORM connected to Neon Serverless PostgreSQL, implementing RESTful API endpoints with UUID-based routing.');
bulletPoint('Developed an interactive data table with client-side search, multi-criteria filtering, and column sorting, with Excel/CSV export support.');
links('https://sms-demo.vercel.app', 'https://github.com/gangadharreddy065-create/student-management-system');


// Add Page 2
doc.addPage();

// Header of Page 2 (Mini)
doc.fontSize(12).font('Helvetica-Bold').fillColor(primaryColor).text('T. GANGADHAR REDDY', { align: 'left' });
doc.fontSize(8).font('Helvetica').fillColor(secondaryColor).text('Full Stack Developer  |  gangadharreddy065@gmail.com  |  +91 9603228769');
doc.moveDown(0.2);
doc.strokeColor('#cbd5e1').lineWidth(0.5).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
doc.moveDown(0.4);

// SECTION 4: INTERNSHIP EXPERIENCE
sectionHeader('Internship Experience');

const experienceHeader = (role, company, duration) => {
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(textColor).text(role, { continued: true })
     .font('Helvetica-Oblique').fillColor(secondaryColor).text(` — ${company}`, { continued: true })
     .font('Helvetica').text(`  (${duration})`, { align: 'right' });
  doc.moveDown(0.25);
};

experienceHeader('Web Development Intern', 'InAmigos Foundation', 'May – Jun 2026');
bulletPoint('Completed a hands-on web development internship, contributing to real project tasks and earning a verified completion certificate.');
doc.moveDown(0.3);

experienceHeader('AI Deployment & Automation Intern', 'EduSkills', 'Jan – Mar 2026');
bulletPoint('Worked on AI deployment workflows and automation pipelines, applying core deployment concepts to practical use cases.');
doc.moveDown(0.3);

experienceHeader('Android Developer Virtual Intern', 'EduSkills', 'Apr – Jun 2024');
bulletPoint('Learned mobile application development concepts including UI design and app lifecycle fundamentals.');

// SECTION 5: HACKATHONS & TECHNICAL PARTICIPATION
sectionHeader('Hackathons & Technical Participation');
bulletPoint('Smart India Hackathon (SIH) 2025 — National-level hackathon, built a working prototype under a 36-hour deadline.');
bulletPoint('National Level 24-Hour Hackathon — Sri Manakula Vinayagar Engineering College (SMVEC)');
bulletPoint('XE Conclave 24-Hour Hackathon — Hosted by Xebia Academic Partners');

// SECTION 6: EDUCATION (Corrected Date 2023 - 2027)
sectionHeader('Education');

const educationEntry = (degree, university, duration, grade) => {
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(textColor).text(degree, { continued: true })
     .font('Helvetica').fillColor(secondaryColor).text(` | ${university} (${duration})`, { continued: true })
     .font('Helvetica-Bold').text(`  —  ${grade}`, { align: 'right' });
  doc.moveDown(0.2);
};

educationEntry('B.Tech, Computer Science Engineering (AI & Data Science)', 'Takshashila University', '2023 – 2027', 'CGPA: 7.02');
educationEntry('Intermediate (MPC)', 'Sri Chaitanya Junior College', '2020 – 2022', 'Score: 70.4%');
educationEntry('SSC (Secondary School)', 'ZP High School', '2019 – 2020', 'GPA: 8.7');

// SECTION 7: CERTIFICATIONS
sectionHeader('Certifications');

const certColumn1 = [
  '• IBM Data Analysis with Python',
  '• IBM Python 101 for Data Science',
  '• Data Analysis Using Python'
];

const certColumn2 = [
  '• Python Using AI Workshop',
  '• Stock Market Using AI Workshop',
  '• No-Code Web App Development with Bubble.io'
];

const yBeforeCerts = doc.y;
doc.fontSize(9).font('Helvetica').fillColor(textColor);

// Print Certifications in two columns
let yPos = yBeforeCerts;
for (let i = 0; i < certColumn1.length; i++) {
  doc.text(certColumn1[i], 50, yPos);
  doc.text(certColumn2[i], 300, yPos);
  yPos += 16;
}

// Finalize the document
doc.end();
console.log('PDF Resume successfully generated with updated dates!');
