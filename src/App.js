import './App.css';
import {connect} from "react-redux";
import Columns from "./Columns";
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from "react";
import {getCards, getStatuses} from "./redux/actions";

function App(props) {

    useEffect(() => {
        props.getStatuses();
    }, []);

    useEffect(() => {
        props.getCards();
    }, [])

    return (

        <div className="container">

            <h1>Kanban redux</h1>

            <div className="row align-items-start">

                {props.statuses.map(el => <Columns key={el._id} status={el}/>)}

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
