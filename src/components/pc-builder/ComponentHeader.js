import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    component: {
        paddingTop: '10px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
            <Grid container >
                <Grid className={classes.component} item xs>
                    <div  className={classes.paper}>Component</div>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item className={classes.component} xs>
                    <div className={classes.paper}>Image</div>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item className={classes.component} xs={4}>
                    <div className={classes.paper}>Product name</div>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item className={classes.component} xs>
                    <div className={classes.paper}>price</div>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item className={classes.component} xs>
                    <div className={classes.paper}>Actions</div>
                </Grid>
            </Grid>
    );
}
