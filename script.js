// Your code here.
let isMouseDown = false;
let startX, scrollLeft;
let items=document.querySelector(".items");
items.addEventListener("mousedown",function(e){
	isMouseDown = true;
  startX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
}) ;
function endDrag() {
  isMouseDown = false;
}
function drag(e) {
  if (!isMouseDown) return;
  e.preventDefault();

  const x = e.pageX - items.offsetLeft;
  const walk = (x - startX) * 2;
 items.scrollLeft = scrollLeft - walk;
}
document.addEventListener('mouseup', endDrag);
document.addEventListener('mousemove', drag);