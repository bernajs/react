export function selectBook(book) {
    return {type: 'BOOK_SELECTED', payload: book}
}

export function selectCard(card) {
    return {type: 'CARD_SELECTED', payload: card}
}