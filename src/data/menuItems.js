import { Dashboard } from "@mui/icons-material";
import PostAddIcon from "@mui/icons-material/PostAdd";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ReceiptIcon from "@mui/icons-material/Receipt";

export const menuItems = [
  {
    id: 0,
    title: "Stock",
    link: "/",
    icon: Dashboard,
  },
  {
    id: 1,
    title: "Purchase",
    link: "/purchase-entry",
    icon: ListAltIcon,
  },
  {
    id: 2,
    title: "Add Product",
    link: "/create-product",
    icon: PostAddIcon,
  },
  {
    id: 3,
    title: "Add Vendor",
    link: "/create-vendor",
    icon: DomainAddIcon,
  },
  {
    id: 4,
    title: "Sales",
    link: "/sales-entry",
    icon: ReceiptIcon,
  },
  {
    id: 5,
    title: "List",
    link: "/list",
    icon: ReceiptIcon,
  },
];
