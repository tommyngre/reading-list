function checkSectionContents() {

  if ($('#havent-read').find('li').length < 1) {
    console.log("havent-read");
    let html = `<h3 class="none-yet">None yet.</h3>`
    $('#havent-read').append(html);
  };
  if ($('#have-read').find('li').length < 1){
    console.log("have-read");
    let html = `<h3 class="none-yet">None yet.</h3>`
    $('#have-read').append(html);
  };
}

function showErr(errMessage) {
  $('#item-name').css('color', 'red').val(errMessage);
  setTimeout(function () {
    $('#item-name').css('color', 'black').val("");
  }, 1000);
}

function validate(entry) {
  let isValid = true;
  let errMessage;
  //enforce non null
  if (entry == "") {
    isValid = false;
    showErr("Enter something, dude :P")
  }
  //enforce len
  if (entry.length > 250) {
    isValid = false;
    showErr("255 character max, dude :P")
  }
  return isValid;
}

$(document).on('click', '#add', function () {
  event.preventDefault();

  //validate entry
  if (!validate($('#item-name').val().trim())) {
    return;
  }

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
  console.log("newCompleteStatus " + newCompleteStatus);
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

$(document).ready(function () {
  //handle if sections are null
  setTimeout(function () {
    checkSectionContents();
  }, 100);
});