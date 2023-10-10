const testimonialDataApi = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/40d73f1b142de8167d51", true);

  xhr.onload = function () {
    if (xhr.status == 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("404 not found");
    }
  };

  xhr.onerror = () => {
    reject("Network error");
  };

  xhr.send();
});

const testiMonialAll = async () => {
  try {
    const dataApiConsume = await testimonialDataApi;
    let testimonialHTML = "";
    dataApiConsume.forEach((value) => {
      testimonialHTML += `
      <div class="col-card">
        <div class="quotes">
          <i class="fas fa-quote-left fa-xl" style="color: #${value.color}"></i>
        </div>
        <div class="img-control">
          <img
            src="${value.image}"
            alt=""
            id="img-profile"
          />
        </div>
        <div class="testimonial-control">
          <p>
            ${value.testimonialValue}
          </p>
          <p>${value.nameAccount}</p>
          <p>${value.rate}<i class="fas fa-star"></i></p>
        </div>
        <div class="bg-card-control">
          <img
            src="assets/bg_blue_test.png"
            alt=""
            id="bg-main"
            style="filter: hue-rotate(${value.degColor})"
          />
        </div>
        <div class="sosmed">
              <i class="fab fa-facebook-f fa-xl"></i>
              <i class="fab fa-discord fa-xl"></i>
              <i class="fab fa-instagram fa-xl"></i>
              <i class="fab fa-telegram-plane fa-xl"></i>
        </div>
      </div>
      `;
    });

    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (error) {
    throw error;
  }
};

testiMonialAll();

// filtered
const testiMonialRate = async (rate) => {
  try {
    const dataApiConsume = await testimonialDataApi;
    let testimonialHTML = "";
    let testiMonialFiltered = dataApiConsume.filter((value) => {
      return value.rate === rate;
    });

    if (testiMonialFiltered.length !== 0) {
      testiMonialFiltered.forEach((value) => {
        testimonialHTML += `
      <div class="col-card">
      <div class="quotes">
        <i class="fas fa-quote-left fa-xl" style="color: #${value.color}"></i>
      </div>
      <div class="img-control">
        <img
          src="${value.image}"
          alt=""
          id="img-profile"
        />
      </div>
      <div class="testimonial-control">
        <p>
          ${value.testimonialValue}
        </p>
        <p>${value.nameAccount}</p>
        <p>${value.rate}<i class="fas fa-star"></i></p>
      </div>
      <div class="bg-card-control">
        <img
          src="assets/bg_blue_test.png"
          alt=""
          id="bg-main"
          style="filter: hue-rotate(${value.degColor})"
        />
      </div>
      <div class="sosmed">
            <i class="fab fa-facebook-f fa-xl"></i>
            <i class="fab fa-discord fa-xl"></i>
            <i class="fab fa-instagram fa-xl"></i>
            <i class="fab fa-telegram-plane fa-xl"></i>
      </div>
    </div>
        `;
      });
    } else {
      testimonialHTML = `<h3>data tidak ditemukan!<h/3>`;
    }

    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (error) {
    throw error;
  }
};
