const issue1 = document.getElementById('issue1');
const issue2 = document.getElementById('issue2');
const issue3 = document.getElementById('issue3');
const issue4 = document.getElementById('issue4');
const issue5 = document.getElementById('issue5');
const issue6 = document.getElementById('issue6');
const posters = Array.from (document.querySelectorAll('.poster'));
window.addEventListener('scroll', ()=>{
    const scrollPosition = document.documentElement.scrollTop;
   if (scrollPosition >= issue1.offsetTop){
    document.body.className = "issue1"
   }
   else if (scrollPosition > issue2.offsetTop){
    document.body.className = "issue2"
   }
   else if (scrollPosition >=issue3.offsetTop){
    document.body.className = "issue3"
   }
   else if (scrollPosition > issue4.offsetTop){
    document.body.className = "issue4"
   }
   else if (scrollPosition > issue5.offsetTop){
    document.body.className = "issue5"
   }
   else if (scrollPosition > issue6.offsetTop){
    document.body.className = "issue6"
   }
})
console.log(posters)