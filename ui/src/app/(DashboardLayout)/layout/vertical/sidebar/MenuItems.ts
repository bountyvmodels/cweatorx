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
import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconAlertCircle,
  IconNotes,
  IconCalendar,
  IconMail,
  IconTicket,
  IconEdit,
  IconGitMerge,
  IconCurrencyDollar,
  IconApps,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderVertical,
  IconBorderTop,
  IconUserCircle,
  IconPackage,
  IconMessage2,
  IconBasket,
  IconChartLine,
  IconChartArcs,
  IconChartCandle,
  IconChartArea,
  IconChartDots,
  IconChartDonut3,
  IconChartRadar,
  IconLogin,
  IconUserPlus,
  IconRotate,
  IconBox,
  IconShoppingCart,
  IconAperture,
  IconLayout,
  IconSettings,
  IconHelp,
  IconZoomCode,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconBorderStyle2,
  IconAppWindow,
  IconDashboard,
  IconUsers,
  IconChecklist,
  IconWallet,
  IconSchool,
  IconBrandTelegram,
  IconLink,
  IconBuildingStore,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
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

export default Menuitems;