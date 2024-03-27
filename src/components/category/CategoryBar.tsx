import { useEffect, useState } from "react";

/**
 *  FlexBox Layout 
 *  @param gridItems - array of objects with image and tex
 *  @param style - object with styles for layout
 * */
export function CategoryBar({gridItems}: {gridItems: any; }) {

  const style: any = {
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
      justifyContent: 'center',
      maxWidth: '1280px',
      gap: '12px',
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
  
  const [categories, setCategories] = useState([])

  function getCategories() {
    const query = `
      query {
        categories {
          id
          nm
          img
        }
      }
    `

    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(res => setCategories(res.data.categories))
      .catch(err => console.log(err))
      .finally(() => console.log('done'))

      
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <div style={style.mainContainer}>
      <div style={style.container}>
        {categories.map((item: any) => (
          <div key={item.id} style={style.flexItem}>
            <div style={style.imgDiv}>
              <img style={style.img} src={item.img} alt={item.alt} />
            </div>
            <div style={style.text}>{item.nm}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

