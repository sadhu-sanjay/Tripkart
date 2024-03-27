import { IconType } from "react-icons/lib/esm/iconBase";

export interface NavItem {
  key: string;
  label: string;
  path: string;
  icon: IconType;
  style?: React.CSSProperties;
  children?: NavItem[];
}

export interface Category {
  id: number;
  nm: string;
  img: string;
}
