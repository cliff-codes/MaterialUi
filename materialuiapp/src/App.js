import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Button } from '@mui/material'
import Grid from '@mui/material/Grid'
import {PhotoCamera} from '@mui/icons-material'
import { Container } from '@mui/system'
import {makeStyles} from 'tss-react/mui'

const total = [1, 2, 3, 4, 5, 6,]

const useStyles = makeStyles()((theme) => {
  return {
    rootStyle : {
      backgroundColor: theme.palette.background.paper,
      margin: '100px 0 0 0'
    },
    barStyle : {
      
    },
    sectionStyle: {
      width : '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems : 'center',
      marginBottom: '30px'
    },
    itemStyle: {
      width: '100%',
      textAlign: 'center'
    },
    mainStyle: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems : 'center',
    },
    cardMedia: {
      paddingTop: '56.25%'
    },
    centerCards : {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
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
     <main className = {customStyles.classes.mainStyle}>
      <Container maxWidth = 'sm' className = {customStyles.classes.rootStyle}>
            <Typography variant='h3' paragraph align='center'>Album Page</Typography>
            <Typography variant='h6' align='center' gutterBottom>
              Something long to test how good I am at using material Ui for frontend development and how good I can improve on my frontend skills an a junior developer.
            </Typography>

            <section className={customStyles.classes.sectionStyle} >
              <Grid container spacing={2}>
                <Grid item xs = {12} sm = {6} >
                  <Button variant='contained' className={customStyles.classes.itemStyle}> See My Photos </Button>
                </Grid>
                <Grid item xs = {12} sm = {6} >
                  <Button variant='outlined' className={customStyles.classes.itemStyle}> Secondary Action</Button>
                </Grid>
              </Grid>
            </section>
      </Container>

      <section className={customStyles.classes.centerCards}>
          <Grid container spacing = {3} >
            {
              total.map(num => (
                <Grid item >
                  <Card >
                    <CardMedia
                      image='https://source.unsplash/random'
                      className={customStyles.classes.cardMedia}
                    />
                    <CardContent>
                      <Typography variant='h6'>Name of card</Typography>
                      <Typography variant='h7'>
                        More Details on the card
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button size = 'small'>view</Button>
                      <Button size = 'small'>edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
      </section>
     </main>
    </>
  )
}

export default App
