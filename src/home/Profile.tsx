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
import Typography from '@mui/material/Typography'

interface InfoProps {
  children: ReactNode
  title: string
  primary?: boolean
}

interface ProfileInfoProps {
  bio: {name: string, description: string}
  education: {title: string, description: string}[]
  skills: string[]
}

interface ProfileProps extends ProfileInfoProps {
  avatarImg: string
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

const ProfileInfo = ({bio, education, skills}: ProfileInfoProps) => {
  const Bio = (
    <Info title={bio.name} primary>
      <Container>
        <Typography variant="body1" color="text.secondary" sx={{textAlign: "justify"}}>
          {bio.description}
        </Typography>
      </Container>
    </Info>
  )

  // const Achievement = (
  //   <Info title="Achievement">
  //   </Info>
  // )

  const Education = (
    <Info title="Education">
      <List>
        {education.map((edu) => (
          <ListItem>
            <ListItemText primary={edu.title} secondary={edu.description} />
          </ListItem>
        ))}
      </List>
    </Info>
  )

  const Skills = (
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
  )

  return (
    <Stack
      divider={<Divider flexItem />}
      spacing={2}
    >
      {Bio}
      {Education}
      {Skills}
    </Stack>
  )
}

const Profile = ({avatarImg, bio, education, skills}: ProfileProps) => {
  return (
    <>
      <Container>
        <Avatar
          alt="avatar"
          src={avatarImg}
          sx={{
            width: '10vw',
            height: '10vw',
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </Container>
      <ProfileInfo
        bio={bio}
        education={education}
        skills={skills}
      />
    </>
  )
}

export default Profile
