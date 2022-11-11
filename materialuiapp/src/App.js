import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import {PhotoCamera} from '@mui/icons-material'
import { Container } from '@mui/system'
import {makeStyles} from 'tss-react/mui'


const useStyles = makeStyles()((theme) => {
  return {
    rootStyle : {
      backgroundColor: theme.palette.background.paper,
      margin: '50px 0 0 0'
    },
    barStyle : {
      margin: '0 0 50px 0'
    },
    sectionStyle: {
      width : '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems : 'center',
    },
    itemStyle: {
      width: '100%',
      textAlign: 'center'
    }
  }
})

const App = () => {
  const customStyles = useStyles()
  return (
    <>
      <header>
        <CssBaseline/>
        <AppBar className={customStyles.classes.barStyle}>
          <Toolbar >
            <PhotoCamera/>
            <Typography variant='h5'  paragrah  align='center'>Photo Album</Typography>
          </Toolbar>
        </AppBar>
      </header>
     <main>
      <Container maxWidth = 'md' className = {customStyles.classes.rootStyle}>
            <Typography variant='h3' paragraph align='center'>Album Page</Typography>
            <Typography variant='h6' align='center' gutterBottom>
              Something long to test how good I am at using material Ui for frontend development and how good I can improve on my frontend skills an a junior developer.
            </Typography>

            <section className={customStyles.classes.sectionStyle}>
              <Grid container spacing={2}>
                <Grid item xs = {12} sm = {6} >
                  <Button variant='contained' className={customStyles.classes.itemStyle}> x = 12</Button>
                </Grid>
                <Grid item xs = {12} sm = {6} >
                  <Button variant='outlined' className={customStyles.classes.itemStyle}> x = 12</Button>
                </Grid>
              </Grid>
            </section>

      </Container>
     </main>
    </>
  )
}

export default App
