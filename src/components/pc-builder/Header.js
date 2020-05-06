import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import SaveIcon from '@material-ui/icons/Save';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import withMenuBar from "../hoc/withMenuBar";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(1),
    },
}));

const  Header = props =>  {
    const classes = useStyles();

    return (
        <>
            <DesktopMacIcon/>
            <Typography variant="h5" className={classes.title}>
                Build Your PC
            </Typography>
            <SavedPC/>
            <Button
                color="inherit"
                startIcon={<SaveIcon/>}
            >
                save
            </Button>
        </>
    );
};

const SavedPC = props => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                color="inherit"
                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                startIcon={<AutorenewIcon/>}
            >
                load
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Gaming PC</MenuItem>
                <MenuItem onClick={handleClose}>Work Station</MenuItem>
                <MenuItem onClick={handleClose}>Budget PC</MenuItem>
            </Menu>
        </div>
    );
};



export default withMenuBar(Header)
