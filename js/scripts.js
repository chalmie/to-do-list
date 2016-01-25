function Task(item,note) {
  this.item = item;
  this.note = note;
}

$ (document).ready(function() {
  $("form#user-items").submit(function(){
    event.preventDefault();

    var userItem = $("input#new-item").val();
    var userNote = $("input#new-note").val();
    var newTask = new Task (userItem, userNote);

    $("ul#to-do").append("<li><span class='list'>" + newTask.item + ": " + newTask.note + "</span></li>");

    $("li").last().click(function() {
      $(this).remove();
    });


  });
});
