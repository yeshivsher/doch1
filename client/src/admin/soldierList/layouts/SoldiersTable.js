import { LinearProgress, IconButton, Paper, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, Typography, withStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import React, { Fragment } from 'react';
// import { getSoldiers } from '../../../actions/soldiersListAction';
import {fetchAllSoldiers} from '../../../operations/soldiersListOperations';

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },
});

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
        this.props.onChangePage(event, 0);
    };

    handleBackButtonClick = event => {
        this.props.onChangePage(event, this.props.page - 1);
    };

    handleNextButtonClick = event => {
        this.props.onChangePage(event, this.props.page + 1);
    };

    handleLastPageButtonClick = event => {
        this.props.onChangePage(
            event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    };

    render() {
        const { classes, count, page, rowsPerPage, theme } = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="First Page"
                >
                    {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                >
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
                </IconButton>
            </div>
        );
    }
}

TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
);

const styles = theme => ({
    tableRow: {
        "&:hover": {
            backgroundColor: "#c3bcbc",

        },
        fontSize: 30,
    },
    root: {
        fontSize: 30,
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    linearProgress: {
        'border-bottom-left-radius': 3,
        'border-bottom-right-radius': 3,
        margin: 'auto',
        width: '99.4%'
    },
    table: {
        display: 'flow-root',
        minWidth: 500,
        color: 'blue',
        fontSize: 23,
    },
    tableHead: {
        color: '#c3bcbc',
    },
    headOfTableCell: {
        fontSize: 18,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    deleteIcon: {
        margin: theme.spacing.unit,
    },
    footerSumNum: {
        display: 'none'
    },
    footerArrows: {
        margin: 'auto'
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
    }
});

class CustomPaginationActionsTable extends React.Component {
    state = {
        rows: [],
        page: 0,
        rowsPerPage: 5,
        isLoading: true,
    };

    async componentDidMount() {
        // this.props.fetchAllSoldiers();
         this.getAllSoldiers();
    }

    async getAllSoldiers() {
        let soldiers = await this.props.fetchAllSoldiers();
        this.setState({
            rows: soldiers,
            isLoading: false,
        });
        console.log(this.state.rows);
    }

    constructor(props) {
        super(props);
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    deleteSoldierById = (soldierId) => {
        // fetch("http://localhost:3000/api/soldiers/" + soldierId, { method: 'DELETE' }
        // ).then((response) => {
        //     return response.json();
        // }).then((result) => {
        //     console.log(result);
        // });
    }

    render() {
        const { rows } = this.state;
        const { classes } = this.props;
        const { rowsPerPage, page, isLoading } = this.state;
        const emptyRows = (rows > 0) ?
            rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)
            : null;

        return (
            <Fragment>
                {!isLoading ? (
                    <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                            <Table className={classes.table}>
                                <colgroup>
                                    <col style={{ width: '23%' }} />
                                    <col style={{ width: '23%' }} />
                                    <col style={{ width: '23%' }} />
                                    <col style={{ width: '23%' }} />
                                    <col style={{ width: '8%' }} />
                                </colgroup>
                                <TableHead className={classes.tableHead}>
                                    <TableRow>
                                        <TableCell classes={{ head: classes.headOfTableCell }} align="right">שם</TableCell>
                                        <TableCell classes={{ head: classes.headOfTableCell }} align="right">מספר אישי</TableCell>
                                        <TableCell classes={{ head: classes.headOfTableCell }} align="right">מ"א מפקד</TableCell>
                                        <TableCell classes={{ head: classes.headOfTableCell }} align="right">מדור</TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
                                        <TableRow key={row._id} >
                                            <TableCell classes={{ body: classes.headOfTableCell }} align="right">{row.name}</TableCell>
                                            <TableCell classes={{ body: classes.headOfTableCell }} align="right" >
                                                {row.personalNumber}
                                            </TableCell>
                                            <TableCell classes={{ body: classes.headOfTableCell }} align="right">{row.commanderPN}</TableCell>
                                            <TableCell classes={{ body: classes.headOfTableCell }} align="right">{row.mador}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => this.deleteSoldierById(row._id)} size="small" className={classes.deleteIcon}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 48 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                                <TableFooter className={classes.footer}>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[]}
                                            colSpan={3}
                                            count={rows.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            onChangePage={this.handleChangePage}
                                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActionsWrapped}
                                            classes={{ caption: classes.footerSumNum, root: classes.footerArrows }}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                    </Paper>
                ) : (
                        <LinearProgress className={classes.linearProgress} />
                    )
                }
            </Fragment>
        );
    }
}

CustomPaginationActionsTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => {
//     return {
//         soldiers: state.soldiers
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllSoldiers: () =>  
        dispatch(fetchAllSoldiers()),
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(CustomPaginationActionsTable));
