import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

interface NavbarProps {
  activeTab: string,
  tabs: string[],
  handleChange: (event: React.SyntheticEvent, newValue: string) => void
}

const Navbar = ({activeTab, tabs, handleChange}: NavbarProps):JSX.Element => {
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
            value={activeTab}
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
