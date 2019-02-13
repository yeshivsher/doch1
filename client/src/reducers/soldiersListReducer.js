const initState = {
    soldiers: []
}

const soldiersListReducer = (state = initState, action) => {
    console.log(action);
    // if (action.type === 'DELETE_POST') {
    //     let newPosts = state.posts.filter(post => {
    //         return post.id !== action.id
    //     });
    //     return {
    //         ...state,
    //         posts: newPosts
    //     }
    // }

    if (action.type === 'RECEIVE_SOLDIERS_SUCCESS') {
        return setAllSoldiers(state);
    }

    if (action.type === 'DELETE_SOLDIER_BY_ID') {
        return deleteSoldierById(state, action);
    }

    return state;
}

function setAllSoldiers(state) {
    return {
        ...state,
        soldiers: state.soldiers
    }
}

function deleteSoldierById(state, action) {
    let tempSoldiers = state.soldiers.filter(soldier => {
        return soldier.id !== action.id
    });
    return {
        ...state,
        soldiers: tempSoldiers
    }
}

export default soldiersListReducer