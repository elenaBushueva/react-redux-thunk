import React from 'react';

const initialState = {
    statuses: [
        {
            _id: '60d8a8650f3453003ca52240',
            title: "todo",
        }, {
            _id: '60d8a87a0f3453003ca52241',
            title: "progress",
        }, {
            _id: '60d8a8910f3453003ca52242',
            title: "review",
        }, {
            _id: '60d8a89d0f3453003ca52243',
            "title": "done"
        }
    ],
    tasks: [
        {name: 'task 1', _id: 111, description: 'do kanban', status: 'todo', priority: 1},
        {name: 'task 2', _id: 112, description: 'do list', status: 'progress', priority: 2},
        {name: 'task 3', _id: 113, description: 'do homework', status: 'progress', priority: 3},
        {name: 'task 4', _id: 114, description: 'do articles', status: 'review', priority: 4},
        {name: 'task 5', _id: 115, description: 'do list of profitable goods', status: 'done', priority: 5},
    ],
    priority: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_STATUSES':
            return {...state, statuses: action.payload};

        case 'GET_CARDS':
            return {...state, tasks: action.payload};


        default:
            return state;

    }


};

export default reducer;