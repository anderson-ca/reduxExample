import React, {Component} from 'react';
import ReactRedux, {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {

            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className={"list-group-item"}>
                    {book.title}
                </li>
            );
        });
    }

    render() {

        return (

            <ul className={"list-group col-md-4"}>
                {this.renderList()}
            </ul>
        )
    }
}

// glue between react and redux.(helper function)
function mapStateToProps(state) {


    return {
        books: state.books
    }
}

// anything returned from this function will return as props on the BookList container.(helper function)
function mapDispatchToProps(dispatch) {

    // whenever selectBook is called bindActionCreators passes the result to all reducers.
    /*
     * The dispatch function, which is the second argument, takes the result and spits it out
     * to all reducers in the application.
     */
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// promote BookList from a component to a container - it needs to know
// about this new dispatch method selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);






