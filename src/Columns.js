import React from 'react';
import {connect} from "react-redux";
import Card from "./Card";

const Columns = (props) => {
    return (

        <div className="col">
            <h2> {props.status.title} </h2>
            {props.tasks
                .filter(el => el.status === props.status.title)
                .map(el => <Card key={el._id} task={el} toggle={props.toggle}/>)}

        </div>

    );
};

const mapStateToProps = state => ({
    tasks: state.tasks,
})

export default connect(mapStateToProps)(Columns);