import {combineReducers} from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

import ActiveCard from './reducer_active_card'
import CardsReducer from './reducer_cards'

const rootReducer = combineReducers({books: BooksReducer, activeBook: ActiveBook, cards: CardsReducer, activeCard: ActiveCard});

export default rootReducer;
