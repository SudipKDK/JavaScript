const result = document.getElementById("result");

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    if (value === "C") {
      result.value = "";
    } else if (value === "=") {
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = "error";
      }
    }else{
        result.value+=value;
    }
  });
});
