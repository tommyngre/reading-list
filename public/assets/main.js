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

$(document).on('click', '.delete-item', function () {
  event.preventDefault();

  let id = $(this).attr('data-id');

  $.ajax("/api/list/" + id, 
  {
    type: "PUT,
    data: "
  })
  
}