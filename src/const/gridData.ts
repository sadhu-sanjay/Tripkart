import Item from "../models/Item";

const data: Array<Item> = [
  {
    id: 1,
    title: 'Mobiles',
    img: '/images/tabbar/img1.png',
    label: 'Mobiles',
    alt: 'Mobiles',
  },
    {
    id: 2,
    title: 'Electronics',
    img: '/images/tabbar/img2.png',
    label: 'Electronics',
    alt: 'Electronics',
  },
]


const crouselData = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
    img: '/images/crousel/img1.jpg',
    selected: false,
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
    selected: true,
    img: '/images/crousel/img2.jpg',
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'Description 3',
    selected: false,
    img: '/images/crousel/img3.jpg',
  },
{
    id: 4,
    title: 'Title 4',
    description: 'Description 4',
    selected: false,
    img: '/images/crousel/img4.jpg',
  }, {
    id: 5,
    title: 'Title 5',
    description: 'Description 5',
    selected: false,
    img: '/images/crousel/img5.jpg',
  },{
    id: 6,
    title: 'Title 6',
    description: 'Description 6',
    selected: false,
    img: '/images/crousel/img6.webp',
  }
]



const gridItems = [
  {
    id: 1,
    title: 'Mobiles',
    description: 'This is item 1',
    img: '/images/tabbar/img1.png',
    style: {
      paddingLeft: '24px',
    }
  },
  {
    id: 2,
    title: 'Electronics',
    description: 'This is item 2',
    img: '/images/tabbar/img2.png'
  },
  {
    id: 3,
    title: 'Grocery',
    description: 'This is item 3',
    img: '/images/tabbar/img3.png'
  },
  {
    id: 4,
    title: 'Home',
    description: 'This is item 4',
    img: '/images/tabbar/img4.jpg'
  },
  {
    id: 5,
    title: 'Fashion',
    description: 'This is item 5',
    img: '/images/tabbar/img5.png'
  },
  {
    id: 6,
    title: 'Beauty, Toys & More',
    description: 'This is item 6',
    img: '/images/tabbar/img6.png'
  },
  {
    id: 7,
    title: 'Top Offers',
    description: 'This is item 7',
    img: '/images/tabbar/img7.png'
  },
  {
    id: 8,
    title: 'Appliances',
    description: 'This is item 8',
    img: '/images/tabbar/img8.png'
  },
  {
    id: 9,
    title: 'Two Wheelers',
    description: 'This is item 9',
    img: '/images/tabbar/img9.png'
  },
  {
    id: 10,
    title: 'Travel',
    description: 'This is item 10',
    img: '/images/tabbar/img10.png',
    style: {
      paddingRight: '24px',
    }
  },
];


const gridStyles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(20vw, 1fr))',
        overflow: 'scroll',
        gridColumnGap: '1rem',
    },
    card: {
        height: '120px',
        width: '90px',
        border: '1px solid #ccc',
        borderRadius: '5px'
    }
}


export { crouselData, gridItems, gridStyles , data};
