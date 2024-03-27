import styles from './layout.module.css'
import { gridItems, crouselData } from '../../const/hardCodedData';
import Crousel from '../crousel/crousel';
import { Grid } from '../grid/grid';
import { CategoryBar } from '../category/CategoryBar';
import { HeaderMenuColored } from '../header/header';

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


import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.container}>
        {/* <HeaderMenuColored links={data.links} /> */}
        <CategoryBar gridItems={gridItems} />
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
