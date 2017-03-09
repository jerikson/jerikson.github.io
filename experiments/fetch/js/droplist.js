
var droplist = document.querySelectorAll(".droplist");
  console.log(droplist.length)
for (d = 0; d < droplist.length; d++) {

    droplist[d].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "inline-block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "inline-block";
        }
    }
}
