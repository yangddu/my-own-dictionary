// word.js

// Actions
const CREATE = 'word/CREATE';

const initialState = {
    word : [
        {
          id: 0, 
          word: 'ㅎ1ㅎ1',
          description: '히히를 변형한 단어.',
          example: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1'
        },
        {
          id: 1,
          word: 'ㅎ2ㅎ2',
          description: '하이하이를 표현한 단어.',
          example: '야 반갑다 ㅎ2ㅎ2.'
        },
      ]
};


// Action Creators
export function createWord(word) {
    return { type: CREATE, word };
}

// Reducer
export default function reducer(state = initialState,  action = {}) {
    switch (action.type) {
        case "word/CREATE" : {
            console.log('이제 완료할거야!');
            const new_word_list = [...state.word, action.word];
            return {word : new_word_list};
        }
        default: 
            return state;
    }
}