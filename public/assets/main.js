$(document).on('click','#add', function(){

  event.preventDefault();
  let obj = {
    itemName: $('#item-name').val().trim(), 
    isComplete: false
  } 

  $.post('/api/new', obj, function(data){
    console.log("created " + obj.itemName);
  });
});