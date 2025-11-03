// Job vacancies database with actual posting dates
const jobVacancies = [
  {
    id: 1,
    title: "Agri-Tech Solutions Manager",
    department: "agriculture",
    location: "accra",
    type: "full-time",
    status: "open",
    postedDate: new Date("2025-07-05T11:49:37"),
    description:
      "Lead the development and implementation of technology solutions for agricultural challenges. Work with farmers, researchers, and technology partners to create innovative agri-tech solutions.",
    responsibilities: [
      "Develop and implement technology solutions for agricultural challenges",
      "Collaborate with farmers to understand their needs and pain points",
      "Manage relationships with technology partners and research institutions",
      "Oversee field testing and validation of new agricultural technologies",
      "Train farmers and extension officers on using agri-tech solutions",
      "Analyze data to measure the impact of technology interventions",
      "Stay updated on emerging technologies in agriculture",
      "Prepare reports and presentations for stakeholders",
    ],
    requirements: [
      "Bachelor's degree in Agriculture, Agricultural Engineering, or related field",
      "Minimum 5 years experience in agricultural technology or extension services",
      "Strong understanding of agricultural practices and challenges in Ghana",
      "Experience with precision agriculture technologies",
      "Excellent project management and communication skills",
      "Ability to work with diverse stakeholders including farmers, researchers, and tech developers",
      "Proficiency in data analysis and reporting",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive health insurance",
      "Professional development opportunities",
      "Field travel allowances",
      "Paid time off and holidays",
      "Opportunity to make meaningful impact in agriculture",
      "Dynamic and innovative work environment",
    ],
    skills: [
      "Agriculture",
      "Technology",
      "Project Management",
      "Data Analysis",
    ],
    icon: "ri-seedling-line",
    color: "green",
  },
  {
    id: 2,
    title: "Software Developer - Agri-Tech",
    department: "technology",
    location: "accra",
    type: "full-time",
    status: "open",
    postedDate: new Date("2025-07-08T13:03:19"),
    description:
      "Develop software solutions for agricultural applications including farm management systems, IoT platforms, and data analytics tools to support farmers and agricultural businesses.",
    responsibilities: [
      "Design and develop software applications for agricultural use cases",
      "Build and maintain farm management systems and IoT platforms",
      "Implement data analytics and visualization tools for agricultural data",
      "Collaborate with agriculture experts to understand user requirements",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and technical discussions",
      "Troubleshoot and debug applications",
      "Stay updated with emerging technologies in agri-tech",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years experience in software development",
      "Proficiency in JavaScript, Python, or similar programming languages",
      "Experience with web frameworks (React, Node.js, Django, etc.)",
      "Familiarity with databases (SQL and NoSQL)",
      "Understanding of IoT and data analytics concepts",
      "Strong problem-solving skills",
      "Interest in agriculture and technology applications",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Flexible remote work options",
      "Latest technology equipment",
      "Professional development budget",
      "Health and wellness benefits",
      "Opportunity to work on impactful projects",
      "Collaborative team environment",
    ],
    skills: ["JavaScript", "Python", "React", "Data Analytics", "IoT"],
    icon: "ri-code-line",
    color: "blue",
  },
  {
    id: 3,
    title: "Agricultural Research Specialist",
    department: "research",
    location: "kumasi",
    type: "full-time",
    status: "open",
    postedDate: new Date("2025-05-18T11:37:11"),
    description:
      "Conduct research on agricultural practices, technologies, and innovations. Work with farmers and research partners to test and validate new approaches to improve agricultural productivity.",
    responsibilities: [
      "Design and implement agricultural research studies",
      "Collect and analyze data on crop performance, soil health, and farming practices",
      "Collaborate with farmers to conduct field trials",
      "Prepare research reports and scientific publications",
      "Stay updated on agricultural research and innovations",
      "Present research findings to stakeholders and at conferences",
      "Develop recommendations for improving agricultural practices",
      "Mentor junior researchers and interns",
    ],
    requirements: [
      "Master's degree in Agriculture, Agronomy, or related field",
      "3+ years experience in agricultural research",
      "Strong knowledge of experimental design and statistical analysis",
      "Experience with field research and data collection",
      "Excellent written and verbal communication skills",
      "Ability to work independently and in teams",
      "Publication record in agricultural research is a plus",
    ],
    benefits: [
      "Competitive salary with research allowances",
      "Opportunities for further education and training",
      "Field research support and resources",
      "Health insurance and retirement benefits",
      "Conference travel support",
      "Collaboration with international research partners",
      "Meaningful contribution to agricultural development",
    ],
    skills: ["Research", "Data Analysis", "Agronomy", "Field Trials"],
    icon: "ri-microscope-line",
    color: "purple",
  },
  {
    id: 4,
    title: "Digital Agriculture Trainer",
    department: "agriculture",
    location: "tamale",
    type: "full-time",
    status: "open",
    postedDate: new Date("2025-02-08T10:43:47"),
    description:
      "Train farmers and agricultural stakeholders on using digital tools and technologies to improve farming practices. Develop training materials and deliver workshops across different regions.",
    responsibilities: [
      "Develop training materials on digital agriculture tools and practices",
      "Conduct training workshops for farmers and extension officers",
      "Provide one-on-one support to farmers adopting new technologies",
      "Evaluate training effectiveness and make improvements",
      "Collaborate with technology partners to understand tool functionalities",
      "Translate technical concepts into practical, farmer-friendly language",
      "Document success stories and case studies",
      "Travel to different regions to conduct training sessions",
    ],
    requirements: [
      "Bachelor's degree in Agriculture, Education, or related field",
      "3+ years experience in agricultural training or extension services",
      "Strong knowledge of digital agriculture tools and platforms",
      "Excellent presentation and communication skills",
      "Ability to work with diverse audiences including rural farmers",
      "Experience in curriculum development and training delivery",
      "Willingness to travel extensively within Ghana",
    ],
    benefits: [
      "Competitive salary with travel allowances",
      "Comprehensive health insurance",
      "Professional development opportunities",
      "Field travel support",
      "Paid time off and holidays",
      "Opportunity to make direct impact on farmers' livelihoods",
      "Supportive team environment",
    ],
    skills: [
      "Training",
      "Digital Agriculture",
      "Communication",
      "Curriculum Development",
    ],
    icon: "ri-graduation-cap-line",
    color: "orange",
  },
  {
    id: 5,
    title: "Business Development Manager",
    department: "marketing",
    location: "accra",
    type: "full-time",
    status: "open",
    postedDate: new Date("2025-06-28T08:10:19"),
    description:
      "Develop and implement strategies to grow TECHFARM Hub's partnerships, client base, and revenue streams. Identify new business opportunities in the agri-tech sector and build relationships with potential partners.",
    responsibilities: [
      "Develop and execute business development strategies",
      "Identify and pursue new partnership opportunities",
      "Build and maintain relationships with clients and partners",
      "Prepare proposals and presentations for potential clients",
      "Negotiate contracts and agreements",
      "Attend industry events and conferences",
      "Conduct market research to identify new opportunities",
      "Collaborate with technical teams to develop customized solutions",
    ],
    requirements: [
      "Bachelor's degree in Business, Marketing, or related field",
      "5+ years experience in business development, preferably in agriculture or technology",
      "Proven track record of achieving sales targets",
      "Strong network in agriculture or technology sectors",
      "Excellent negotiation and communication skills",
      "Strategic thinking and problem-solving abilities",
      "Knowledge of the agricultural sector in Ghana",
    ],
    benefits: [
      "Competitive salary with commission and bonuses",
      "Comprehensive health and retirement benefits",
      "Professional development opportunities",
      "Travel allowances and expense account",
      "Opportunity for career advancement",
      "Dynamic and growing organization",
      "Impactful work in a rapidly evolving sector",
    ],
    skills: ["Business Development", "Sales", "Partnerships", "Negotiation"],
    icon: "ri-line-chart-line",
    color: "yellow",
  },
  {
    id: 6,
    title: "Finance and Grants Officer",
    department: "finance",
    location: "accra",
    type: "full-time",
    status: "open",
    postedDate: new Date("2025-01-08T16:13:07"),
    description:
      "Manage financial operations, budgeting, and grant management for TECHFARM Hub. Ensure financial compliance and support fundraising efforts through grant applications and financial reporting.",
    responsibilities: [
      "Manage day-to-day financial operations and accounting",
      "Prepare budgets and financial forecasts",
      "Manage grant applications and reporting",
      "Ensure compliance with financial regulations and donor requirements",
      "Prepare financial statements and reports",
      "Coordinate with program teams on budget management",
      "Support fundraising efforts through financial analysis",
      "Implement and improve financial systems and controls",
    ],
    requirements: [
      "Bachelor's degree in Accounting, Finance, or related field",
      "Professional qualification (ICA, ACCA, CIMA) or in progress",
      "3+ years experience in finance, preferably in NGO or social enterprise",
      "Experience with grant management and donor reporting",
      "Proficiency in accounting software and Microsoft Excel",
      "Strong analytical and organizational skills",
      "Attention to detail and ability to meet deadlines",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive health and retirement benefits",
      "Support for professional certification",
      "Opportunities for career advancement",
      "Collaborative team environment",
      "Meaningful work in agricultural development",
      "Continuous learning and development",
    ],
    skills: [
      "Accounting",
      "Grant Management",
      "Budgeting",
      "Financial Reporting",
    ],
    icon: "ri-bank-card-line",
    color: "green",
  },
];

