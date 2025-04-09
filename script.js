const buttonEle = document.querySelector('.btn')
const inputEle  = document.getElementById('QRtext')
const imageEle = document.getElementById('QR_img')
const boxEle = document.getElementById('img_box')

buttonEle.addEventListener('click', ()=>{
  if(inputEle.value.length > 0){
    imageEle.src =  `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputEle.value}`

    boxEle.classList.add('show-img')
  }
})