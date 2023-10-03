let contentData = [];

let detailBulan;
let detailHari;

function selisihTanggal(start, end) {
  let dateStart = new Date(start);
  let endStart = new Date(end);

  let selisih = endStart - dateStart;

  let jumlahHari = selisih / (1000 * 60 * 60 * 24);

  let berapaBulan = jumlahHari / 29;

  let jumlahBulan = Math.floor(berapaBulan);

  let sisaHari = jumlahHari % 29;

  detailBulan = jumlahBulan;

  detailHari = sisaHari;
}

function addProject(event) {
  event.preventDefault();

  let projectName = document.getElementById("input-project-name").value;
  let startProject = document.getElementById("input-start-date").value;
  let endProject = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;

  let nodeJs = document.getElementById("node-js-checkbox");
  let reactJs = document.getElementById("react-js-checkbox");
  let nextJs = document.getElementById("next-js-checkbox");
  let typeScript = document.getElementById("type-script-checkbox");

  let terNodeJs = nodeJs.checked ? nodeJs.value : null;
  let terReactJs = reactJs.checked ? reactJs.value : null;
  let terNextJs = nextJs.checked ? nextJs.value : null;
  let terTypeScript = typeScript.checked ? typeScript.value : null;

  let image = document.getElementById("input-blog-image").files;

  selisihTanggal(startProject, endProject);

  if (projectName === "") {
    alert("nama project tidak boleh kosong");
    return;
  } else if (startProject === "" || endProject === "") {
    alert("tanggal mulai dan tanggal selesai project tidak boleh kosong");
    return;
  } else if (detailBulan < 0 || detailHari < 0) {
    alert(
      "tanggal mulai gak boleh lebih dari tanggal selesai kocak, malah nyari bug 😂🤣"
    );
    return;
  } else if (description === "") {
    alert("deskripsi tidak boleh kosong");
    return;
  } else if (image.length === 0) {
    alert("belum upload gambar");
    return;
  }

  image = URL.createObjectURL(image[0]);
  let dataProject = {
    project: projectName,
    bulan: detailBulan,
    hari: detailHari,
    description: description,
    tech: [terNodeJs, terReactJs, terNextJs, terTypeScript],
    image: image,
  };

  contentData.push(dataProject);
  renderBlog();
}

function renderBlog() {
  document.getElementById("content").innerHTML = "";

  contentData.forEach(function (value, index, arr) {
    document.getElementById("content").innerHTML += `
    <div class="col-project">
            <div class="container">
              <a href="detail-blog.html">
                <div class="img-control">
                  <img src="${value.image}" alt="" id="make-link-to" />
                </div>
                <h4 style="color: black" class="in-600">${value.project}</h4>
                <p style="font-style: normal; color: #868686; margin-top: -12px" class="in-600">
                  durasi : ${
                    value.bulan === 0
                      ? value.hari + ` hari`
                      : value.bulan + ` bulan ` + value.hari + ` hari`
                  }
                </p>
                <p class="description in-600" style="text-align: justify">
                  ${value.description}
                </p>
              </a>
             
            ${
              value.tech[0] === null
                ? ``
                : `<i class="fab fa-node fa-xl in-600"></i>`
            }
            ${
              value.tech[1] === null
                ? ``
                : `<i class="fab fa-react fa-xl in-600"></i>`
            }
            ${
              value.tech[2] === null
                ? ``
                : `<i class="fab fa-vuejs fa-xl in-600"></i>`
            }
            ${
              value.tech[3] === null
                ? ``
                : `<i class="fab fa-js-square fa-xl in-600"></i>`
            }
            
            <p style="width: 50%"></p>

              <div class="button">
                <button style="width: 48%; height: 40px">Edit</button>
                <button style="width: 48%">Delete</button>
              </div>
            </div>
          </div>
    
    `;
  });

  let toLink = document.getElementById("make-link-to");

  toLink.addEventListener("click", function () {
    window.location.href = "detail-blog.html";
  });
}
