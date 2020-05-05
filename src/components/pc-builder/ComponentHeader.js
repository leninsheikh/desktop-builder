import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TitleIcon from '@material-ui/icons/Title';
import ImageIcon from '@material-ui/icons/Image';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';


const useStyles = makeStyles((theme) => ({
    component: {
        paddingTop: '10px',
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    box: {
        background: '#ededed',
        paddingBottom: theme.spacing(1)
    },
    head: {
        'font-weight': 'normal',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <Box mt={1}>
            <Grid container className={classes.box} >
                <Grid className={classes.component} item xs>
                    <div  className={classes.paper}>
                        <Typography className={classes.head} variant="subtitle1">
                            <AppsIcon />
                            Component
                        </Typography>

                    </div>
                </Grid>
                <Grid item className={classes.component} xs>
                    <div className={classes.paper}>
                        <Typography className={classes.head} variant="subtitle1">
                            <ImageIcon />
                            Image
                        </Typography>
                    </div>
                </Grid>
                <Grid item className={classes.component} xs={4}>
                    <div className={classes.paper}>
                        <Typography className={classes.head} variant="subtitle1">
                            <TitleIcon />
                            Product name
                        </Typography>
                    </div>
                </Grid>
                <Grid item className={classes.component} xs>
                    <div className={classes.paper}>
                        <Typography className={classes.head} variant="subtitle1">
                            <AttachMoneyIcon />
                            Price
                        </Typography>
                    </div>
                </Grid>
                <Grid item className={classes.component} xs>
                    <div className={classes.paper}>
                        <Typography className={classes.head} variant="subtitle1">
                            <MenuIcon />
                            Actions
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
