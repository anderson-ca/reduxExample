// state argument is not application state, only the state
// the reducer is responsible for.
/*
* state = null -> a piece of ES6 syntax, which assign null ti state if state returns undefined.
*/
export default function (state = null, action) {

    switch (action.type) {
        case 'BOOK_SELECTED':
            // the return most always be a fresh object without any changes
            // to its properties.
            return action.payload;
    }

    return (state);
}