// Function to calculate days since posting with improved "Today" handling
function getDaysSincePosted(postedDate) {
  const today = new Date();
  const posted = new Date(postedDate);

  // Reset both dates to midnight for accurate day comparison
  today.setHours(0, 0, 0, 0);
  posted.setHours(0, 0, 0, 0);

  const diffTime = Math.abs(today - posted);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;

  const diffWeeks = Math.floor(diffDays / 7);
  if (diffWeeks === 1) return "1 week ago";
  return `${diffWeeks} weeks ago`;
}

// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
  mirror: true,
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// Helper function to escape HTML attributes
function escapeHtmlAttribute(str) {
  return str.replace(/"/g, "&quot;").replace(/\n/g, "\\n");
}

// Pagination variables
let currentPage = 1;
const jobsPerPage = 6;
let filteredJobs = [...jobVacancies];

// Render job listings from database with pagination
function renderJobListings(jobs, page = 1) {
  const jobListings = document.getElementById("job-listings");
  jobListings.innerHTML = "";

  if (jobs.length === 0) {
    document.getElementById("no-jobs-message").classList.remove("hidden");
    document.getElementById("pagination-container").innerHTML = "";
    return;
  } else {
    document.getElementById("no-jobs-message").classList.add("hidden");
  }

  // Calculate pagination
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (page - 1) * jobsPerPage;
  const endIndex = Math.min(startIndex + jobsPerPage, jobs.length);
  const paginatedJobs = jobs.slice(startIndex, endIndex);

  // Render jobs for current page
  paginatedJobs.forEach((job, index) => {
    const jobCard = document.createElement("div");
    jobCard.className = `job-card bg-white rounded-xl shadow-md overflow-hidden fade-in`;
    jobCard.setAttribute("data-aos", "fade-up");
    jobCard.setAttribute("data-aos-delay", `${100 + index * 100}`);
    jobCard.setAttribute("data-department", job.department);
    jobCard.setAttribute("data-location", job.location);
    jobCard.setAttribute("data-status", job.status);

    // Determine status badge
    let statusBadge = "";
    if (job.status === "open") {
      statusBadge = '<span class="status-badge status-open">Open</span>';
    } else if (job.status === "filled") {
      statusBadge = '<span class="status-badge status-filled">Filled</span>';
    } else {
      statusBadge = '<span class="status-badge status-closed">Closed</span>';
    }

    // Calculate days since posting
    const daysSincePosted = getDaysSincePosted(job.postedDate);

    // Create job card HTML with proper escaping
    jobCard.innerHTML = `
      <div class="p-6">
        <div class="flex justify-between items-start mb-4">
          <div>
            <span class="inline-block px-3 py-1 bg-${job.color}-100 text-${
      job.color
    }-800 text-xs font-semibold rounded-full mb-2 job-tag">
              ${
                job.department.charAt(0).toUpperCase() + job.department.slice(1)
              }
            </span>
            <h3 class="text-xl font-bold text-gray-900 mb-1">${job.title}</h3>
            <div class="flex items-center text-gray-600 text-sm">
              <i class="ri-map-pin-line mr-1"></i>
              <span>${
                job.location.charAt(0).toUpperCase() + job.location.slice(1)
              }</span>
              <span class="mx-2">•</span>
              <span>${
                job.type === "full-time"
                  ? "Full-time"
                  : job.type === "part-time"
                  ? "Part-time"
                  : "Contract"
              }</span>
              <span class="mx-2">•</span>
              ${statusBadge}
            </div>
          </div>
          <div class="w-12 h-12 bg-${
            job.color
          }-100 rounded-full flex items-center justify-center">
            <i class="${job.icon} text-${job.color}-600 text-xl"></i>
          </div>
        </div>
        <p class="text-gray-600 mb-4 line-clamp-3">${job.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${job.skills
            .map(
              (skill) =>
                `<span class="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">${skill}</span>`
            )
            .join("")}
        </div>
        <div class="flex justify-between items-center">
          <span class="text-sm text-gray-500">Posted ${daysSincePosted}</span>
          <button
            class="apply-btn px-4 py-2 border border-${job.color}-500 text-${
      job.color
    }-500 rounded-lg font-medium hover:bg-${
      job.color
    }-500 hover:text-white transition-colors ${
      job.status !== "open" ? "opacity-50 cursor-not-allowed" : ""
    }"
            ${job.status !== "open" ? "disabled" : ""}
            data-job-title="${escapeHtmlAttribute(job.title)}"
            data-job-department="${escapeHtmlAttribute(job.department)}"
            data-job-location="${escapeHtmlAttribute(
              job.location.charAt(0).toUpperCase() + job.location.slice(1)
            )}"
            data-job-type="${escapeHtmlAttribute(job.type)}"
            data-job-description="${escapeHtmlAttribute(job.description)}"
            data-job-responsibilities="${escapeHtmlAttribute(
              JSON.stringify(job.responsibilities)
            )}"
            data-job-requirements="${escapeHtmlAttribute(
              JSON.stringify(job.requirements)
            )}"
            data-job-benefits="${escapeHtmlAttribute(
              JSON.stringify(job.benefits)
            )}"
          >
            ${
              job.status === "open"
                ? "Apply Now"
                : job.status === "filled"
                ? "Position Filled"
                : "Closed"
            }
          </button>
        </div>
      </div>
    `;

    jobListings.appendChild(jobCard);
  });

  // Render pagination buttons
  renderPagination(jobs.length, page);

  // Add event listener for apply buttons
  document.querySelectorAll(".apply-btn").forEach((button) => {
    button.addEventListener("click", function () {
      if (this.disabled) return;

      openJobModal(
        this.dataset.jobTitle,
        this.dataset.jobDepartment,
        this.dataset.jobLocation,
        this.dataset.jobType,
        this.dataset.jobDescription,
        this.dataset.jobResponsibilities,
        this.dataset.jobRequirements,
        this.dataset.jobBenefits
      );
    });
  });
}

// Render pagination buttons
function renderPagination(totalJobs, currentPage) {
  const totalPages = Math.ceil(totalJobs / jobsPerPage);
  const paginationContainer = document.getElementById("pagination-container");
  paginationContainer.innerHTML = "";

  if (totalPages <= 1) return;

  // Previous button
  const prevButton = document.createElement("button");
  prevButton.className = `pagination-btn rounded-l-md ${
    currentPage === 1 ? "disabled" : ""
  }`;
  prevButton.innerHTML = '<i class="ri-arrow-left-s-line"></i>';
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderJobListings(filteredJobs, currentPage);
      window.scrollTo({
        top: document.getElementById("current-openings").offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
  paginationContainer.appendChild(prevButton);

  // Page buttons
  const maxVisiblePages = 5;
  let startPage, endPage;

  if (totalPages <= maxVisiblePages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
    const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrent) {
      startPage = 1;
      endPage = maxVisiblePages;
    } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
      startPage = totalPages - maxVisiblePages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrent;
      endPage = currentPage + maxPagesAfterCurrent;
    }
  }

  // Add first page button if needed
  if (startPage > 1) {
    const firstButton = document.createElement("button");
    firstButton.className = `pagination-btn ${
      currentPage === 1 ? "active" : ""
    }`;
    firstButton.textContent = "1";
    firstButton.addEventListener("click", () => {
      currentPage = 1;
      renderJobListings(filteredJobs, currentPage);
      window.scrollTo({
        top: document.getElementById("current-openings").offsetTop - 100,
        behavior: "smooth",
      });
    });
    paginationContainer.appendChild(firstButton);

    if (startPage > 2) {
      const ellipsis = document.createElement("span");
      ellipsis.className = "px-3 py-2";
      ellipsis.textContent = "...";
      paginationContainer.appendChild(ellipsis);
    }
  }

  // Add page buttons
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.className = `pagination-btn ${
      currentPage === i ? "active" : ""
    }`;
    pageButton.textContent = i;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderJobListings(filteredJobs, currentPage);
      window.scrollTo({
        top: document.getElementById("current-openings").offsetTop - 100,
        behavior: "smooth",
      });
    });
    paginationContainer.appendChild(pageButton);
  }

  // Add last page button if needed
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement("span");
      ellipsis.className = "px-3 py-2";
      ellipsis.textContent = "...";
      paginationContainer.appendChild(ellipsis);
    }

    const lastButton = document.createElement("button");
    lastButton.className = `pagination-btn ${
      currentPage === totalPages ? "active" : ""
    }`;
    lastButton.textContent = totalPages;
    lastButton.addEventListener("click", () => {
      currentPage = totalPages;
      renderJobListings(filteredJobs, currentPage);
      window.scrollTo({
        top: document.getElementById("current-openings").offsetTop - 100,
        behavior: "smooth",
      });
    });
    paginationContainer.appendChild(lastButton);
  }

  // Next button
  const nextButton = document.createElement("button");
  nextButton.className = `pagination-btn rounded-r-md ${
    currentPage === totalPages ? "disabled" : ""
  }`;
  nextButton.innerHTML = '<i class="ri-arrow-right-s-line"></i>';
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderJobListings(filteredJobs, currentPage);
      window.scrollTo({
        top: document.getElementById("current-openings").offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
  paginationContainer.appendChild(nextButton);
}

// Initial render of all jobs
renderJobListings(jobVacancies);

// Job search and filter functionality
const jobSearch = document.getElementById("job-search");
const jobDepartment = document.getElementById("job-department");
const jobLocation = document.getElementById("job-location");
const jobStatus = document.getElementById("job-status");

function filterJobs() {
  const searchTerm = jobSearch.value.toLowerCase();
  const departmentFilter = jobDepartment.value;
  const locationFilter = jobLocation.value;
  const statusFilter = jobStatus.value;

  filteredJobs = jobVacancies.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm) ||
      job.description.toLowerCase().includes(searchTerm) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm));
    const matchesDepartment =
      !departmentFilter || job.department === departmentFilter;
    const matchesLocation = !locationFilter || job.location === locationFilter;
    const matchesStatus = !statusFilter || job.status === statusFilter;

    return (
      matchesSearch && matchesDepartment && matchesLocation && matchesStatus
    );
  });

  currentPage = 1; // Reset to first page when filters change
  renderJobListings(filteredJobs);
}

