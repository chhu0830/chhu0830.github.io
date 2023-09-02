import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography';

interface ProjectProps {
  title: string,
  image: string,
  brief: string,
  link: string,
  tags: string[],
}

const Project = ({title, brief, image, link, tags}: ProjectProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.open(link, "_blank", "noreferrer")
  }

  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          sx={{ height: 200, backgroundPosition: "left" }}
          image={image}
          title=""
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height: 50 }}>
          {brief}
        </Typography>
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            justifyContent: "left"
          }}
        >
          {tags.map((tag) => (
            <Chip label={tag} sx={{margin: '2px'}} />
          ))}
        </Stack>
      </CardActions>
    </Card>
  );
}

export default Project
