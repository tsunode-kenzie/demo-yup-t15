import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary: #283ADE;
    --color-secondary: #3A0707;
    --color-white: #EFEFEF;
    --color-transparent: rgba(217, 217, 217, 0.36);
    --color-success: #7CC39C;
    --color-warning: #FBEA85;
    --color-error: #EA524F;

    font-size: 60%;   
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: linear-gradient(180deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: var(--color-white);
    font-weight: 500;
  }

  h1 {
    font-size: 4.3rem;
  }

  button {
    cursor: pointer;
  }

  label {
    color: var(--color-white);
  }
`;
