import Item from "../models/Item";

import { FlexItemProps } from "../types/flexItemProps";

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

const bestOfElectronics: Array<FlexItemProps> = [
  {
    id: 1,
    title: 'Printers',
    subtitle: 'From $ 100',
    detail: 'HP & More',
    img: '/images/bestOfElectronics/img1.jpeg',
  },
  {
    id: 2,
    title: 'First Ever Premium Power Banks',
    subtitle: 'Show Now',
    detail: 'Realme, Mi & More',
    img: '/images/bestOfElectronics/img2.jpeg',
  },
  {
    id: 3,
    title: 'Monitors',
    subtitle: 'From ₹ 10,000',
    detail: 'Lenovo',
    img: '/images/bestOfElectronics/img3.jpeg',
  },
  {
    id: 4,
    title: 'Laptops',
    subtitle: 'From ₹ 10,000',
    detail: 'Lenovo',
    img: '/images/bestOfElectronics/img4.jpeg',
  },
  {
    id: 5,
    title: 'Headphones',
    subtitle: 'From ₹ 10,000',
    detail: 'Lenovo',
    img: '/images/bestOfElectronics/img5.jpeg',
  },
  {
    id: 6,
    title: 'Smart Watches',
    subtitle: 'From ₹ 10,000',
    detail: 'Lenovo',
    img: '/images/bestOfElectronics/img1.jpeg',
  },
  {
    id: 7,
    title: 'Smartphones',
    subtitle: 'From ₹ 10,000',
    detail: 'Lenovo',
    img: '/images/bestOfElectronics/img2.jpeg',
  },
  {
    id: 8,
    title: 'Speakers',
    subtitle: 'From ₹ 10,000',
    detail: 'Lenovo',
    img: '/images/bestOfElectronics/img3.jpeg',
  },
  {
    id: 9,
    title: 'Smart TVs',
    subtitle: 'From ₹ 10,000',
    detail: 'Lenovo',
    img: '/images/bestOfElectronics/img4.jpeg',
  },
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


export { crouselData, gridItems, bestOfElectronics};
