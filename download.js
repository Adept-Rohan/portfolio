let btnDownload = document.getElementById("specialBtn");

btnDownload.addEventListener("click", startDownload);

async function startDownload() {
  let url = "resume.pdf";
  let fileName = "My Resume";
  const res = await fetch(url);
  const blob = await res.blob();
  saveAs(blob, fileName);
}