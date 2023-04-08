import { crouselData } from '../../const/gridData'
import { Flexbox }
from '../flexbox/flexbox'
import { CSSProps } from '../../const/const'

function Grid({ backgroundColor, overflow, children, flexDirection, flexWrap, justifyContent, alignItems, alignContent, flex, order, 
                                flexGrow, flexShrink, alignSelf, width, height, margin, padding }: CSSProps) {


  const style = {
    container: {
      width: `${width}`,
      height: `${height}`,
      margin: margin,
      boxSizing: 'border-box',
      backgroundColor: backgroundColor,
      overFlow: 'hidden',
    },
    grid: {
      height: '100%',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 5fr',
      backgroundColor: 'gray',
    },
    gridItem1: {
      backgroundColor: 'white',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'URL(/images/secondCrousel/img1.webp)',
      backgroundPosition: 'bottom',
      backgroundSize: 'contain',
      padding: '1rem',
      repeat: 'noRepeat',
      border: '1px solid #ccc',
      color: 'black',
      button: {
        backgroundColor: '#2874f0',
        color: 'white',
        padding: '0.5rem 1rem',
        fontSize: '1.2rem',
      },
    },
    gridItem2: {
      overflow: 'scroll',
      backgroundColor: 'green',
    },
  }

  const flexData = crouselData.map((item) => (
    <div style={{
      backgroundColor: 'blue',
      padding: '10px',
      margin: '10px',
    }}>
      <img src={item.img} alt={item.alt} style={{width: '400px', height: '400px'}} />
      {item.title} 

    </div>
  ))
  flexData.push(...flexData)

  return (
    <div style={style.container}>
      <div style={style.grid}>
        <div style={style.gridItem1}>
          <h3> Today's Fashion Deals </h3>
          <a>
            <button style={style.gridItem1.button}> View All </button>
          </a>
        </div>
        <div style={style.gridItem2}>
          <div style={{
            height: '100%',
            width: '100%',
            overflow: 'scroll',
            backgroundColor: 'blue',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', 
            boxSizing: 'border-box'
          }}>
            {flexData.map((item) => ( 
              // <div style={{ height: '100%', backgroundColor: 'blue', padding: '10px', margin: '10px' }}>
              //   <img src={`https://picsum.photos/400/400?random=${Math.random()}`} alt={item.alt} 
              //     style={{ width: '100%', height: '100%' }} />
              // </div> 
              <div
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'pink',
                padding: '10px',
                margin: '10px'
              }}>

              </div>
            ))}
          </div>
          {/*
          <Flexbox backgroundColor='gray'
            overflow='scroll' 
            height='100%'
            width='100%'
            children={flexData}
            flexDirection='row'
            justifyContent="space-around"
            alignItems='center'
            boxSizing='border-box' />
          */}
        </div>
      </div>
    </div>
  )

}

export default Grid


