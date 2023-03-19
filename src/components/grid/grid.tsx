import Crousel from '../crousel/crousel'

export default function Grid({ height, width }) {

  const style = {
    container: {
      width: `${width}`,
      height: `${height}`,
      margin: '0 .5%',
      backgroundColor: 'blue',
      overFlow: 'scroll',
    },
    grid: {
      height: '100%',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '20vw 1fr 20vw',
      gap: '1rem',
      backgroundColor: 'red',
    },
    gridItem1: {
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'URL(/images/secondCrousel/img1.webp)',
      backgroundPosition: 'bottom',
      backgroundSize: 'contain',
      padding: '1rem',
      repeat: 'noRepeat',
      border: '1px solid #ccc',
      backgroundColor: 'white',
      color: 'black',
    },
    gridItem2: {
      padding: '1rem',
      border: '1px solid #ccc',
      backgroundColor: 'green',
    },
    gridItem3: {
      padding: '1rem',
      border: '1px solid #ccc',
      backgroundColor: 'green',
    },
  }

  return (
  <div style={style.container} >
    <h1> sanjay </h1>
    {/*
    <div style={style.container}>
      <div style={style.grid}>
        <div style={style.gridItem1}> 
          <h2> Best of </h2>
          <a>
            <button> View All </button>
          </a>
        </div>
        <div style={style.gridItem2}>
        </div>
        <div style={style.gridItem3}>
          <h4> Last </h4>
        </div>
      </div>
    </div>
    */}
  </div>
)

}
