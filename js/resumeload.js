window.onload = () => {
  const resumeLink = "https://drive.google.com/file/d/1i2Ir6bT4CGQx9XRROPHGxelmEObQ_dBh/view?usp=sharing";
  const resumeButtons = Array.from(document.querySelectorAll(".btn_resume"));
  resumeButtons.forEach(element => {
    element.href = resumeLink;
    console.log("Resume Link Updated");
  });
}
