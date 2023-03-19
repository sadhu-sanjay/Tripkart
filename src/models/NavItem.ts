export interface NavItem {
  key: string;
  label: string;
  path: string;
  icon: string;
  style?: React.CSSProperties;
  children?: NavItem[];
}