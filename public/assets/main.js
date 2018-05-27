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

$(document).on('click', '.toggle-isComplete', function(event){

  event.preventDefault();
  
  let id = $(this).data('id');

  let isCompleteStatus = $(this).data('iscomplete');

  let update = {
    isComplete: isCompleteStatus
  };

  $.ajax("/api/list/"+id, 
  {
    type: "PUT",
    data: update
  }).then(function(){
    console.log("updated item # " + id);
    location.reload();
  })
})