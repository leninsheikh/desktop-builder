import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ComponentItemEmpty from "./ComponentItemEmpty";
import PropTypes from 'prop-types';



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
        justifyContent: 'flex-end'
    },
    image: {
        width: 'auto',
        height: '50px',
    }
}));

const ComponentItem = props => {
    const classes = useStyles();
    if (props.empty) {
        return <ComponentItemEmpty type={props.type}/>
    }
    return (
        <Paper>
            <Box py={1}>
                <Grid container>
                    <Grid className={classes.component} item sm xs={8}>
                        <div className={classes.paper}>{props.type}</div>
                    </Grid>
                    <Hidden smUp>
                        <Grid item className={classes.cell} xs={4}>
                            <div className={classes.paper}>
                                <Action/>
                            </div>
                        </Grid>
                    </Hidden>
                    <ComponentDetails/>
                    <Hidden xsDown>
                        <Grid item className={classes.cell} sm>
                            <div className={classes.paper}>
                                <Action/>
                            </div>
                        </Grid>
                    </Hidden>
                </Grid>
            </Box>
        </Paper>
    );
}

const ComponentDetails = (props) => {
    const classes = useStyles();
    const image = 'https://www.stormcomputers.com.au/wp-content/uploads/2019/07/3900X.jpg';
    return (
        <>
            <Grid item className={classes.component} sm xs={3}>
                <div className={classes.paper}>
                    <img alt='placeholder' className={classes.image} src={image} />
                </div>
            </Grid>
            <Grid item className={classes.component} sm={4} xs={5}>
                <div className={classes.paper}>
                    AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon Vega 3 Graphics (No Single)
                </div>
            </Grid>
            <Grid item className={classes.cell} sm xs={4}>
                <div className={classes.paper}>BDT 5,300</div>
            </Grid>
        </>
    )
};
const Action = (props) => {
    const classes = useStyles();
    return (
        <div>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete">
                <EditIcon />
            </IconButton>
        </div>
    )
};

ComponentItem.propTypes  = {
    type: PropTypes.string.isRequired
};

export default ComponentItem
