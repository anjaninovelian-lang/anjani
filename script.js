const scriptURL = "URL_WEB_APP_GOOGLE_APPS_SCRIPT_MU";
const form = document.getElementById("absensiForm");
const responseText = document.getElementById("responseText");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let data = new FormData(form);

    fetch(scriptURL, { method: "POST", body: data })
        .then(res => {
            responseText.innerText = "Absensi berhasil dikirim!";
            form.reset();
        })
        .catch(err => {
            responseText.innerText = "Terjadi kesalahan!";
        });
});
