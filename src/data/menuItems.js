import { Dashboard } from "@mui/icons-material"
import PostAddIcon from "@mui/icons-material/PostAdd";
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const menuItems= [
    {
        id: 0,
        title: "Dashboard",
        link: '/',
        icon: Dashboard,
    },
    {
        id: 1,
        title: "Create Product",
        link: "/create-product",
        icon: PostAddIcon,
    },
    {
        id: 2,
        title: "Create Vendor",
        link: "/create-vendor",
        icon: DomainAddIcon,
    },
    {
        id: 3,
        title: "Purchase Entry",
        link: "/purchase-entry",
        icon: ListAltIcon,
    },
    {
        id: 4,
        title: "Sales Entry",
        link: "/sales-entry",
        icon: ReceiptIcon,
    },
]