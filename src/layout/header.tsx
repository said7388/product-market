import Box from "@mui/material/Box";
import * as React from "react";
import Navbar from "../core-ui/navbar/navbar";
import SideNavbar from "../core-ui/navbar/side-navbar";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <SideNavbar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        container={container}
      />
    </Box>
  );
}
