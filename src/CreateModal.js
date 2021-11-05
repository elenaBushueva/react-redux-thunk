import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from "react-redux";
import {createCard, deleteCard} from "./redux/actions";


const CreateModal = (props) => {

    const {toggle, isOpen} = props;

    const [inputName, setInputName] = useState('');
    const [inputDescription, setInputDescription] = useState('');

    const onCreateCard = () => {
        const newCard = {
            name: inputName,
            description: inputDescription,
            status: 'todo',
            priority: 1,
        };
        props.createCard(newCard);
        toggle();
    }


    const onDelete = () => {
        props.deleteCard(props.task._id);
        toggle();
    }


    return (
        <div>

            <Modal
                toggle={toggle}
                isOpen={isOpen}
            >
                <ModalHeader toggle={toggle}>
                    {props.modalType === 'create' ? 'Create Task' : `are you sure you want delete the task:`}

                </ModalHeader>
                {props.modalType === 'create' && <ModalBody>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Task name" aria-label="Username"
                               aria-describedby="basic-addon1" value={inputName}
                               onChange={(e) => setInputName(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Task description" aria-label="Username"
                               aria-describedby="basic-addon1" value={inputDescription}
                               onChange={(e) => setInputDescription(e.target.value)}/>
                    </div>
                </ModalBody>}

                {props.modalType === 'delete' && <ModalBody>
                    <p>{props.task.name}</p>
                </ModalBody>}

                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={props.modalType === 'create' ? onCreateCard : onDelete}
                    >
                        {props.modalType === 'create' ? 'Create Task' : 'delete'}
                    </Button>
                    {' '}
                    <Button onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    createCard: (newCard) => dispatch(createCard(newCard)),
    deleteCard: (id) => dispatch(deleteCard(id))
})

export default connect(null, mapDispatchToProps)(CreateModal);