import {ReactNode} from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {timelineOppositeContentClasses} from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

interface TimelineDescProps {
  children?: ReactNode
}

interface TimelineStageProps {
  title: string
  subtitle?: string
  duration: string
  children?: ReactNode
}

interface TimelineProps {
  stages: {
    title: string
    subtitle?: string
    duration: string
    description: string[]
  }[]
}

const TimelineDesc = ({children}: TimelineDescProps) => {
  return (
    <Typography variant="body2" color="text.secondary" gutterBottom>
      {children}
    </Typography>
  )

}

const TimelineStage = ({duration, title, subtitle, children}: TimelineStageProps) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ margin: 'auto 0' }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {duration}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: 8, px: 3 }}>
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          {subtitle}
        </Typography>
        {children}
      </TimelineContent>
    </TimelineItem>
  )
}

const CustomizedTimeline = ({stages}: TimelineProps) => {
  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {stages.map(({description, ...metadata}) => (
        <TimelineStage {...metadata}>
          {description.map((desc) => (
            <TimelineDesc>{desc}</TimelineDesc>
          ))}
        </TimelineStage>
      ))}
    </Timeline>
  );
}

export default CustomizedTimeline
