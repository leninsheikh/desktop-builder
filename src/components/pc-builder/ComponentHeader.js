import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

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
        'font-weight': 'normal'
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <Box mt={1}>
            <Grid container className={classes.box} >
                <Grid className={classes.component} item xs>
                    <div  className={classes.paper}>
                        <Typography className={classes.head} variant="h6">
                            Component
                        </Typography>

                    </div>
                </Grid>
                <Grid item className={classes.component} xs>
                    <div className={classes.paper}>
                        <Typography className={classes.head} variant="h6">
                            Image
                        </Typography>
                    </div>
                </Grid>
                <Grid item className={classes.component} xs={4}>
                    <div className={classes.paper}>
                        <Typography className={classes.head} variant="h6">
                            Product name
                        </Typography>
                    </div>
                </Grid>
                <Grid item className={classes.component} xs>
                    <div className={classes.paper}>
                        <Typography className={classes.head} variant="h6">
                            Price
                        </Typography>
                    </div>
                </Grid>
                <Grid item className={classes.component} xs>
                    <div className={classes.paper}>
                        <Typography className={classes.head} variant="h6">
                            Actions
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
