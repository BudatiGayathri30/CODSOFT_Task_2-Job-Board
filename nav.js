// nav.js

document.addEventListener("DOMContentLoaded", () => {
  const navHTML = `
    <nav>
      <div class="logo">Jobify</div>
      <div>
        <a href="index.html">Home</a>
        <a href="jobs.html">Jobs</a>
        <a href="employer.html">Post Job</a>
        <a href="candidate.html">Dashboard</a>
        <a href="login.html">Login</a>
      </div>
    </nav>
  `;
  document.getElementById("navbar-container").innerHTML = navHTML;
});
