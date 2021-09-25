import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {db} from './firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const ListWord = (props) => {
    
    // const wordlists = props.word;
    // console.log(wordlists);

    const wordlists = useSelector((state) => state.word.word);
    console.log(wordlists);

    React.useEffect(async() => {
        console.log(db)
        
        addDoc(collection(db, "words"), {id: 4, word: '테스트5', description: '테스트5'});
    }, [])

    return (
        <div>
            {
                wordlists.map((wordlist, index) => {
                    return (
                        <div className="card-wrap" key={index}>
                            <div className="card-box">
                                <div className="card-con">
                                    {wordlist.word}
                                </div>
                                <div className="card-con">
                                    {wordlist.description}
                                </div>
                                <div className="card-con">
                                    {wordlist.example}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


// const Card = styled.div`
//     width: 350px;
//     border-radius: 14px;
//     background-color: #fff;
//     box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
//     margin: 20px;
//     padding: 20px;

// `
export default ListWord;