function resetJobFilters() {
  jobSearch.value = "";
  jobDepartment.value = "";
  jobLocation.value = "";
  jobStatus.value = "";
  filteredJobs = [...jobVacancies];
  currentPage = 1;
  renderJobListings(filteredJobs);
}

jobSearch.addEventListener("input", filterJobs);
jobDepartment.addEventListener("change", filterJobs);
jobLocation.addEventListener("change", filterJobs);
jobStatus.addEventListener("change", filterJobs);

// Job modal functionality
function openJobModal(
  title,
  department,
  location,
  type,
  description,
  responsibilities,
  requirements,
  benefits
) {
  const modal = document.getElementById("job-modal");
  const jobTitle = document.getElementById("modal-job-title");
  const jobDept = document.getElementById("modal-job-department");
  const jobLoc = document.getElementById("modal-job-location");
  const jobType = document.getElementById("modal-job-type");
  const jobDesc = document.getElementById("modal-job-description");
  const jobResp = document.getElementById("modal-job-responsibilities");
  const jobReq = document.getElementById("modal-job-requirements");
  const jobBenefits = document.getElementById("modal-job-benefits");
  const appliedPosition = document.getElementById("applied-position");
  const modalContent = document.querySelector(".modal-content-container");

  // Reset form fields when opening a new job modal
  document.getElementById("job-application-form").reset();
  document.getElementById("resume-name").classList.add("hidden");
  document.getElementById("cover-name").classList.add("hidden");
  document.getElementById("email-preview-container").classList.add("hidden");

  // Clear file inputs
  document.getElementById("resume-upload").value = "";
  document.getElementById("cover-upload").value = "";

  // Reset scroll position to top
  modalContent.scrollTop = 0;

  // Set job details
  jobTitle.textContent = title;
  jobDept.textContent =
    department.charAt(0).toUpperCase() + department.slice(1);
  jobLoc.textContent = location;
  jobType.textContent =
    type === "full-time"
      ? "Full-time"
      : type === "part-time"
      ? "Part-time"
      : "Contract";
  jobDesc.textContent = description;
  appliedPosition.value = title;

  // Clear existing content
  jobResp.innerHTML = "";
  jobReq.innerHTML = "";
  jobBenefits.innerHTML = "";

  // Function to create list items
  function populateList(container, items) {
    try {
      // Parse the JSON string if it's a string
      const itemsArray = typeof items === "string" ? JSON.parse(items) : items;

      itemsArray.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        container.appendChild(li);
      });
    } catch (e) {
      console.error("Error parsing items:", e);
    }
  }

  // Populate all sections
  populateList(jobResp, responsibilities);
  populateList(jobReq, requirements);
  populateList(jobBenefits, benefits);

  // Show modal
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeJobModal() {
  const modal = document.getElementById("job-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// File upload handling
document
  .getElementById("resume-upload")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      const fileSize = (file.size / (1024 * 1024)).toFixed(2); // MB
      const display = document.getElementById("resume-name");
      display.textContent = `${fileName} (${fileSize}MB)`;
      display.classList.remove("hidden");
    }
  });

