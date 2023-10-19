document.addEventListener("DOMContentLoaded", () => {
  const smileHalo = document.getElementById("icon-smile-halo");
  const smileHorn = document.getElementById("icon-smile-horns");
  const txtPasword = document.getElementById("password");
  txtPasword.setAttribute("type", "password");

  smileHalo.addEventListener("click", () => {
    smileHalo.classList.toggle("dsp");
    smileHorn.classList.toggle("dsp");
    txtPasword.setAttribute("type", "text");
  });
  smileHorn.addEventListener("click", () => {
    smileHalo.classList.toggle("dsp");
    smileHorn.classList.toggle("dsp");
    txtPasword.setAttribute("type", "password");
  });
});
