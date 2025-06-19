import { IconPoint, IconAperture, IconBoxMultiple } from "@tabler/icons-react";
import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

const Menuitems: MenuitemsType[] = [
  // Removed sample menu items - add your custom navigation here if needed
  // Example:
  // {
  //   id: uniqueId(),
  //   title: "Dashboard",
  //   icon: IconAperture,
  //   href: "/Agency",
  // },
];

export default Menuitems;