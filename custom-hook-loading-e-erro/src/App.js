import React, { useEffect, useState } from "react";
import { Title, NameContainer, PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useBuscaDados } from "./hook/useBuscaDados";
import { BASE_URL } from "./constants/constants";

function App() {

  // Chamada da api , retornando todos os nomes
  const [nomeUsuarios,loadingNome,errorNome] = useBuscaDados(`${BASE_URL}users`,[])
  const [postagens,loadingPostagem,errorPostagem] = useBuscaDados(`${BASE_URL}comments`,[])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {loadingNome && <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"/>}
        {!loadingNome && errorNome && <img src="https://media3.giphy.com/media/8L0Pky6C83SzkzU55a/200w.gif?cid=6c09b9520weqiahur6d32o52xlwufc4tpf9b2v1r0vf528jc&rid=200w.gif&ct=g"/>}
        {nomeUsuarios.map((usuario) => {
          return (
            <Card
              key={usuario.id}
              text={usuario.name}
              backgroudColor={'nome'}
              textColor={'nome'}
            />)
        })}
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
      {loadingPostagem && <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"/>}
        {!loadingPostagem && errorPostagem && <img src="https://media3.giphy.com/media/8L0Pky6C83SzkzU55a/200w.gif?cid=6c09b9520weqiahur6d32o52xlwufc4tpf9b2v1r0vf528jc&rid=200w.gif&ct=g"/>}
       
        {postagens.map((post) => {
          return (
            <Card
              key={post.id}
              text={post.body}
              backgroudColor={'#1dc690'}
              textColor={'#ffffff'}
            />)
        })}
      </PostContainer>
    </div>
  );
}

export default App;