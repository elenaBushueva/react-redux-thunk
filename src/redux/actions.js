import axios from 'axios';

export function getStatuses() {
    return (dispatch) => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/column')
            .then(res => {
                dispatch({type: 'GET_STATUSES', payload: res.data})
            })
            .catch(err => console.log('err'))
    }
}

export function getCards() {
    return (dispatch) => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/card')
            .then(res => {
                dispatch({type: 'GET_CARDS', payload: res.data})
            })
            .catch(err => console.log('err'))
    }
}



export function changeStatus(card, statuses, direction) {

    const newStatuses = statuses.map(el => el.title);
    const status = newStatuses[newStatuses.indexOf(card.status) + direction];

    return (dispatch) => {
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${card._id}`, {status})
            .then(res => dispatch(getCards()))
            .catch(err => console.log('err'))
    }
}



export function createCard(newCard) {
    return (dispatch) => {
        axios.post('http://nazarov-kanban-server.herokuapp.com/card', newCard)
            .then(res => {
                dispatch(getCards())
            })
            .catch(err => console.log('err'))
    }
}


export function deleteCard(id) {

    return (dispatch) => {
        axios.delete(`http://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then(res => dispatch(getCards()))
            .catch(err => console.log('err'))
    }
}