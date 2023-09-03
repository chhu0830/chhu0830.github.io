import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Project from 'component/Project'

const Article = ():JSX.Element => {
  const projects = [{
    title: 'SOLID Design Principle',
    brief: 'To improve code quality and maintainability.',
    image: '',
    link: '/',
    tags: ['Development']
  }, {
    title: 'VLAN',
    brief: 'What is a VLAN and how does it work? What is the difference between PVID and VID?',
    image: '',
    link: '/',
    tags: ['Network']
  }, {
    title: 'OKR vs KPI',
    brief: 'Focus on what really matters!',
    image: '',
    link: '/',
    tags: ['Management']
  }]

  return (
    <Container sx={{paddingTop: '10px'}}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {projects.map((project) => (
          <Grid item xs={12}>
            <Project {...project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Article
