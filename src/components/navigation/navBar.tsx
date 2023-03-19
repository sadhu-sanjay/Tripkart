import { NavItem } from '../../models/NavItem'
import navItems from '../../const/navData';

const styles: any = {
  navBar: {
    height: '4rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2370f4',
    boxShadow: '0 1px 1px 0 rgba(0,0,0,.16)',
  },

  navBarLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navBarLink: {
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
  return (
      <nav style={styles.navBar}>
        <div style={styles.navBarLogo}>
          <img src={styles.img.src} alt="logo" style={styles.img} />
          <h4>Website</h4>
        </div>
        <ul style={styles.navBarLinks}>
        {navItems.map((item: NavItem) => (
          <li key={item.key} style={{...styles.navBarLink, ...item.style}}>{item.label} </li>
          ))}
        </ul>
      </nav>
  )
}
