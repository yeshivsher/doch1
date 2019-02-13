import { connect } from 'react-redux'
import { receiveSoldiersSuccess } from '../actions/soldiersListAction';

export const fetchAllSoldiers = () => (dispatch) => {
    return fetch('http://localhost:5000/api/soldiers'
    ).then(respond => respond.json()
    ).then(soldiers => {
        dispatch(receiveSoldiersSuccess(soldiers));
    }).catch(err => {
        console.log(err);
    });
}

// const mapStateToProps = (state) => {
//     return {
//         soldiers: state.soldiers
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setSoldiers: (soldiers) => dispatch(setSoldiers(soldiers))
//     }
// }

// export default connect(null, mapDispatchToProps)();