document
  .getElementById("cover-upload")
  .addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
      const fileSize = (file.size / (1024 * 1024)).toFixed(2); // MB
      const display = document.getElementById("cover-name");
      display.textContent = `${fileName} (${fileSize}MB)`;
      display.classList.remove("hidden");
    }
  });

// Update email preview when form fields change
document
  .getElementById("job-application-form")
  .addEventListener("input", function () {
    updateEmailPreview();
  });

function updateEmailPreview() {
  const form = document.getElementById("job-application-form");
  const previewContainer = document.getElementById("email-preview-container");
  const previewJobTitle = document.getElementById("preview-job-title");
  const previewPosition = document.getElementById("preview-position");
  const previewName = document.getElementById("preview-name");
  const previewEmail = document.getElementById("preview-email");
  const previewPhone = document.getElementById("preview-phone");
  const previewLocation = document.getElementById("preview-location");
  const previewSalary = document.getElementById("preview-salary");
  const previewNotice = document.getElementById("preview-notice");
  const previewPortfolio = document.getElementById("preview-portfolio");
  const previewPortfolioValue = document.getElementById(
    "preview-portfolio-value"
  );
  const previewMessageContainer = document.getElementById(
    "preview-message-container"
  );
  const previewMessage = document.getElementById("preview-message");
  const previewNameFooter = document.getElementById("preview-name-footer");

  // Get form values
  const position = document.getElementById("applied-position").value;
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const phone = form.elements["phone"].value;
  const location = form.elements["location"].value;
  const salary = form.elements["salary"].value;
  const notice = form.elements["notice"].value;
  const portfolio = form.elements["portfolio"].value;
  const message = form.elements["message"].value;

  // Update preview
  previewJobTitle.textContent = position;
  previewPosition.textContent = position;
  previewName.textContent = name;
  previewEmail.textContent = email;
  previewPhone.textContent = phone;
  previewLocation.textContent = location;
  previewSalary.textContent = salary;
  previewNotice.textContent = notice;
  previewNameFooter.textContent = name;

  // Show/hide portfolio section
  if (portfolio) {
    previewPortfolioValue.textContent = portfolio;
    previewPortfolio.classList.remove("hidden");
  } else {
    previewPortfolio.classList.add("hidden");
  }

  // Show/hide message section
  if (message) {
    previewMessage.textContent = message;
    previewMessageContainer.classList.remove("hidden");
  } else {
    previewMessageContainer.classList.add("hidden");
  }

  // Show preview container if at least one field is filled
  if (
    name ||
    email ||
    phone ||
    location ||
    salary ||
    notice ||
    portfolio ||
    message
  ) {
    previewContainer.classList.remove("hidden");
  } else {
    previewContainer.classList.add("hidden");
  }
}

