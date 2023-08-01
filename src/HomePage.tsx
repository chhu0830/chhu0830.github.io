import {ReactNode} from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import AvatarImg from './img/avatar.jpg'

interface InfoProps {
  children: ReactNode
  title: string
  primary?: boolean
}

interface ProfileProps {
  education: {title: string, description: string}[]
  skills: string[]
}

const Info = ({children, title, primary}: InfoProps) => {
  return (
    <Box>
      <Typography variant={primary ? "h4" : "h5"} align="center">
        {title}
      </Typography>
      {children}
    </Box>
  )
}

const Profile = ({education, skills}: ProfileProps) => {
  return (
    <>
      <Avatar
        alt="avatar"
        src={AvatarImg}
        sx={{
          width: '250px',
          height: '250px',
        }}
      />
      <Stack
        divider={<Divider flexItem />}
        spacing={2}
      >
        <Info title="Chia-Hsuan Hu" primary>
          <Container>
            I'm a developer.
          </Container>
        </Info>
        {/*
        <Info title="Achievement">
        </Info>
        */}
        <Info title="Education">
          <List>
            {education.map((edu) => (
              <ListItem>
                <ListItemText primary={edu.title} secondary={edu.description} />
              </ListItem>
            ))}
          </List>
        </Info>
        <Info title="Skills">
          <Stack
            direction="row"
            sx={{
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {skills.map((skill) => (
              <Chip label={skill} sx={{margin: '2px'}} />
            ))}
          </Stack>
        </Info>
      </Stack>
    </>
  )
}

const Home = () => {

  return (
    <Container
      sx={{
        paddingTop: '10px'
      }}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Box sx={{
          width: '250px',
        }}>
          <Profile
            education={[
              {title: "MSc in Computer Science", description: "DSNS Lab, NCTU, Taiwan"},
              {title: "BSc in Computer Science", description: "NCTU, Taiwan"}
            ]}
            skills={["C", "Python", "Go", "Javascript", "Shell", "Git", "Reverse", "Pentest"]}
          />
        </Box>
        <Box>
        </Box>
      </Stack>
    </Container>
  )
}

export default Home
