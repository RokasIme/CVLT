document.querySelector(".download-pdf").addEventListener("click", () => {
  const element = document.querySelector(".cv-content");
  const opt = {
    margin: 0,
    filename: "Rokas_Imelinskas_CV.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
});
