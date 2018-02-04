import React, { Component } from 'react';
import ReactRedux, { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {

    render() {

        if(!this.props.book) {
            return (
               <div>Select a book to get started!</div>
            );
        }

        return(

            <div>
                <h3>Book details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapsStateToProps(state) {

    return {
        book: state.activeBook
    }
}

// function mapDispatchToProps(dispatch) {
//
//     return bindActionCreators({selectBook: selectBook}, dispatch);
// }

export default connect(mapsStateToProps)(BookDetail)









