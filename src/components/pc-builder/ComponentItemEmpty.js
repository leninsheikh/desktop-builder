import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    component: {
        paddingY: '10px',
    },
    paper: {
        height: '100%',
        color: theme.palette.text.secondary,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px'
    },
    cell: {
        textAlign: 'right',
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        width: 'auto',
        height: '50px',
    }
}));

const EmptyComponent = props =>  {
    const classes = useStyles();

    return (
        <Paper>
            <Box py={2}>
                <Grid container>
                    <Grid className={classes.component} item sm={10} xs={8}>
                        <div className={classes.paper}>{props.type}</div>
                    </Grid>
                    <Hidden smUp>
                        <Grid item className={classes.cell} xs={4}>
                            <div className={classes.paper}>
                                <Action type={props.type}/>
                            </div>
                        </Grid>
                    </Hidden>
                    <Hidden xsDown>
                        <Grid item className={classes.cell} sm={2}>
                            <div className={classes.paper}>
                                <Action type={props.type}/>
                            </div>
                        </Grid>
                    </Hidden>
                </Grid>
            </Box>
        </Paper>
    );
}

const Action = (props) => {
    const classes = useStyles();
    let router = useHistory();

    const onChoose = () => router.push(`select-component?component=${props.type.toLowerCase()}`);

    return (
        <div className={classes.actions}>
            <Button
                color="secondary"
                className={classes.button}
                startIcon={<AddCircleIcon />}
                onClick={onChoose}
            >
                Choose
            </Button>
        </div>
    )
}

EmptyComponent.propTypes  = {
    type: PropTypes.string.isRequired
};

export default EmptyComponent
