import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Project from 'portfolio/Project'
import ImgShell from 'img/shell.png'
import ImgLibc from 'img/minilibc.png'

const Portofolio = ():JSX.Element => {
  // const projects = [{
  //   title: "SOLID Development Principle",
  //   image: Img,
  //   brief: "SOLID development principle provies a way to maintain code well.",
  // }, {
  //   title: "VLAN",
  //   image: Img,
  //   brief: "Difference between native vlan and pvid.",
  // }, {
  //   title: "OKR",
  //   image: Img,
  //   brief: "OKR, Objective and the Key Result",
  // }]
  const projects = [{
    title: "env",
    brief: "Development environment settings, including zsh, vim, tmux...",
    image: ImgShell,
    link: "https://github.com/chhu0830/env",
    tags: ["Shell", "Linux"]
  }, {
    title: "Mini LibC",
    brief: "Homework of Unix Programming in NCTU.  Extend the Mini Lib C to Handle Signals.",
    image: ImgLibc,
    link: "https://github.com/chhu0830/NCTU.107-2.unix-programming/tree/master/proj3",
    tags: ["Assembly", "C", "MACRO"]
  }]
  return (
    <Container sx={{paddingTop: '10px'}}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {projects.map((project) => (
          <Grid item xs={4}>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Portofolio
