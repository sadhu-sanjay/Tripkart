import { NavItem } from "../models/NavItem";
// import home icon from react icon
import { MdHome, MdPhone, MdSearch } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { FcFolder, FcHome } from 'react-icons/fc';

const homeItem: NavItem = {
  key: 'home',
  label: 'Home',
  path: '/',
  icon: MdHome,
  children: [
    {
      key: 'home-1',
      label: 'Home 1',
      path: '/home-1',
      icon: MdEdit
    },
    {
      key: 'home-2',
      label: 'Home 2',
      path: '/home-2',
      icon: MdHome
    },
    {
      key: 'home-3',
      label: 'Home 1',
      path: '/home-1',
      icon: MdHome
    },
    {
      key: 'home-4',
      label: 'Home 2',
      path: '/home-2',
      icon: MdHome
    }
  ],
};

const settingsItem: NavItem = {
  key: 'settings',
  label: 'Settings',
  path: '/settings',
  icon: MdEdit
};

const aboutItem: NavItem = {
  key: 'about',
  label: 'About',
  path: '/about',
  icon: MdEdit
};

const contactItem: NavItem = {
  key: 'contact',
  label: 'Contact',
  path: '/contact',
  icon: MdPhone,
  children: [
    {
      key: 'contact-1',
      label: 'children1',
      path: '/contact-1',
      icon: FcHome,
    },
    {
      key: 'contact-2',
      label: 'children2',
      path: '/contact-2',
      icon: FcHome,
    }],
};

const projectsItem: NavItem = {
  key: 'projects',
  label: 'Projects',
  path: '/projects',
  icon: FcFolder,
};

const searchItem: NavItem = {
  key: 'search',
  label: 'Search',
  path: '/search',
  icon: MdSearch,
  style: {
    width: '40vw',
    backgroundColor: 'white',
    borderRadius: '0.1rem',
    padding: '1vh',
    boxShadow: '0 0 2px #e0e0e0',
  },
};

const navItems: NavItem[] = [
  searchItem,
  homeItem,
  settingsItem,
  aboutItem,
  contactItem,
];

export default navItems;


