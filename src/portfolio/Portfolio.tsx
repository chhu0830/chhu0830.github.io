import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Project from 'component/Project'
import ImgShell from 'img/shell.png'
import ImgLibc from 'img/minilibc.png'

const Portofolio = ():JSX.Element => {
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
          <Grid item md={4} xs={12}>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Portofolio
