let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // Add your code here
  let count = 0;

  let flag = 0;

  console.log("============Form Submission===========");
  if (form.username.value == 0) {
    console.log("User Name : No Submission");
    count++;
  } else console.log("User Name : ", form.username.value);
  if (form.email.value == 0) {
    console.log("Email : No Submission");
    count++;
  } else console.log("Email : ", form.email.value);

  var ele = document.getElementsByClassName("form-check-input");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      flag = 1;
      console.log("Newsletter : ", ele[i].name);
    }
  }
  if (flag == 0) {
    count++;
    console.log("Newsletter : No Submission");
  }
  if (form.date.value == 0) {
    console.log("Date : No Submission");
    count++;
  } else console.log("Date : ", form.date.value);

  if (count == 4) {
    console.log("You cannot submit an empty form!");
  }
}
