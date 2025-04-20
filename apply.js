document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("apply-form");
  const params = new URLSearchParams(window.location.search);
  const jobId = params.get("id");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const file = form.querySelector("input[type='file']").files[0];
    const coverLetter = form.querySelector("textarea").value;

    if (!file || !email || !name) {
      alert("Please fill all required fields and attach a resume.");
      return;
    }

    alert("Application submitted successfully! (Simulated)");

    let applications = JSON.parse(localStorage.getItem("applications") || "[]");
    applications.push({ jobId, name, email, fileName: file.name, coverLetter });
    localStorage.setItem("applications", JSON.stringify(applications));

    form.reset();
    window.location.href = "candidate.html";
  });
});
