import { crouselData, bestOfElectronics} from '../../const/hardCodedData'
import CSSProps from '../../const/const'
import { FlexItemProps } from '../../types/flexItemProps'
import { Flexbox } from '../flexbox/flexbox'

function Grid({ backgroundColor, overflow, children, flexDirection, flexWrap, justifyContent, alignItems, alignContent, flex, order, 
                                flexGrow, flexShrink, alignSelf, width, height, margin, padding }: CSSProps) {

  const style: any = {
    container: {
      width: `${width}`,
      height: `${height}`,
      margin: margin,
      boxSizing: 'border-box',
      backgroundColor: backgroundColor,
    },
    grid: {
      height: '100%',
      width: '100%',
      display: 'flex',
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
      width: '80%',
      height: '100%',
      backgroundColor: 'white',
    },
  }


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
          <Flexbox overflow='scroll' alignItems='center' backgroundColor='white' />
        </div>
      </div>
    </div>
  )

}

export { Grid }


