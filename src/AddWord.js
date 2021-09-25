import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import ListWord from './ListWord';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createWord } from './redux/modules/word'
 
const AddWord = ({ setWord }) => {

    
    const history = useHistory();

    const wordRef = React.useRef(null);
    const descRef = React.useRef(null);
    const exampleRef = React.useRef(null);
    const idRef = React.useRef(2);
    const dispatch = useDispatch();
    console.log(wordRef, descRef, exampleRef)

    const addDicWord = (e) => {
        e.preventDefault();
        console.log(wordRef.current.value)
        console.log(descRef.current.value)
        console.log(exampleRef.current.value)


        const dic = {'id' : idRef.current, 'word': wordRef.current.value, 'description' :  descRef.current.value, 'example' : exampleRef.current.value}
        setWord( (cherry) => [...cherry, dic])
        idRef.current++;
        history.push('/listword');

        dispatch(createWord(dic));

        // history.push('/listword');
        // {
        //     id: 0, 
        //     word: 'ㅎ1ㅎ1',
        //     description: '히히를 변형한 단어.',
        //     example: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1'
        //   },
    }

    return (
        <>
            <AddWrap>
                <div>단어 추가하기</div>
                <div>
                    단어 : <input type="text" ref={wordRef}/>
                </div>
                <div>
                    설명 : <input type="text" ref={descRef}/>
                </div>
                <div>
                    예시 : <input type="text" ref={exampleRef}/>
                </div>
                <button onClick={addDicWord}>추가하기</button>
            </AddWrap>
        </>
    )
}

const InputBox = styled.div`
    background: #fff;
    padding: 20px;
    margin: 10px;
`

const AddWrap = styled.div`
    text-align: center;
`

export default AddWord;