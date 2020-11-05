function setDefaultImageSizes(){
  let imgs = document.getElementsByTagName("img")

  for (let i=0; i<imgs.length; i++){
    let img = imgs[i]
    
    let interval = setInterval(function(){
      if (img.naturalHeight > 0){
        clearInterval(interval)
        
        let aspect = img.naturalWidth / img.naturalHeight
        let width = img.parentElement.getBoundingClientRect().width
        img.height = width / aspect
        img.style.backgroundColor = "rgb(235, 235, 235)"

        img.onload = function(){
          img.removeAttribute("height")
          img.style.backgroundColor = "unset"
        }
      }
    }, 10)
  }
}

$(window).on("guidedtrack:pageEnd", setDefaultImageSizes)