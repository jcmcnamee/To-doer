'use strict'

const modal = $(".modal");
const newTaskBtn = $(".add-task");
const exitModalBtn = $(".exit-modal");
const delTaskBtn = $(".rm-task");
const editTaskBtn = $(".edit-task");
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

delTaskBtn.click(function() {
    let taskId = $(this).attr("id");
    $.ajax({
        type: "POST",
        url: "/delTask", 
        data: { taskId: taskId },
        success: function() {
            // Update the front-end list here, e.g., by removing the task element from the DOM
            $(`.task-container#${taskId}`).remove();
          },
    });
});

editTaskBtn.click(function() {
    let taskId = $(this).attr("id");
    $.ajax({
        type: "POST",
        url: "/delTask", 
        data: { taskId: taskId },
        success: function() {
            // Update the front-end list here, e.g., by removing the task element from the DOM
            
          },
    });
});