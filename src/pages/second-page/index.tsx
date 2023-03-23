// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Button, CardActions } from '@mui/material'
import CardWidgetsWeeklyOverview from 'src/views/ui/cards/widgets/CardWidgetsWeeklyOverview'

const SecondPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Crea increibles formularios online con el poder de IA. 🙌'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}> Mi espacio de trabajo</Typography>
            <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ width: '100%' }}>
                  <CardHeader title='Mi Encuesta Simple'></CardHeader>
                  <CardContent>...</CardContent>
                  <CardActions>
                    <Button variant='text'>Editar encuesta</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ width: '100%' }}>
                  <CardHeader title='Otra encuesta'></CardHeader>
                  <CardContent>...</CardContent>
                  <CardActions>
                    <Button variant='text'>Editar encuesta</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardWidgetsWeeklyOverview />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SecondPage
