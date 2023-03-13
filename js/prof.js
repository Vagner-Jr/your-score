const button = document.getElementById("btn-new");
const modal = document.querySelector("dialog");

button.addEventListener("click", () => {
  modal.showModal();
});

const frm = document.querySelector("dialog form");
const container = document.querySelector("#professor");
const sex = document.querySelectorAll("input[name='sex']");

const professors = [];
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = frm.inName.value;
  const subject = frm.inSubject.value;
  const sex = document.querySelector("input[name='sex']:checked").value;
  professors.push({ name, subject, sex });
  console.log(professors);

  let list = "";
  for (let i = 0; i < professors.length; i++) {
    if (professors[i].sex == "man") {
      container.innerHTML = list += `
                <div class="man">
                    <div class="foto">
                        <i class="ph ph-user"></i>
                    </div>
                    <div class="info">
                        <h3>${professors[i].name}</h3>
                        <p>Professor de ${professors[i].subject}</p>
                    </div>
                </div>`;
    } else {
      container.innerHTML = list += `
            <div class="woman">
                <div class="foto">
                    <i class="ph ph-user"></i>
                </div>
                <div class="info">
                    <h3>${professors[i].name}</h3>
                    <p>Professora de ${professors[i].subject}</p>
                </div>
            </div>`;
    }
  }

  frm.inSubject.value = "";
  frm.inName.value = "";
  frm.inName.focus();
  modal.close();
});
