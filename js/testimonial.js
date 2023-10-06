const testiMonialPeople = [
  {
    image:
      "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80",
    testimonialValue: "Ampas bat, saya kecewa!",
    nameAccount: "Desi Melati Ginanjar",
    rate: 1,
  },
  {
    image:
      "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2244&q=80",
    testimonialValue: "Puas dengan produknya, ditunggu next order gan",
    nameAccount: "Marie Michele Bouchar",
    rate: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    testimonialValue: "GG Gais anti scam, recommended product",
    nameAccount: "Mas Deadpool Ganteng",
    rate: 5,
  },
];

const testiMonialAll = () => {
  let testimonialHTML = "";
  testiMonialPeople.forEach((value) => {
    testimonialHTML += `
        <div class="col-card">
            <div class="img-control">
            <img
                src="${value.image}"
                alt="profile"
            />
        </div>
        <div class="testimonial-control">
            <p>"${value.testimonialValue}"</p>
            <p>${value.nameAccount}</p>
            <p>${value.rate}<i class="fas fa-star"></i></p>
            </div>
        </div>
    `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
};

testiMonialAll();

// filtered
const testiMonialRate = (rate) => {
  let testimonialHTML = "";
  let testiMonialFiltered = testiMonialPeople.filter((value) => {
    return value.rate === rate;
  });

  if (testiMonialFiltered.length !== 0) {
    testiMonialFiltered.forEach((value) => {
      testimonialHTML += `
            <div class="col-card">
                <div class="img-control">
                <img
                    src="${value.image}"
                    alt="profile"
                />
            </div>
            <div class="testimonial-control">
                <p>"${value.testimonialValue}"</p>
                <p>${value.nameAccount}</p>
                <p>${value.rate}<i class="fas fa-star"></i></p>
                </div>
            </div>
        `;
    });
  } else {
    testimonialHTML = `<h3>data tidak ditemukan!<h/3>`;
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
};
