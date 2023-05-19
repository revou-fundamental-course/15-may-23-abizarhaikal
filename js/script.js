function hitungLuas() {
  var sisiLuas = document.getElementById("sisi-luas").value;
  document.getElementsByClassName("result-luas").style.visibility="visible"
  document.getElementById("output-luas").innerText = sisiLuas;
  console.log(sisiLuas);
}
