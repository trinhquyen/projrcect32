
$('#name').blur(function(){
  if($(this).val().trim()==='')
  {
    $(this).parent().addClass('error')
  }
  else
  {
    $(this).parent().removeClass('error')
  }
});
$('#email').blur(function(){
  var re = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  var emailFormat = re.test($("#email").val().trim()); // This return result in Boolean type
  if (emailFormat) {
    $(this).parent().removeClass('error')
  }
  else
  {
    $(this).parent().addClass('error')
  }
});
