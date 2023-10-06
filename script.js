function calculate() {
  const day = document.querySelector("#day");
  const month = document.querySelector("#month");
  const year = document.querySelector("#year");
  const btn = document.querySelector("#btn");

  const result_year = document.querySelector("#result_year");
  const result_months = document.querySelector("#result_months");
  const result_day = document.querySelector("#result_day");

  let dateNow= new Date( )



  if (day.value == "" || month.value == "" || year.value == "") {
   
  }else{
    const datePass = new Date(day.value/month.value/year.value)
    



    console.log(dataDay)
    
  }

  
}

btn.addEventListener("click", calculate);