// Update email preview for general application
document
  .getElementById("general-application-form")
  .addEventListener("input", function () {
    updateGeneralEmailPreview();
  });

function updateGeneralEmailPreview() {
  const form = document.getElementById("general-application-form");
  const previewContainer = document.getElementById(
    "general-email-preview-container"
  );
  const previewName = document.getElementById("general-preview-name");
  const previewEmail = document.getElementById("general-preview-email");
  const previewPhone = document.getElementById("general-preview-phone");
  const previewLocation = document.getElementById("general-preview-location");
  const previewDepartment = document.getElementById(
    "general-preview-department"
  );
  const previewPortfolio = document.getElementById("general-preview-portfolio");
  const previewPortfolioValue = document.getElementById(
    "general-preview-portfolio-value"
  );
  const previewMessage = document.getElementById("general-preview-message");
  const previewNameFooter = document.getElementById(
    "general-preview-name-footer"
  );

  // Get form values
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const phone = form.elements["phone"].value;
  const location = form.elements["location"].value;
  const department = form.elements["department"].value;
  const portfolio = form.elements["portfolio"].value;
  const message = form.elements["message"].value;

  // Update preview
  previewName.textContent = name;
  previewEmail.textContent = email;
  previewPhone.textContent = phone;
  previewLocation.textContent =
    location.charAt(0).toUpperCase() + location.slice(1);
  previewDepartment.textContent =
    department.charAt(0).toUpperCase() + department.slice(1);
  previewMessage.textContent = message;
  previewNameFooter.textContent = name;

  // Show/hide portfolio section
  if (portfolio) {
    previewPortfolioValue.textContent = portfolio;
    previewPortfolio.classList.remove("hidden");
  } else {
    previewPortfolio.classList.add("hidden");
  }

  // Show preview container if at least one field is filled
  if (
    name ||
    email ||
    phone ||
    location ||
    department ||
    portfolio ||
    message
  ) {
    previewContainer.classList.remove("hidden");
  } else {
    previewContainer.classList.add("hidden");
  }
}

