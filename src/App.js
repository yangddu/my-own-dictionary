import './App.css';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import AddWord from './AddWord';
import React, { useState } from 'react';
import ListWord from './ListWord';
import GlobalStyle from './styles/GlobalStyle';


function App() {


  const [word, setWord] = useState([
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
  ]);
  console.log(word);


  return (
    <div>
      <GlobalStyle />
      <Wrap>
        <Title>내 마음대로 사전</Title>

        <Route exact path="/">
          <p>자네, 내가 궁금한가 ?</p>
          <Link to="/addword">
            <button>시작해보자</button>
          </Link>
        </Route>

        <Route path="/addword">
          <AddWord setWord={setWord}/>
        </Route>

        <Route path="/listword">
          <ListWord word={word}/>
        </Route>

      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  height: 100vh;
  margin: 0 auto;
  position: relative; 
`

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 900;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

export default App;
