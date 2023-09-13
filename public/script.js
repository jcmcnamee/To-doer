'use strict'

const modal = $(".modal");
const newTaskBtn = $(".add-task");
const exitModalBtn = $(".exit-modal");
$(".btn").css("cursor", "pointer");

$('.task-checkbox').change(function () {
    $('#checkboxForm').submit();
});


newTaskBtn.click(function() {
    modal.css("display", "block");
});


exitModalBtn.click(function() {
    modal.css("display", "none");
});