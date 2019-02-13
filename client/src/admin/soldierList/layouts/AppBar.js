import {Fab, Typography, withStyles, AppBar, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import CreateSoldierDialog from '../dialogs/CreateSoldierDialog';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const styles = {
    root: {
        borderRadius: 6,
        height: '70px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#312f2f',
    },
    fontTheme: {
        color: 'black',
        fontSize: '10px',
    },
    title: {
        flex:1,
        marginRight: 20,
    },
    backButton: {
        marginLeft: 5,
        marginRight: 5,
        background: '#312f2f',
        color: 'white',
    },
    CreateSoldierDialog: {
        marginLeft: 0,
    },
    navlink: {
        textDecoration: 'none',
    },
};

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.root}>
                    <Typography variant="h5" color="inherit" className={classes.title}>
                        רשימת החיילים
                    </Typography>
                    <div className={classes.CreateSoldierDialog}>
                        <CreateSoldierDialog />
                    </div>
                    <NavLink className={classes.navlink} exact to="/">
                        <Fab className={classes.backButton}>
                            <KeyboardBackspaceIcon fontSize="large" />
                        </Fab>
                    </NavLink>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
