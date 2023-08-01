import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

interface NavbarProps {
  tab: string,
  tabs: string[],
  handleChange: (event: React.SyntheticEvent, newValue: string) => void
}

const Navbar = ({tab, tabs, handleChange}: NavbarProps) => {
  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Container>
          <Tabs
            value={tab}
            onChange={handleChange}
          >
            {tabs.map((tab) => (<Tab key={tab} label={tab} value={tab} />))}
          </Tabs>
        </Container>
      </Box>
    </Box>
  );
}

export default Navbar
