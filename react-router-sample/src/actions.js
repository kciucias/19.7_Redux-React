import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text: text
  }
}

// typ akcji:
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT'

// kreator akcji:
export function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

// typ akcji:
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT'

// kreator akcji:
export function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}




