import { uniqueId } from "lodash";
import { usePathname } from "next/navigation";

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

import {
  IconDashboard,
  IconUsers,
  IconWallet,
  IconSchool,
  IconBrandTelegram,
  IconLink,
  IconBuildingStore,
  IconUser,
} from "@tabler/icons-react";

// Agency Menu Items (Full Navigation)
const AgencyMenuItems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Agency Dashboard",
    icon: IconDashboard,
    href: "/Agency",
    chip: "New",
    chipColor: "primary",
  },
  {
    id: uniqueId(),
    title: "Cweators Dashboard",
    icon: IconUser,
    href: "/cweators",
    chip: "New",
    chipColor: "secondary",
  },
  {
    navlabel: true,
    subheader: "Agency Management",
  },
  {
    id: uniqueId(),
    title: "CWEATORHUB",
    icon: IconUsers,
    href: "/cweators",
  },
  {
    id: uniqueId(),
    title: "Cweator University",
    icon: IconSchool,
    href: "/university",
  },
  {
    id: uniqueId(),
    title: "Billing & Settings",
    icon: IconWallet,
    href: "/billing",
  },
  {
    id: uniqueId(),
    title: "CweatorLinks",
    icon: IconLink,
    href: "/cweatorlinks",
  },
  {
    navlabel: true,
    subheader: "Services",
  },
  {
    id: uniqueId(),
    title: "Marketplace",
    icon: IconBuildingStore,
    href: "/marketplace",
  },
  {
    id: uniqueId(),
    title: "Community",
    icon: IconUsers,
    href: "/community",
  },
  {
    id: uniqueId(),
    title: "Join our Telegram",
    icon: IconBrandTelegram,
    href: "https://t.me/yourchannel",
    external: true,
    chip: "New",
    chipColor: "info",
  },
];

// Cweator Menu Items (Limited Navigation)
const CweatorMenuItems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Cweators Dashboard",
    icon: IconUser,
    href: "/cweators",
    chip: "New",
    chipColor: "secondary",
  },
  {
    navlabel: true,
    subheader: "Creator Tools",
  },
  {
    id: uniqueId(),
    title: "CweatorLinks",
    icon: IconLink,
    href: "/cweatorlinks",
  },
  {
    id: uniqueId(),
    title: "Cweator University",
    icon: IconSchool,
    href: "/university",
  },
  {
    id: uniqueId(),
    title: "Billing & Settings",
    icon: IconWallet,
    href: "/billing",
  },
  {
    navlabel: true,
    subheader: "Community",
  },
  {
    id: uniqueId(),
    title: "Community",
    icon: IconUsers,
    href: "/community",
  },
  {
    id: uniqueId(),
    title: "Join our Telegram",
    icon: IconBrandTelegram,
    href: "https://t.me/yourchannel",
    external: true,
    chip: "New",
    chipColor: "info",
  },
];

// Hook to get menu items based on current route
export const useMenuItems = (): MenuitemsType[] => {
  const pathname = usePathname();
  
  // If user is on cweators route, show cweator menu
  if (pathname.startsWith('/cweators')) {
    return CweatorMenuItems;
  }
  
  // Default to agency menu for all other routes including /Agency
  return AgencyMenuItems;
};

// Export both for direct access if needed
export { AgencyMenuItems, CweatorMenuItems };

// Default export for backward compatibility
export default AgencyMenuItems;