import styles from './layout.module.css'
import { gridItems, crouselData } from '../../const/gridData';
import Crousel from '../crousel/crousel';
import Navbar from '../navigation/navBar';
import Grid from '../grid/grid';

const style = {
mainContainer: {
width: '100%',
       display: 'flex',
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
function FlexBox({gridItems, style}) { 
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

const crouselItems = [
  {
    id: 1,
    title: 'first',
    img: 'https://picsum.photos/200/300',
    alt: 'first',
    selected: false,
  },
  {
    id: 2,
    title: 'second',
    img: 'https://picsum.photos/200/300',
    alt: 'second',
    selected: true,
  },
]

function Flex({items, style}) {
  return (
    <div style={style.mainContainer}>
      {items.map((item) => (
        <div key={item.id} style={style.flexItem}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          </p>
        </div>
      ))}
    </div>
  )
}

// <Crousel items={crouselData} width='100%' height='30vh' />
export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <FlexBox gridItems={gridItems} style={style} />
        <Crousel />
        <Grid height='45vh' width='100vw' />
        <main>{children}</main>
      </div>
    </>)
}


