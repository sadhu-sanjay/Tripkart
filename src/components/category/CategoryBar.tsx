import { useEffect } from "react";

/**
 *  FlexBox Layout 
 *  @param gridItems - array of objects with image and tex
 *  @param style - object with styles for layout
 * */
export function CategoryBar({gridItems, style}: {gridItems: any; style: any}) {

    function getCategories() {

      fetch('http://35.246.13.119:3306/api/categories')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  
    useEffect(() => {
      getCategories();
    }, [])
  
  
    return (
      <div style={style.mainContainer}>
        <div style={style.container}>
          {gridItems.map((item: any) => (
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
  