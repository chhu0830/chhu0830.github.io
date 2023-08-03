import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

import Profile from './Profile'
import Timeline from './Timeline'

import AvatarImg from 'img/avatar.jpg'

const Home = () => {
  const profile = (
    <Profile
      avatarImg={AvatarImg}
      bio={{
        name: "Chia-Hsuan Hu",
        description: "I'm a software developer and a security engineer. Learning new things is exciting, and I'll keep doing it."
      }}
      education={[
        {title: "MSc in Cyber Security", description: "DSNS Lab, NCTU, Taiwan"},
        {title: "BSc in Computer Science", description: "NCTU, Taiwan"}
      ]}
      skills={[
        "C", "Python", "Go", "React",
        "Shell Script", "Git", "Docker",
        "GDB", "Assembly", "Reverse", "Pentest"
      ]}
    />
  )

    const timeline = (
      <Timeline stages={[{
        title: "Software Developer",
        subtitle: "Woodpecker Technology Inc.",
        duration: "2020 - now",
        description: [
          "Design S-SDLC to ensure product security",
          "Introduce OKR to focus on primary issues",
          "Build network infrastructure and SOC",
          "Define metrics and improve product performance ...",
          "Create test automation architecture ...",
        ]
      }, {
        title: "MSc in Cyber Security",
        subtitle: "National Chiao Tung University, Taiwan",
        duration: "2018 - 2020",
        description: [
          "GPA 4.0/4.3",
          "Finalist, Cyber Security Technical Ability Competition, Taiwan, 2019",
        ]
      }, {
        title: "BSc in Computer Science",
        subtitle: "National Chiao Tung University, Taiwan",
        duration: "2014 - 2018",
        description: [
          "GPA 3.96/4.3 (153 course credits)",
          "4 Academic Achievement Awards",
          "NCTU Information and Communication Security Credit Programme",
          "NCTU+ | NCTU Smart Campus System",
          "Vice-captain of Department Volleyball Team",
        ]
      }]}/>
    )

  return (
    <Container sx={{paddingTop: '10px'}}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Box sx={{width: '25%'}}>
          {profile}
        </Box>
        <Box sx={{width: '75%'}}>
          {timeline}
        </Box>
      </Stack>
    </Container>
  )
}

export default Home
