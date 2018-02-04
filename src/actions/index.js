export function selectBook(book) {

    // selectBook is an action creator that needs to return an action object.
    // an object with a type property.
    /*
    * Action objects usually have two values 1) a type -> describes the purpose of the action 2) a payload -> further clarifies the conditions of the action that is being triggered.
    */
    return {
        type: 'BOOK_SELECTED',
        payload: book

    };
}
