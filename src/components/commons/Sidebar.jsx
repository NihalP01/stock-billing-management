import "./sidebar.css";
// import logo from "../../assets/images/logo.png";
import { Link, useHistory } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/Inbox";
import BallotIcon from "@material-ui/icons/Ballot";
import EmailIcon from "@mui/icons-material/Email";

const useStyles = makeStyles({
  accordionMain: {
    boxShadow: "-1px 2px 0px -200px rgba(0,0,0,0.75)",
    // padding: "0.3rem",
    fontSize: "0.85rem",
    justifyContent: "center",
    "&::before": {
      backgroundColor: "#fff",
    },

    "& .MuiAccordionSummary-expandIcon": {
      // padding: "0",
    },
  },

  accordionSummaryStyle: {
    color: "#263D7A",
    borderRadius: "0.3rem",
    fontWeight: "600",
    // padding: "0rem 0.1rem",
    "&:hover": {
      cursor: "pointer",
      color: "#df4b25",
      background: "#1549854d",
    },
    "& 	.MuiAccordionSummary-root": {
      marginBottom: "0",
    },
  },
  accordionDetails: {
    display: "flex",
    flexDirection: "column",
    padding: "8px 6px 0px",
  },
});

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const classes = useStyles();
  let history = useHistory();

  // const handleLogout = (e) => {
  //   e.preventDefault();

  //   axiosInstance
  //     .post("auth/logout/", {
  //       refresh: sessionStorage.getItem("refresh_token"),
  //     })
  //     .then((res) => {
  //       sessionStorage.removeItem("has default org");
  //       sessionStorage.removeItem("refresh_token");
  //       sessionStorage.removeItem("access_token");
  //       sessionStorage.removeItem(
  //         "c5087cd8d03fcb7034a41c21f8f155d0b9966f1a1a9572b4dd36b6dd0a0ddb66"
  //       );
  //       sessionStorage.removeItem("user");
  //       history.push("/SignIn");
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <div className={sidebarOpen ? "sidebar__responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>
      <div className="sidebar__menu">
        <Link to="/app/home" onClick={() => closeSidebar()}>
          <div className="sidebar__link active_menu_link">
            <i className="fa fa-home"></i>
            <span>Dashboard</span>
          </div>
        </Link>
        <Accordion className={classes.accordionMain}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.accordionSummaryStyle}
          >
            <div>
              <i className="fa fa-list-alt"></i>
              <span style={{ marginLeft: "0.7rem" }}>Bill Box</span>
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <Link to="/app/in-box" onClick={() => closeSidebar()}>
              <div className="sidebar__link">
                <InboxIcon
                  style={{ alignSelf: "flex-end", marginRight: "0.7rem" }}
                />
                <span>In Box</span>
              </div>
            </Link>
            <Link to="/app/out-box" onClick={() => closeSidebar()}>
              <div className="sidebar__link">
                <BallotIcon
                  style={{ alignSelf: "flex-end", marginRight: "0.7rem" }}
                />
                <span>Out Box</span>
              </div>
            </Link>
            {/* external mail */}
            <Link to="/app/external-email" onClick={() => closeSidebar()}>
              <div className="sidebar__link">
                <EmailIcon
                  style={{ alignSelf: "flex-end", marginRight: "0.7rem" }}
                />
                <span>E-Mail</span>
              </div>
            </Link>
          </AccordionDetails>
        </Accordion>

        <Link to="/app/receivables" onClick={() => closeSidebar()}>
          <div className="sidebar__link">
            <i className="fa fa-share"></i>
            <span>Receivables</span>
          </div>
        </Link>
        <Link to="/app/payable" onClick={() => closeSidebar()}>
          <div className="sidebar__link">
            <i className="fa fa-reply"></i>
            <span>Payable</span>
          </div>
        </Link>

        <Link to="/app/company" onClick={() => closeSidebar()}>
          <div className="sidebar__link">
            <i className="fa fa-building"></i>
            <span>Organizations</span>
          </div>
        </Link>
        <Link to="/app/contacts" onClick={() => closeSidebar()}>
          <div className="sidebar__link">
            <i className="fa fa-handshake"></i>
            <span>Contacts</span>
          </div>
        </Link>
        <Link to="/app/users" onClick={() => closeSidebar()}>
          <div className="sidebar__link">
            <i className="fa fa-users"></i>
            <span>Users</span>
          </div>
        </Link>
        {/* <h2>LEAVE</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <Link to="/app#">Requests</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <Link to="/app#">Leave Policy</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <Link to="/app#">Special Days</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <Link to="/app#">Apply for leave</Link>
        </div>
        <h2>PAYROLL</h2>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <Link to="/app#">Payroll</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <Link to="/app#">Paygrade</Link>
        </div> */}
        <Link to="/SignIn" onClick={(e) => handleLogout(e)}>
          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <span>Log out</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
