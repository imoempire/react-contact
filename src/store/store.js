import { createStore } from "redux";
import contactsReducer from "../contactsReducer/contactsReducer";

const store= createStore(contactsReducer)

export default store