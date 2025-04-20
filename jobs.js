document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("jobs-container");
  const searchInput = document.getElementById("search");

  let jobsData = [];

  fetch("jobsdata.json")
    .then((res) => res.json())
    .then((jobs) => {
      jobsData = jobs;
      renderJobs(jobsData);
    });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = jobsData.filter(
        (job) =>
          job.title.toLowerCase().includes(term) ||
          job.company.toLowerCase().includes(term) ||
          job.location.toLowerCase().includes(term)
      );
      renderJobs(filtered);
    });
  }

  function renderJobs(jobs) {
    if (!container) return;
    container.innerHTML = jobs
      .map(
        (job) => `
        <div class="job-card">
          <h3>${job.title}</h3>
          <p class="company">${job.company}</p>
          <p>${job.location}</p>
          <a href="job-detail.html?id=${job.id}" class="btn">View Details</a>
        </div>`
      )
      .join("");
  }
});
