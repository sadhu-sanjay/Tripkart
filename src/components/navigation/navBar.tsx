import { NavItem } from '../../models/NavItem'
import navItems from '../../const/navData';
import { MdKeyboardArrowDown, MdSearch } from 'react-icons/md';
import { useState } from 'react';
import { Demo } from '../scratchPad'
import { Button, Input } from '@mantine/core'

const styles: any = {

  navBar: {
    height: '4rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#da4332',
    boxShadow: '0 1px 1px 0 rgba(0,0,0,.16)',
  },

  navBarLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navBarLink: {
    position: 'relative',
    listStyle: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    color: '#000',
    textDecoration: 'none',
    padding: '0 1rem',
  },

  img: {
    src: 'logo.png',
    width: '3rem',
    float: 'left',
  },

  navBarLogo: {
    fontSize: '1.5rem',
    fontWeight: 700,
    img: 'logo.png',
    color: '#000',
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

export default function NavBar() {

  const [show, setShow] = useState(false);

  return (<nav style={styles.navBar}>
    <div style={styles.navBarLogo}>
      <img src={styles.img.src} alt="logo" style={styles.img} />
      <h4 style={{ color: '#fff', paddingRight: '1rem' }} >Goswami's </h4>
    </div>
    <div >
      <Input placeholder="Search" icon={<MdSearch size={21} />}
      />
    </div>
    {navItems.map((item: NavItem) => (
      <Demo key={item.key} disabled={item.children} text={item.label} />
    ))}

  </nav>)

  return (
    <nav style={styles.navBar}>
      
      <ul style={styles.navBarLinks}>
        {navItems.map((item: NavItem) => (
          <li key={item.key}
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            style={{
              ...styles.navBarLink,
              ...item.style,
            }}>
            {item.children ? <Demo text={item.label} /> : <Button>{item.label}</Button>}
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Dropdown({ item }: { item: NavItem }) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'red',
      display: 'flex',
      top: '100%',
      left: '50%',
      transform: 'translate(-50%, 0)',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '0.2rem',
      boxShadow: '0 2px 2px 0 rgba(0,0,0,.16)',
      width: '12rem',
    }}>
      <div>
        {item.children?.map((dropdownItem: NavItem) => (
          <div key={dropdownItem.key} >
            <div className='flex flex-row gap-6 px-3 py-4 border-b-2' >
              <div> <dropdownItem.icon style={{ all: 'unset', verticalAlign: 'middle' }} /> </div>
              <div style={{ whiteSpace: 'nowrap' }}> {dropdownItem.label} </div>
            </div>
          </div>
        ))}
      </div>
    </div>)
}
