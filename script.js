document.getElementById('briefForm').onsubmit=e=>{
e.preventDefault();
const d=new FormData(e.target);
let m='FORM BRIEF MINS MEDIA\n\n';
d.forEach((v,k)=>m+=k+': '+v+'\n');
window.open('https://wa.me/6281234567890?text='+encodeURIComponent(m));
};