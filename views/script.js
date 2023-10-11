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

    const yearTotal = Math.floor(min / (365*24*60));
    const monthTotal =  Math.floor((min % (365*24*60))/(30*24*60));
    const dayTotal = Math.floor((min % (min % (356*24*36))/(30*24*60)) % (24*60))  

    result_year.innerText = `${yearTotal}`;
    result_months.innerText = `${monthTotal}`;
    result_day.innerText = `${dayTotal}`
  }
}

btn.addEventListener("click", calculate);

