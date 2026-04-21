function show(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  setTimeout(()=>{
    document.getElementById(id).classList.add('active');
  },100);
}

let text="Aspiring Software Engineer";
let i=0;

function type(){
  if(i<text.length){
    document.getElementById("typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(type,60);
  }
}

type();