$(document).on('click', '#add', function () {
  event.preventDefault();

  let obj = {
    itemName: $('#item-name').val().trim(),
    isComplete: false
  }

  $.post('/api/new', obj, function (data) {
  }).then(function () {

    console.log("created " + obj.itemName);

    location.reload();
  });
});

$(document).on('click', '.delete-item', function (event) {
  event.preventDefault();

  let id = $(this).data('id');

  $.ajax("/api/list/" + id,
    {
      type: "DELETE",
    }).then(function () {
      console.log("deleted item # " + id);
      location.reload();
    })

});

$(document).on('click', '.toggle-isComplete', function (event) {

  event.preventDefault();

  let id = $(this).data('id');

  //flip the complete status
  console.log($(this).data('iscomplete'));
  let newCompleteStatus = !($(this).data('iscomplete'));
  console.log(newCompleteStatus);
  let that = this;
  //this would probably be better to set in the then()

  let update = {
    isComplete: Boolean(newCompleteStatus)
  };

  $.ajax("/api/list/" + id,
    {
      type: "PUT",
      data: update
    }).then(function () {
      console.log(that);
      console.log("iscomplete "+$(that).data('iscomplete'));
      $(that).data('iscomplete', newCompleteStatus);
      console.log("iscomplete "+$(that).data('iscomplete'));
      console.log("updated item # " + id);
      //location.reload();
    })
})