

import styles from './layout.module.css'
import { gridItems, crouselData } from '../../const/hardCodedData';
import Crousel from '../crousel/crousel';
import Navbar from '../navigation/navBar';
import { Grid } from '../grid/grid';
import { Flexbox } from '../flexbox/flexbox';

const style = {
  mainContainer: {
    width: '100%',
    display: 'flex',
    margin: '0 auto',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    maxWidth: '1280px',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  flexItem: {
    color: 'white',
    padding: '12px 8px',
  },
  imgDiv: {
    width: '64px',
    height: '64px',
  },
  text: {
    color: 'black',
    fontSize: '14px',
    fontWeight: '500',
  },
  img: {
    color: 'green',
    width: '100%',
    height: '100%',
  },
}

/**
 *  FlexBox Layout 
 *  @param gridItems - array of objects with image and text
 *  @param style - object with styles for layout
 * */
function CategoryBar({gridItems, style}) { 
  return (
    <div style={style.mainContainer}>
      <div style={style.container}>
        {gridItems.map((item) => (
          <div key={item.id} style={style.flexItem}>
            <div style={style.imgDiv}>
              <img style={style.img} src={item.img} alt={item.alt} />
            </div>
            <div style={style.text}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const crouselStyle = {
  mainContainer: {
    display: 'flex',
    backgrowundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'scroll',
  },

  flexItem: {
    color: 'white',
    backgroundColor: 'green',
    margin: '1rem',
    height: '142px',
    width: '100%',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <CategoryBar gridItems={gridItems} style={style} />
        <Crousel height='280px' width='99%'/>
        <Grid margin='0 0 8px 0' height='310px' width='99%' />
      </div>
    </>)
}

