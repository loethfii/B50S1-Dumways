const testiMonialPeople = [
  {
    image:
      "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2346&q=80",
    testimonialValue:
      "I want to thank the team behind this product. Since I started using it, my productivity has increased significantly. I am very impressed with the features provided and capabilities.",
    nameAccount: "Nat Van Hoven",
    rate: 4,
    degColor: "400deg",
    color: "8e07f1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2244&q=80",
    testimonialValue:
      "This product has changed the way I work. As a creative professional, I really appreciate its intuitive design and flexibility. I can easily integrate this tool into my workflow and produce better work.",
    nameAccount: "Marie Michele Bouchar",
    rate: 5,
    degColor: "25deg",
    color: "5A15FF",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501432377862-3d0432b87a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80",
    testimonialValue:
      "First of all, I want to mention how good their customer service is. I had several technical questions about using the product, and the customer support team was always ready to help and answer any of my questions.",
    nameAccount: "Capten Deadpool",
    rate: 5,
    degColor: "4030deg",
    color: "E100AB",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1666265087928-fe19db9887ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    testimonialValue:
      "I am honestly quite disappointed with the service I received during my recent visit to Bintan. From the moment I arrived, it felt like there was a lack of attention to detail.",
    nameAccount: "Charlie Morales",
    rate: 2,
    degColor: "320deg",
    color: "005BAE",
  },
  {
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80",
    testimonialValue:
      "My stay in Bintan was far from what I had hoped for. The resort I booked claimed to offer a luxurious experience, but it did not live up to that promise. The facilities were outdated, and the cleanliness left much to be desired.",
    nameAccount: "David Huge",
    rate: 1,
    degColor: "450deg",
    color: "FF0069",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    testimonialValue:
      "I had been looking forward to my vacation in Bintan for months, but it turned out to be a letdown. The activities advertised were not as exciting as they seemed, and the prices for various tours and services were exorbitant.",
    nameAccount: "Marchel Liu",
    rate: 2,
    degColor: "2680deg",
    color: "AB2300",
  },
];

const testiMonialAll = () => {
  let testimonialHTML = "";
  testiMonialPeople.forEach((value) => {
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
          src="assets/testombak2.png"
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
          src="assets/testombak2.png"
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
};
