function myFunction() {
  let text;
  let person = prompt("Nhập giờ:", "15");
  let time = parseInt(person)
  console.log(time);
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    if(time<12)
    {
      text = "Chào buổi sáng: Bây giờ là  " + time + " giờ";
    }
    else if(time<18)
    {
      text = "Chào buổi chiều: Bây giờ là  " + time + " giờ";
    }
    else {
      text = "Chào buổi tối: Bây giờ là  " + time + " giờ";
    }
  }
  $("#show").html(text)
}
myFunction()

