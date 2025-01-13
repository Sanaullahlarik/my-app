import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";;

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Product", href: "/product" },
];

function SimpleHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} passHref>
                <Button sx={{ color: "#fff" }}>{item.label}</Button>
              </Link>
            ))}
          </Box>
          <Link href="/sign-up">
            <AccountCircleIcon className="text-black" />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SimpleHeader;
