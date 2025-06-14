import React, { useState } from 'react'
import { logo } from "../assets/index.js"
import { navLinks } from '../constraints'
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false)

  return (
    <div className='top-0 w-full'>
      <nav className='flex justify-between items-center p-10 sm:p-6'>
        {/* Logo */}
        <div>
        <img
  src={logo}
  alt="logo"
  className='w-[142px] h-[38px]'
/></div>
        {/* Desktop Nav Links */}
        <ul className='text-white hidden md:flex items-center justify-end gap-5 list-none'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                className='inline-block px-2 py-1 cursor-pointer transition-all duration-200 hover:scale-105 hover:text-white hover:brightness-125 hover:blur-[0.3px]'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon - visible only on small screens */}
        <div className="md:hidden">
          <IconButton
            onClick={() => setopenmenu(true)}
            sx={{ color: 'white' }}
          >
            <MenuIcon />
          </IconButton>
        </div>

        {/* Drawer */}
        <Drawer
          anchor="right"
          open={openmenu}
          onClose={() => setopenmenu(false)}
          transitionDuration={300}  // smooth slide
          PaperProps={{
            sx: {
              backgroundColor: 'black',
              color: 'white',
            }
          }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setopenmenu(false)}
            onKeyDown={() => setopenmenu(false)}
          >
            {navLinks.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton component="a" href={item.href}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </Box>
        </Drawer>
      </nav>
    </div>
  )
}

export default Navbar
