import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery, Icon } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import Search from '../Search/Search';

function NavBar() {
  const isMobile = useMediaQuery('(max-width:700px');
  const isAuthenticated = true;
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="h-8 flex justify-between mx-4">
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className="mx-2 md:hidden"
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 32 }} onClick={() => { }}>
            <Brightness4 />
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button
                color="inherit"
                onClick={() => { }}
              >Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to="/profile/1234"
                className="hover:text-white"
                onClick={() => { }}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <nav>
        {isMobile ? (
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            ModalProps={{ keepMounted: true }}
            className="w-64"
          >
            <SideBar setMobileOpen={setMobileOpen} />
          </Drawer>
        ) : (
          <Drawer className="w-64" variant="permanent" open>
            <SideBar setMobileOpen={setMobileOpen} />
          </Drawer>
        )}
      </nav>
    </>
  );
}

export default NavBar;
