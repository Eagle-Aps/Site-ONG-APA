import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import background from './imagens/background.png';
import App from './rotas/App';
import Sobre from './rotas/Sobre'
import Adotar from './rotas/Adotar';
import Doacao from './rotas/Doacao';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const GlobalStyle = createGlobalStyle `
  body {
    text-decoration: none;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    background-image: url(${background});
    display:flex;
    flex-direction: column;
    
  }

  p {
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  h1 {
    text-decoration: none;
  }

  img {
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    text-decoration: none;
  }

  li {
    text-decoration: none;
    list-style-type: none;
    }
    .Logo-nome{
      padding: 5px;
    }
    .App-link {
      color: #61dafb;
    }
    
    .Logo{
      display: flex;
    }
        
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element = {<App />} />
      <Route path="/sobre" element = {<Sobre />} />
      <Route path="/adotar" element = {<Adotar />} />
      <Route path="/doacao" element = {<Doacao />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
