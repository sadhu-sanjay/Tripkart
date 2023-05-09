import styles from './layout.module.css'
import { gridItems, crouselData } from '../../const/hardCodedData';
import Crousel from '../crousel/crousel';
import { Grid } from '../grid/grid';
import { CategoryBar } from '../category/CategoryBar';
import { HeaderMenuColored } from '../header/header';

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

import data  from '../header/attributes.json'
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.container}>
        <HeaderMenuColored links={data.links} />
        <CategoryBar gridItems={gridItems} style={style} />
        <Crousel height='280px' width='99%'/>
        <Grid height='310px' width='99%' />
      </div>
    </>)
}


function Testbox() {

  return (
    // background color in tailwind css  width: '100%', height: '100%'
    // w-full is not working in tailwind css
    // https://tailwindcss.com/docs/width
    <div  className='bg-pink-500 w-full h-1/3'>
    </div>
  )

}
