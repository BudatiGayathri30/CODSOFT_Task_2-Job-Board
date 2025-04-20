document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("job-detail-container");
    const params = new URLSearchParams(window.location.search);
    const jobId = parseInt(params.get("id"), 10);
  
    fetch("jobsdata.json")
      .then((res) => res.json())
      .then((jobs) => {
        const job = jobs.find((j) => j.id === jobId);
        if (job) {
          container.innerHTML = `
            <div class="job-detail">
              <h1>${job.title}</h1>
              <h3 class="company">${job.company}</h3>
              <p><strong>Location:</strong> ${job.location}</p>
              <p><strong>Salary:</strong> ${job.salary}</p>
              <p><strong>Type:</strong> ${job.type}</p>
              <p><strong>Description:</strong> ${job.description}</p>
              <a href="apply.html?id=${job.id}" class="apply-button">Apply Now</a>
            </div>
          `;
        } else {
          container.innerHTML = "<p>Job not found.</p>";
        }
      })
      .catch((error) => {
        console.error("Error loading job detail:", error);
        container.innerHTML = "<p>Error loading job data.</p>";
      });
  });