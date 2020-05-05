import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import ComponentHeader from "./ComponentHeader";
import ComponentList from "./ComponentList";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <Container maxWidth='lg' className={classes.root}>
            <Hidden xsDown>
                <ComponentHeader/>
            </Hidden>
            <ComponentList/>
        </Container>
    );
}
