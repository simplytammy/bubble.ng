const btnDiv = document.querySelector('.pd-btn');

document.body.addEventListener('click',displayAlert);
const form = document.querySelector('.form-show');
const img = document.qyerySelector('.')

function displayAlert(e){
  if(e.target.classList.contains('btn-hire')){
    // console.log(e.target)
    form.style.display="block";
  }
}

