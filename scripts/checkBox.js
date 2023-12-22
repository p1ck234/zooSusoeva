const selectAllCheckbox = document.getElementById("selectAll");
const checkboxes = document.querySelectorAll(".basket__list__checkinp");

selectAllCheckbox.addEventListener("click", () => {
  const isChecked = selectAllCheckbox.checked;

  checkboxes.forEach((checkbox) => {
    checkbox.checked = isChecked;
  });
});
