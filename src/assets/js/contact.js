function formSubmission() {
  console.log("WOOIII");
  let name = document.getElementById("input-name").inne;
  let email = document.getElementById("input-email").value;
  let phoneNumber = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  if (name === "") {
    alert("nama tidak boleh kosong");
    return;
  } else if (email === "") {
    alert("email tidak boleh kosong");
    return;
  } else if (phoneNumber === "") {
    alert("nomer telpon tidak boleh kosong");
    return;
  } else if (subject === "pilih subject") {
    alert("harus pilih subject");
    return;
  } else if (message === "") {
    alert("pesan tidak boleh kosong");
    return;
  }

  let emailReceiver = "contohxx@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello nama saya ${name}%0D%0A%0D%0A${message}.%0D%0A%0D%0AAnda bisa kontak saya di nomor ${phoneNumber} atau email saya di ${email} terimakasih`;
  a.click();
}
