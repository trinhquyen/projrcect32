var dayso = []
$('#sinhdayso').click(function() {
  let n = parseInt($('#inputNumber').val()) 
  dayso = []
  var text = ''
  var max = 0
  var min = 0
  for(var i = 0; i<n; i++) {
    dayso.push(Math.floor(Math.random() * 20) + 1)
  }
  min = dayso[0]
  for(var i = 0; i<n; i++) {
    if(dayso[i]>max)
    {
      max = dayso[i]
    }
    if(dayso[i]<min)
    {
      min = dayso[i]
    }
    text += dayso[i]+ ' '
  }
  $(".songaunhien").html(text)
  $("#gtln").html(max)
  $("#gtnn").html(min)

});
$('#tinhtong').click(function() {
  let n = dayso.length
  var tong = 0
  for(var i = 0; i<n; i++) {
    tong += dayso[i]
  }
  $("#tongmang").html(tong)

});