// Form submission handling with email sending
document
  .getElementById("job-application-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loading state
    const submitText = document.getElementById("submit-text");
    const submitSpinner = document.getElementById("submit-spinner");
    submitText.textContent = "Submitting...";
    submitSpinner.classList.remove("hidden");

    // Collect form data
    const formData = new FormData(this);
    const resumeFile = document.getElementById("resume-upload").files[0];
    const coverFile = document.getElementById("cover-upload").files[0];

    if (resumeFile) {
      formData.append("resume", resumeFile);
    }
    if (coverFile) {
      formData.append("cover_letter", coverFile);
    }

    // Send data to our PHP endpoint
    fetch("submit_application.php", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Hide loading state
        submitText.textContent = "Submit Application";
        submitSpinner.classList.add("hidden");

        if (data.success) {
          // Reset form
          this.reset();
          document.getElementById("resume-name").classList.add("hidden");
          document.getElementById("cover-name").classList.add("hidden");
          document
            .getElementById("email-preview-container")
            .classList.add("hidden");

          // Close job modal and show success
          closeJobModal();
          showSuccessModal(data.message);
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        submitText.textContent = "Submit Application";
        submitSpinner.classList.add("hidden");
        showSuccessModal(
          error.message ||
            "There was an error submitting your application. Please try again later."
        );
      });
  });

