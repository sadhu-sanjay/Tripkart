import { crouselData } from '../../const/gridData';
import { useState , useEffect } from 'react'
import animations from './scratchPad.module.css'

const style = {

  container: {
    width: '98%',
    margin: '1%',
    height: '280px',
    backgroundColor: 'blue',
    position: 'relative',
    cursor: 'pointer',
  },

  mainContent: {
    width: '100%',
    height: '290px',
    overflow: 'hidden',
    crouselContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      width: '100%',
      height: '280px',
      backgroundColor: 'red',
      position: 'relative',
      flexDirection: 'column',
      scrollbarWidth: 'none',
      flexWrap: 'wrap',
      imgDiv: {
        width: '100%',
        backgroundColor: 'green',
        height: '280px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        img: {
          minWidth: '1680px',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transformOrigin: 'center',
        },
      },
    }
  },

  leftButton: {
    padding: '0',
    width: '3%',
    margin: 'none',
    display: 'inline-block',
    position: 'absolute',
    left: '0',
    top: 'calc(50% - 3rem)',
    borderSizing: 'border-box',
    height: '6rem',
    borderRadius: '0 3px 3px 0',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    backgroundImage: 'URL(https://img.icons8.com/sf-black-filled/64/null/back.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  rightButton: {
    padding: '0',
    width: '3%',
    margin: 'none',
    display: 'inline-block',
    position: 'absolute',
    right: '0',
    top: 'calc(50% - 3rem)',
    borderSizing: 'border-box',
    height: '6rem',
    borderRadius: '3px 0 0 3px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    backgroundImage: 'URL(https://img.icons8.com/sf-black-filled/64/null/forward.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}

function Crousel() {

  const [ selectedIndex , setSelectedIndex ] = useState(0)
  const arrayCount = crouselData.length
  let interval: number = 0

  useEffect(() => {
    startInterval()


    return () => clearInterval(interval);
  }, [selectedIndex]);

  /**
   * Start of AutoScrolll
   */ 
  function startInterval() {
    interval = setInterval(() => {
      onClickNext()
    }, 3000);
  }

  function onClickNext() {

    let newIndex = selectedIndex + 1
    if (newIndex == arrayCount) {
      newIndex = 0
    }

    setSelectedIndex(newIndex)
    animateToIndex(newIndex)
  }

  function stopAutoScroll() {
    clearInterval(interval)
  }

  function startAutoScroll() {
    startInterval()
  }
  /**
   * End of AutoScrolll
   */


  function animateToIndex(index: number) {

    const crousel = document.getElementById('crouselContainer')!
    crousel.style.transition = 'all 0.5s ease-in-out'
    crousel.style.transform = 'translateX(-' + index * 100 + '%)'
  }

  function onClickPrevious() {
    
    // Go to the previous Item
    let newIndex = selectedIndex - 1

    // if current slide is the first slide go to the last slide 
    if (newIndex < 0) {
      newIndex = arrayCount - 1 
    }

    setSelectedIndex(newIndex)
    animateToIndex(newIndex)
  }

  return (
    <>  
      <div style={style.container} >
        <div style={style.mainContent} onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
          <div id="crouselContainer" style={style.mainContent.crouselContainer} > 
            {crouselData.map(item => (
              <div key={item.id} style={style.mainContent.crouselContainer.imgDiv} >
                <img 
                  id="img"
                  src={item.img}
                  key={item.id} 
                  style={style.mainContent.crouselContainer.imgDiv.img}/>
              </div>
            ))}
          </div>
        </div>        

        <div>
          <button style={style.leftButton} onClick={() => onClickPrevious()} />
        </div>
        
        <div>
          <button style={style.rightButton} onClick={() => onClickNext()} />
        </div>

      </div>
    </>
  )
}

export function fetchCrouselItem() {

  // return json data after 2 seconds 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(crouselData)
    }, 1000)
  })

}

export default Crousel;

