function setAge() {
  var today = new Date();
  var birthDate = new Date('09/07/2001');
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  var list = document.getElementById('list2');
  list.innerHTML = `<li><strong>Age:</strong> ${age}</li>` + list.innerHTML;
}
