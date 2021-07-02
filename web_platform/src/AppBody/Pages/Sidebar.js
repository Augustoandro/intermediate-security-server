import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Settings from "./SidebarContents/Settings";
import Overview from "./SidebarContents/Overview";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PricingPage from "./SidebarContents/PricingDetails/PricingPage";
import useBodyScrollLock from "use-lock-body-scroll";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      display: "fixed",
      flexShrink: 0,
      width: drawerWidth,
    },
  },

  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    backgroundColor: "#05264c",
    width: "100vw",
  },

  list: {
    backgroundColor: "white",
    height: "100vh",
    margin: "0",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
  },

  sidebar_button_Text: {
    backgroundColor: "#05264c",
    marginTop: "20px",
    marginBottom: "20px",
    width: "100%",
    height: "40px",
    color: "white",
  },

  linktext: {
    position: "absolute",
    bottom: "20px",
    textDecoration: "none",
  },
}));

function Sidebar(props) {
  useBodyScrollLock();
  // const { window } = props;
  const classes = useStyles();
  // const theme = useTheme();

  //Drawer Sidebar..................
  const drawer = (
    <div>
      <div className={classes.toolbar} />

      <List className={classes.list}>
        <Button
          className={classes.sidebar_button_Text}
          variant="contained"
          href="#settings"
        >
          Settings
        </Button>
        <Button
          className={classes.sidebar_button_Text}
          variant="contained"
          href="#overview"
        >
          Overview
        </Button>
        {/* <Button
          className={classes.sidebar_button_Text}
          variant="contained"
          href="#chartpage"
        >
          Graphs
        </Button> */}
        {/* <Button
          className={classes.sidebar_button_Text}
          variant="contained"
          href="#products"
        >
          Products
        </Button> */}
        <Button
          className={classes.sidebar_button_Text}
          variant="contained"
          href="#pricing"
        >
          Pricing
        </Button>
        <Divider />
        <Link to="/profile" className={classes.linktext}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ExitToAppIcon />}
          >
            Exit
          </Button>
        </Link>
      </List>
    </div>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <AnimatePresence exitBeforeEnter>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Settings />
          <Overview />
          {/* <ChartPage /> */}
          <PricingPage />
        </main>
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;
