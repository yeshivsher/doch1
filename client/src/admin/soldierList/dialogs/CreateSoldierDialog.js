import { TextField, DeleteIcon, Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react';

const styles = theme => ({
    addSoldier: {
        borderRadius: 6,
        width: 120,
        background: '#312f2f',
        color: 'white',
    },
    textField: {
        marginLeft: 0,
        marginRight: 0,
        width: 200,
        // align: 'right',
        // flip: false,
        // textAlign: 'right',
    },

});

class CreateSoldierDialog extends Component {
    state = {
        open: false,
        soldiers: null,
        isLoading: true,
        openSoldierDialog: false,
        newSoldier: {
            name: '',
            personalNumber: '',
            commanderPN: '',
            mador: '',
        }
    }

    handleChange = field => event => {
        let newSoldierCopy = JSON.parse(JSON.stringify(this.state.newSoldier));
        newSoldierCopy[field] = event.target.value;

        this.setState({
            newSoldier: newSoldierCopy
        });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };y

    postNewSoldier= () => {
        const {newSoldier} = this.state;

        fetch('http://localhost:3000/api/soldiers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": newSoldier.name,
                "personalNumber": newSoldier.personalNumber,
                "commanderPN": newSoldier.commanderPN,
                "mador": newSoldier.mador
            })
        }).then((response) => {
            return response.json();
        }).then((result) => {
            console.log(result);
        });

        this.handleClose();
    }


    render() {
        const { classes } = this.props;
        let { openSoldierDialog } = this.state;
        let newSoldier = [];
        return (
            <Fragment>
                <Fab onClick={() => this.handleClickOpen()} size="medium" aria-label="add" className={classes.addSoldier}>
                    {/* <AddIcon /> */}
                    <Typography variant="h6" color="inherit">
                        הוספת חייל
                    </Typography>
                </Fab>
                <div>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <DialogTitle id="form-dialog-title">הוספת חייל</DialogTitle>

                        <DialogContent>
                            <TextField
                                id="standard-name"
                                label="שם"
                                className={classes.textField}
                                onChange={this.handleChange('name')}
                            />
                            <br />
                            <TextField
                                id="personal-number"
                                label="מספר אישי"
                                className={classes.textField}
                                onChange={this.handleChange('personalNumber')}
                            />
                            <br />
                            <TextField
                                id="commanderPN"
                                label='מ"א מפקד'
                                className={classes.textField}
                                onChange={this.handleChange('commanderPN')}
                            />
                            <br />
                            <TextField
                                id="mador"
                                label="מדור"
                                className={classes.textField}
                                onChange={this.handleChange('mador')}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                ביטול
                                </Button>
                            <Button onClick={this.postNewSoldier} color="primary" autoFocus>
                                אישור
                                </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Fragment>
        );
    }
}

CreateSoldierDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

// const mapStateToProps = (state, ownProps) => {
//     let id = ownProps.match.params.post_id;
//     return {
//       post: state.posts.find(post => post.id === id)
//     }
//   }
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       deletePost: (id) => dispatch(deletePost(id))
//     }
//   }
//   connect(mapStateToProps, mapDispatchToProps)
  export default (withStyles(styles)(CreateSoldierDialog))