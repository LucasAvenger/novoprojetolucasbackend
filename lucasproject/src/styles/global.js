import { createGlobalStyle } from 'styled-componentes';


export default createGlobalStyle`
    * {

      margin:0;
      padding:0;
      box-sizing: border-box;
}

 body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color:${({ theme }) => theme.COLORS.WHITE};
 }
 body, input, button, textarea{
   font-family: 'Roboto Slab', serif;
   font-size: 16px;
   outline:none;


 }

 a {
    text-decoration: none;

 }

 button, a {
    cursor: pointer;
transition: filter 0.2s;
}

button, a {
 filter:brightness(0.9);
}



`;