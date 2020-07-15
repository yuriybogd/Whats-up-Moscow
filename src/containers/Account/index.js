import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TopBar from "../../components/TopBar/TopBar"
import { Grid, ButtonGroup } from "@material-ui/core"
import theme from "./../../theme/index"
import { Paper } from "@material-ui/core"
import profileBg from "./assets/profileBg.jpg"
import avatarImg from "./assets/avatar.jpg"
import Button from "@material-ui/core/Button"
import  Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  grid: {
    margin: theme.spacing(2),
  },
  paper: {},
  profileBg: {
    height: "350px",
    backgroundImage: `url(${profileBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  avatar: {
    height: "200px",
    width: "200px",
    marginTop: "-100px",
    borderRadius: "50%",
    backgroundImage: `url(${avatarImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  infoMsgBtn: {
    marginTop: theme.spacing(-16),
    marginBottom: theme.spacing(10),
  },
  numberOfBtn: {
    marginRight: theme.spacing(1),
  },
})

const Account = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <TopBar />
      <Grid container justify="center" className={classes.root}>
        <Grid
          justify="center"
          alignItems="center"
          container
          className={classes.grid}
        >
          <Grid item xs={12} md={10}>
            <Paper className={classes.paper}>
              <Grid item xs={12} md={12} className={classes.profileBg}></Grid>
              <Grid item container justify="center">
                <div className={classes.avatar}></div>
              </Grid>
              <Grid
                item
                container
                justify="space-between"
                className={classes.infoMsgBtn}
              >
                <Grid item xs={6} md={6} container justify="center">
                  <ButtonGroup variant="contained" size="small">
                    <Button>
                      <Typography variant="h4" className={classes.numberOfBtn}>
                        10
                      </Typography>
                      постов
                    </Button>
                    <Button>
                      <Typography variant="h4" className={classes.numberOfBtn}>
                        10
                      </Typography>
                      подписчиков
                    </Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={6} md={6} container justify="center">
                  <ButtonGroup variant="contained" size="small">
                    <Button color="primary">Добавить в друзья</Button>
                    <Button color="secondary">Написать</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item container justify="center">
                  <Typography variant="h5">Аватар Титаников</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">Галактика, Пандора, 25 лет</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Account
