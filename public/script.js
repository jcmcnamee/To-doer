const modal = $(".modal");
const newTaskBtn = $(".add-task");
const exitModalBtn = $(".exit-modal")


newTaskBtn.css("cursor", "pointer");
newTaskBtn.click(function() {
    modal.css("display", "block");
});

exitModalBtn.css("cursor", "pointer");
exitModalBtn.click(function() {
    modal.css("display", "none");
});