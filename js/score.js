const frm = document.querySelector("form");
const studentTable = document.querySelector(".student-total");

const students = [];
frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = frm.inName.value;
  const score1 = Number(frm.inScore1.value);
  const score2 = Number(frm.inScore2.value);
  const total = (score1 + score2) / 2;
  students.push({ name, score1, score2, total });

  let list = "";
  for (let i = 0; i < students.length; i++) {
    if (students[i].total < 4) {
      list += `      
      <ul class="row">
        <li class="col">${students[i].name}</li>
        <li class="col">${students[i].score1}</li>
        <li class="col">${students[i].score2}</li>
        <li class="col" style="color: rgba(255, 0, 0, 0.735);">${students[i].total}</li>
      </ul>`;
    } else {
      if (students[i].total >= 4 && students[i].total < 6) {
        list += `      
        <ul class="row">
          <li class="col">${students[i].name}</li>
          <li class="col">${students[i].score1}</li>
          <li class="col">${students[i].score2}</li>
          <li class="col" style="color: rgb(21, 168, 21);">${students[i].total}</li>
        </ul>`;
      } else {
        list += `      
        <ul class="row">
          <li class="col">${students[i].name}</li>
          <li class="col">${students[i].score1}</li>
          <li class="col">${students[i].score2}</li>
          <li class="col" style="color: #0d80d4;">${students[i].total}</li>
        </ul>`;
      }
    }
  }

  studentTable.innerHTML = list;

  frm.inName.value = "";
  frm.inName.focus();
  frm.inScore1.value = "";
  frm.inScore2.value = "";
});
