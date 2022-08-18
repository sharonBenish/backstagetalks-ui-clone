const issue1 = document.getElementById('issue1');
const issue2 = document.getElementById('issue2');
const issue3 = document.getElementById('issue3');
const issue4 = document.getElementById('issue4');
const issue5 = document.getElementById('issue5');
const issue6 = document.getElementById('issue6');
const main = document.querySelector('.main');
const navlinks = document.querySelectorAll('nav a');
//console.log(navlinks)
window.addEventListener('load', ()=>{
    document.body.className = "issue6"
    main.scrollTo(0,0)
})

main.addEventListener('scroll', ()=>{
    const scrollPosition = main.scrollTop;
    resetActiveLinks();
   if (scrollPosition >= issue1.offsetTop){
    document.body.className = "issue1";
    document.querySelector('a[href="#issue1"]').classList.add('active')
   }
   else if (scrollPosition >= issue2.offsetTop){
    document.body.className = "issue2";
    document.querySelector('a[href="#issue2"]').classList.add('active')
   }
   else if (scrollPosition >= issue3.offsetTop){
    document.body.className = "issue3";
    document.querySelector('a[href="#issue3"]').classList.add('active')
   }
   else if (scrollPosition >= issue4.offsetTop){
    document.body.className = "issue4";
    document.querySelector('a[href="#issue4"]').classList.add('active')
   }
   else if (scrollPosition >= issue5.offsetTop){
    document.body.className = "issue5"
    document.querySelector('a[href="#issue5"]').classList.add('active')
   }
   else if (scrollPosition >= issue6.offsetTop){
    document.body.className = "issue6"
    document.querySelector('a[href="#issue6"]').classList.add('active')
   }
})

function resetActiveLinks(){
    navlinks.forEach((link) =>{
        link.classList.remove('active')
    })
}