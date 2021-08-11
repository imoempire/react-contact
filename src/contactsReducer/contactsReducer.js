const initial= {
    contact: [
        { Name: 'John',
          Phone: '0244945255',
          Location: 'Accra'}
      ],
}

const contactsReducer =(state={initial}, action) =>{
    switch (action.type) {
        case 'ADD_CONTACT':
           return state

        default:
           return state
    }
}
export default contactsReducer;