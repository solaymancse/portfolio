import './scrollup.css'

export const Scrollup = () => {

  window.addEventListener("scroll", function(){
    const scrollUp = document.querySelector('.scrollup');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove("show-scroll")
  })

  const topScroll = ()=> {
    window.scrollTo({
      top: 0,
      behavior:'smooth',
  });
  }
  return (
   <button  className="scrollup" onClick={topScroll}>
    <i className="uil uil-arrow-up scroll_icon"></i>
   </button>
  )
}
