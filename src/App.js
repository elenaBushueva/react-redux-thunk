import './App.css';
import {connect} from "react-redux";
import Columns from "./Columns";
import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect, useState} from "react";
import {getCards, getStatuses} from "./redux/actions";
import CreateModal from "./CreateModal";
import {Button} from "reactstrap";

function App(props) {

    const [modalType, setModalType] = useState('');

    const [isOpen, setIsOpen] = useState(false);

    const [task, setTask] = useState({})

    const toggle = (typeMo, task) => {
        setTask(task);
        setModalType(typeMo);
        setIsOpen(!isOpen);
    }


    useEffect(() => {
        props.getStatuses();
    }, []);

    useEffect(() => {
        props.getCards();
    }, [])

    return (

        <div className="container">

            <h1>Kanban redux thunk</h1>

            <Button color="primary" onClick={() => toggle('create')}>
                Create Task
            </Button>

            {isOpen && <CreateModal isOpen={isOpen} toggle={toggle} modalType={modalType} task={task}/>}


            <div className="row align-items-start">

                {props.statuses.map(el => <Columns
                    key={el._id}
                    status={el}
                    toggle={toggle}
                />)}

            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    statuses: state.statuses,
});

const mapDispatchToProps = dispatch => ({
    getStatuses: () => dispatch(getStatuses()),
    getCards: () => dispatch(getCards())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
