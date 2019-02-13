import { Paper, Typography, withStyles, CardMedia, CardContent, Card, CardActionArea } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import qrImage from '../images/qrImage.jpg';
import soldiersImage from '../images/soldiers.jpg';


const styles = {
    mainGrid: {
    },
    navigationCards: {
        display: 'flex',
        'flex-direction': 'row',
        'justify-content': 'center',
        'align-items': 'baseLine',
        'text-align': 'center',
    },
    card: {
        width: 350,
        margin: '10px',
        borderRadius: 6,
        color: 'blue'
    },
    CardContent: {
        textDecoration: 'none',
    },
    header: {
        height: 100,
    },
    headerPaper: {
        height: 80,
        textAlign: 'center',
        background: 'rgb(199, 193, 193)'
    },
};

class Home extends Component {
    state = {
    }

    componentDidMount() {
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.mainGrid}>
                <div className={classes.header}>
                    <Paper className={classes.headerPaper} elevation={1}>
                        <Typography variant="h2" component="h3">
                            ברוך הבא למערכת דוח 1
                        </Typography>
                    </Paper>
                </div>

                <div className={classes.navigationCards}>
                    <NavLink exact to="/SoldiersList" className={classes.CardContent}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.media}
                                    height="350"
                                    image={soldiersImage}
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="h2">
                                        רשימת החיילים
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </NavLink>

                    <NavLink exact to="/" className={classes.CardContent}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.media}
                                    height="350"
                                    image={qrImage}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        יצירת QR קוד
                            </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </NavLink>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);