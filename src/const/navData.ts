import { NavItem } from "../models/NavItem";

const homeItem: NavItem = {
  key: 'home',
  label: 'Home',
  path: '/',
  icon: 'home',
  children: [
    {
      key: 'home-1',
      label: 'Home 1',
      path: '/home-1',
      icon: 'home',
    },
    {
      key: 'home-2',
      label: 'Home 2',
      path: '/home-2',
      icon: 'home',
    }],
};

const settingsItem: NavItem = {
  key: 'settings',
  label: 'Settings',
  path: '/settings',
  icon: 'settings',
};

const aboutItem: NavItem = {
  key: 'about',
  label: 'About',
  path: '/about',
  icon: 'info',
};

const contactItem: NavItem = {
  key: 'contact',
  label: 'Contact',
  path: '/contact',
  icon: 'phone',
};

const projectsItem: NavItem = {
  key: 'projects',
  label: 'Projects',
  path: '/projects',
  icon: 'folder',
};

const searchItem: NavItem = {
  key: 'search',
  label: 'Search',
  path: '/search',
  icon: 'search',
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
  projectsItem,
];

export default navItems;


