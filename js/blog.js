let contentData = [];

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

  if (projectName === "") {
    alert("nama project tidak boleh kosong");
    return;
  } else if (startProject === "" || endProject === "") {
    alert("tanggal mulai dan tanggal selesai project tidak boleh kosong");
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
    startproject: startProject,
    endproject: endProject,
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
    console.log(value);
    document.getElementById("content").innerHTML += `
    <div class="col-project">
            <div class="container">
              <img src="${value.image}" alt="" id="make-link-to" />
              <h4>${value.project}</h4>
              <p style="font-style: normal; color: #868686; margin-top: -12px">durasi : ${
                value.startproject
              } s/d ${value.endproject}</p>
              <p>
                ${value.description}
              </p>
             
            ${value.tech[0] === null ? `` : `<i class="fab fa-node fa-xl"></i>`}
            ${
              value.tech[1] === null ? `` : `<i class="fab fa-react fa-xl"></i>`
            }
            ${
              value.tech[2] === null ? `` : `<i class="fab fa-vuejs fa-xl"></i>`
            }
            ${
              value.tech[3] === null
                ? ``
                : `<i class="fab fa-js-square fa-xl"></i>`
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
    window.location.href = "https://google.com";
  });
}
