import QRCode from 'qrcode'
const theUrl = document.getElementById("yourSite");
const buttonCreate = document.querySelector(".newQRCode");
const boxChange = document.querySelector(".qrCodeBox");
const finalDisplay = document.querySelector(".allThings");
const downloadButton = document.querySelector(".newDownload");

buttonCreate.addEventListener("click", () => {
    if (theUrl.value === "") {
        alert("Aucun URL n'a été inscrit")
    }
    let siteUrl = theUrl.value
   QRCode.toDataURL(siteUrl, function (err, url) {
       document.querySelector(".qrCode").src = url
       document.querySelector(".newDownload").href = url
    })
    finalDisplay.style.justifyContent = "start"
    boxChange.style.display = "flex"
    downloadButton.style.display = "flex"
})