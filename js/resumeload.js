window.onload = () => {
  const resumeLink = "../resume/2023_CV.pdf";
  const resumeButtons = Array.from(document.querySelectorAll(".btn_resume"));
  resumeButtons.forEach(element => {
    element.href = resumeLink;
  });
}
