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
  scrollBarWidth = 'none',
}: CSSProps) {

  const style = {
    container: {
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
      scrollbarWidth: scrollBarWidth
    }
  }

    return (<div style={style.container}>
      {bestOfElectronics.map((item, index) => <FlexItem key={index} item={item} />)}
    </div>)
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

      <div  
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ width: '180px', height: '180px', 
      objectFit: 'contain', transform: hover ? 'scale(1.04)' : 'scale(1)',
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
