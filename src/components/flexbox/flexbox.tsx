import CSSProps from "../../const/const"
import { FlexItemProps } from "../../types/FlexItemProps"
import { bestOfElectronics } from "../../const/hardCodedData"
import React from "react"


function Flexbox({
  width = '100%',
  height = '100%',
  overflow = 'scroll',
  backgroundColor = 'red',
  flexDirection = 'row',
  flexWrap = 'nowrap',
  justifyContent = 'space-between',
  boxSizing = 'border-box',
  alignItems = 'baseline',
  margin = '0px',
  padding = '0px',
  scrollbarWidth = 'none',

}: CSSProps ) {
  
  const [showRightButton , setShowRightButton] = React.useState(true)
  const [showLeftButton , setShowLeftButton] = React.useState(false)
  const flexboxRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    
    flexboxRef.current?.scrollTo(0, 0)

  }, [])
  

  const style = {
    flexContainer: {
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    flexbox: {
      display: 'flex',
      flexDirection: flexDirection,
      flexWrap: flexWrap,
      justifyContent: justifyContent,
      alignItems: alignItems,
      width: width,
      height: height,
      margin: margin,
      padding: padding,
      backgroundColor: backgroundColor,
      boxSizing: boxSizing,
      overflow: overflow,
      flexShrink: 0,
      scrollbarWidth: scrollbarWidth,
    },

  }

  function scrollElement(element: HTMLDivElement, by: number) {

    console.log('scroll width ', element.scrollWidth)
    console.log('scrol Left', flexboxRef.current?.scrollLeft)
    console.log('offset width', flexboxRef.current?.offsetWidth)
    console.log('client width', flexboxRef.current?.clientWidth)
    

    const scrollWidth = flexboxRef.current?.scrollWidth ?? 0
    const scrollLeft = flexboxRef.current?.scrollLeft ?? 0
    const clientWidth = flexboxRef.current?.clientWidth ?? 0
    const offsetWidth = flexboxRef.current?.offsetWidth ?? 0

    element.scrollBy({
      top: 0,
      left: by,
      behavior: 'smooth'
    })

    if (clientWidth + scrollLeft + by >= scrollWidth) {

      setShowRightButton(false)
      setShowLeftButton(true)
      return
    } else if (scrollLeft + by <= 0) {

      setShowLeftButton(false)
      setShowRightButton(true)
      return
    }
    

  }
    

          



    

  


  function onButtonClick(button: HTMLButtonElement) {

    const offsetWidth = flexboxRef.current?.clientWidth ?? 0
    
    switch (button.id) {
      case 'leftButton':

        scrollElement(flexboxRef.current!, -offsetWidth)
        break;
      case 'rightButton':

        scrollElement(flexboxRef.current!, offsetWidth)
        break
    
      default:
        break;

    }
  }

  return (
    <div >
      <div style={style.flexContainer} >
        <LeftButton callback={onButtonClick} show={showLeftButton} />
        <div style={style.flexbox} ref={flexboxRef} >
          {bestOfElectronics.map((item, index) =>
            <FlexItem key={index} item={item}
            />)}
        </div>
        <RightButton  callback={onButtonClick} show={showRightButton} />

      </div>
    </div>
  )
}

function LeftButton({callback, show}: { callback: (button: HTMLButtonElement) => void; show: boolean; }) {

      let leftButtonRef = React.useRef<HTMLButtonElement>(null)

      const style = {
        leftButton: {
          zIndex: 1,
          display: show ? 'inline-block' : 'none',
          left: '0',
          top: 'calc(50% - 3rem)',
          position: 'absolute',  
          padding: '0',
          width: '2.8rem',
          margin: 'none',
          borderSizing: 'border-box',
          height: '6rem',
          borderRadius: '0 3px 3px 0',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          backgroundColor: 'white',
          backgroundImage: 'URL(/ui/chevron_left_48.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        },
      }

      return (<button ref={leftButtonRef} id="leftButton" onClick={() => callback(leftButtonRef.current!) } style={style.leftButton}></button>)

}

function RightButton({callback, show}: {callback: (button: HTMLButtonElement) => void; show: boolean}) {

  let rightButtonRef = React.useRef<HTMLButtonElement>(null)
  
  const style = {
    leftButton: {
      zIndex: 1,
      display: show  ? 'inline-block' :  'none',
      right: '0',
      top: 'calc(50% - 3rem)',
      position: 'absolute',  
      padding: '0',
      width: '2.8rem',
      margin: 'none',
      borderSizing: 'border-box',
      height: '6rem',
      borderRadius: '3px 0 0 3px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'white',
      backgroundImage: 'URL(/ui/chevron_right_48.svg)',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  }

  return (<button id="rightButton" ref={rightButtonRef} onClick={() => callback(rightButtonRef.current!) } style={style.leftButton}></button>)

}


function FlexItem({ item }: { item: FlexItemProps }) {

  const style = {
    
    text: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'black',
      fontSize: '14px',
      fontWeight: '500',
    },
    title: {
      fontSize: '1rem',
      color: 'black',
      width: '100%',
      // dont put text in second line
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',

      height: '100%',
      display: 'block',
    },
    subTitle: {
      fontSize: '1rem',
      color: 'black',
    },
    link: {
      color: '#2874f0',
      textDecoration: 'none',
      fontWeight: 'normal',
    },
    detail: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: 'black',
    }
  }

  const [hover, setHover] = React.useState(false)

  return (
    
    <div style={{height: 'auto', width: '200px', backgroundColor: 'white', padding: '1rem'}}>

      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
        width: '180px',
        height: '180px',
        objectFit: 'contain',
        transform: hover ? 'scale(1.04)' : 'scale(1)',
      }}>
        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={item.img} alt={item.alt} />

      </div>
      <div style={style.text}>
        <div style={style.title}>
          {item.title}
        </div>
        <div style={style.subTitle}>
          <a style={style.link}>  {item.subtitle} </a>
        </div>
        <div style={style.detail}>
          {item.detail}
        </div>
      </div>
    </div >
  )
}


export { Flexbox, FlexItem }


