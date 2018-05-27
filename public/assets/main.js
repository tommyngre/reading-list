$(document).on('click', '#add', function () {
  event.preventDefault();

  let obj = {
    itemName: $('#item-name').val().trim(),
    is_complete: false
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
  console.log(this);
  console.log("existing complete status " + $(this).data('iscomplete'));
  let newCompleteStatus = !($(this).data('iscomplete'));
  console.log("newCompleteStatus "+newCompleteStatus);
  let that = this;

  
  let update = {
    isComplete: Boolean(newCompleteStatus)
  };

  $.ajax("/api/list/" + id,
    {
      type: "PUT",
      data: update
    }).then(function () {
      $(that).data('iscomplete', newCompleteStatus);
      location.reload();
    })
})