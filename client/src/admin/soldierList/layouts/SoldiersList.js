import { withStyles, LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MenuAppBar from './AppBar';
import CustomPaginationActionsTable from './SoldiersTable';

const styles = theme => ({
    mainDiv: {
        // 'margin': '30px',
    },

});

class DisplaySoldiers extends Component {
    state = {
        soldiers: null,
        isLoading: true,
    }




    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        let { isLoading, soldiers } = this.state;
        return (
            <div className={classes.mainDiv}>
                <MenuAppBar />
                <CustomPaginationActionsTable />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

DisplaySoldiers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplaySoldiers);