//slideData = {red: 'red', green: 'green', blue: 'blue'}

slideData = ['red', 'green', 'blue', 'yellow']

const slide = document.querySelector('.slide-container__slide')
slide.style['background-color'] = slideData[0]
let num = 0;

//let previousNum = slideData.length - 1


const previousClick =() => {
    const nextBtn = document.querySelector('.carousel-previous')
    nextBtn.addEventListener('click', () => {
        num--
        previous();
        console.log(num)
    });
}
previousClick();

const previous = () => {
    slide.style['background-color'] = `${slideData[num]}`
    if (num === -1) {
      slide.style['background-color'] = `${slideData[slideData.length - 1]}`
      num = slideData.length - 1;
    }
}

  const nextClick = () => {
    const nextBtn = document.querySelector('.carousel-next')
    nextBtn.addEventListener('click', () => {
        num++
        next();
        console.log(num)
    });
  }
nextClick();
  
  const next = () => {
    slide.style['background-color'] = `${slideData[num]}`
    if (num === slideData.length) {
      slide.style['background-color'] = `${slideData[0]}`
      num = 0; }


  }

loopThroughSlides = () => {
  let delay = 1000

    for (let i = 0; i < slideData.length; i++) {
      if (i) {
        delay += 1000
      }
      setInterval(() => {
        slide.style['background-color'] = `${slideData[i]}`

      }, delay)
      if (delay == 30000) {
        break
      }
    }

}

loopThroughSlides();


  


  