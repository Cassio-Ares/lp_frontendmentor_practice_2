function calculate() {
  const day = document.querySelector("#day");
  const month = document.querySelector("#month");
  const year = document.querySelector("#year");
  const btn = document.querySelector("#btn");

  const result_year = document.querySelector("#result_year");
  const result_months = document.querySelector("#result_months");
  const result_day = document.querySelector("#result_day");
  const notice = document.querySelectorAll(".alert");

  let dateNow = new Date();
  let dataYear = new Date().getFullYear()


  if (day.value == "" || month.value == "" || year.value == "") {
     for(let i = 0; i < notice.length; i++ ){
      notice[i].classList.add("alertVisi")
     }
  }
   else if(year.value > dataYear || month.value == 0 || month.value > 12){
     for(let i = 0; i < notice.length; i++){
      notice[i].classList.add("alertVisi")
      notice[i].innerText = 'Must be a valid date'
     }
   }  
  else {
    const monthReal = month.value - 1;

    const datePass = new Date(year.value, monthReal, day.value);

    const min = (dateNow - datePass) / 60000;

    const yearTotal = Math.floor(min / 525960);
    const monthTotal = Math.floor(min / 525960) % 43830; // ????
    const dayTotal = (min/525960/43830)/1440             // ????

    result_year.innerText = `${yearTotal}`;
    result_months.innerText = `${monthTotal}`;
  }
}

btn.addEventListener("click", calculate);
