import React from 'react';
import { Grid, makeStyles, Typography, Divider } from '@material-ui/core'
import { Quotes, SocialLinks } from './components/Socials'

const useStyles = makeStyles(theme => {
  return {
    about: {
      padding: theme.spacing(2),
      background: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      height: '100%',
      overflowY: 'auto',
      boxShadow: theme.shadows[2],
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    panel: {
      height: '100%', overflowY: 'auto',
      padding: theme.spacing(2)
    },
    spacer: {
      flexGrow: 1
    },
    logo: {
      width: 256,
      height: 256,
      margin: 'auto'
    },
    div: {
      margin: `4px 8px 8px 8px`, background: 'rgba(255,255,255,0.4)'
    },
    altDiv: { margin: `8px 8px 8px 8px`, background: theme.palette.primary.light }
  }
})
function App() {
  const classes = useStyles();
  return (
    <div>
      <Grid container direction='row' spacing={0} style={{ height: '100vh' }}>
        <Grid item xs={12} md={12} className={classes.about}>

          <Typography variant='h2' align='center' gutterBottom> Nicholas Mattise</Typography>
          <Typography variant='h5' align='center'>developer | researcher | tinkerer</Typography>

          <img alt="" src={`${process.env.PUBLIC_URL}/logos/mattise_logo@2x.png`} className={classes.logo} />
          <div className={classes.spacer}></div>
          <Quotes />
          <Divider className={classes.div} />

          <SocialLinks />


        </Grid>
        {/* <Grid item xs={12} md={7} className={classes.panel}>
          <Skills></Skills>
          <Divider className={classes.altDiv} />
          <Projects></Projects>
          <Divider className={classes.altDiv} />
          <Timeline />

        </Grid> */}

      </Grid>
    </div>
  );
}

export default App;
