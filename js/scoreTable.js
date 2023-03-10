const frm = document.querySelector("form");
const studentTable = document.querySelector("#student");
const totalColor = document.querySelector('.student-total')

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
    list += `
      <tr>
        <td class='student-name'>${students[i].name}</td>            
        <td class='student-score1'>${students[i].score1}</td>
        <td class='student-score2'>${students[i].score2}</td>
        <td class='student-total'>${students[i].total}</td>
      </tr>`;
    }


  studentTable.innerHTML = list;

  frm.inName.value = "";
  frm.inName.focus();
  frm.inScore1.value = "";
  frm.inScore2.value = "";
});