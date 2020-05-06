import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import withMenuBar from "../hoc/withMenuBar";
import { useHistory } from 'react-router-dom';
import SearchComponent from "./SearchComponent";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const Header = (props) => {
    const classes = useStyles();
    let history = useHistory();

    /**
     * go back to home page
     *
     * @returns {void | boolean | * | number}
     */
    const onBack = () => history.push('/');

    return (
        <>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={onBack}
            >
                <ArrowBackIcon/>
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
                {`Select ${props.component}`}
            </Typography>
            <SearchComponent component={props.component}/>
        </>
    );
};

export default withMenuBar(Header)
