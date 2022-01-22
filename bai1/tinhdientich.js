
$('#btn').click(function() {
  var bankinh = $("#bankinh").val()
  let r = parseInt(bankinh)
  let dientich = Math.round(Math.PI*r*r) 
  let chuvi = Math.round(Math.PI*r*2)
  $("#dientich").val(dientich)
  $("#chuvi").val(chuvi)

  console.log(dientich);
  
});