// Form submission handling for general application (single instance)
document
  .getElementById("general-application-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loading state
    const submitText = document.getElementById("general-submit-text");
    const submitSpinner = document.getElementById("general-submit-spinner");
    submitText.textContent = "Submitting...";
    submitSpinner.classList.remove("hidden");

    // Collect form data
    const formData = new FormData(this);
    const resumeFile = document.getElementById("general-resume-upload")
      .files[0];
    const coverFile = document.getElementById("general-cover-upload").files[0];

    if (resumeFile) {
      formData.append("resume", resumeFile);
    }
    if (coverFile) {
      formData.append("cover_letter", coverFile);
    }

    // Send data to our PHP endpoint
    fetch("submit_application.php", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Hide loading state
        submitText.textContent = "Submit Application";
        submitSpinner.classList.add("hidden");

        if (data.success) {
          // Reset form
          this.reset();
          document
            .getElementById("general-resume-name")
            .classList.add("hidden");
          document.getElementById("general-cover-name").classList.add("hidden");
          document
            .getElementById("general-email-preview-container")
            .classList.add("hidden");

          // Close general modal and show success
          closeGeneralApplicationModal();
          showSuccessModal(data.message);
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        submitText.textContent = "Submit Application";
        submitSpinner.classList.add("hidden");
        showSuccessModal(
          error.message ||
            "There was an error submitting your application. Please try again later."
        );
      });
  });

// General application modal
function openGeneralApplicationModal() {
  document.getElementById("general-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeGeneralApplicationModal() {
  document.getElementById("general-modal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Success modal
function showSuccessModal(message) {
  if (message) {
    document.getElementById("success-message").textContent = message;
  }
  document.getElementById("success-modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSuccessModal() {
  document.getElementById("success-modal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// File upload handling for general application
document
  .getElementById("general-resume-upload")
  .addEventListener("change", function (e) {
    const fileName = e.target.files[0]?.name || "No file selected";
    const display = document.getElementById("general-resume-name");
    display.textContent = fileName;
    display.classList.remove("hidden");
  });

document
  .getElementById("general-cover-upload")
  .addEventListener("change", function (e) {
    const fileName = e.target.files[0]?.name || "No file selected";
    const display = document.getElementById("general-cover-name");
    display.textContent = fileName;
    display.classList.remove("hidden");
  });

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }
    }
  });
});
