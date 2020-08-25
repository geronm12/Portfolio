import ReactImage from '../assets/tecnologias/react.png';
import Nodejs from '../assets/tecnologias/NodeJS.jpg';
import Javascript from '../assets/tecnologias/js.png';
import Html from '../assets/tecnologias/html.jpg';
import Css from '../assets/tecnologias/cscss.png';
import Sass from '../assets/tecnologias/scss.jpg';
import Net from '../assets/tecnologias/NET.png';

export const Tecnologias = [
{
    nombre: 'REACT JS',
    text:  "Componentes, Ciclos de vida, Hooks, Redux, Redux Thunk, Graph Ql (Apollo Client), Formik,Yup, Custom Hooks, React Router Dom, Context, Fetch, Async Await, operadores ternarios, spread operator, renderizado condicional, sass (BEM, variables, funciones),React responsive, lodash, toastify,Media Queries.",
    img: ReactImage
}, 
{
    nombre: 'NODE JS',
    text: 'Api rest, Graph Ql (Apollo Server),Mongoose, Express, JWT, Nest Js, typescript, Swagger',
    img: Nodejs
},
{
    nombre: 'JAVASCRIPT',
    text: 'Ecmascript 6, Prototypes, Manejo del DOM, clases, Arrow Function, Async-Await, fetch, ajax,etc',
    img: Javascript
},
{
    nombre: 'HTML',
    text:  'Etiquetas Html, body, head, etc',
    img: Html
},
{
    nombre: 'CSS',
    text: "Animaciones, Pseudo-clases, Pseudo-elementos, Media-Queries",
    img: Css
},
{
    nombre: 'SCSS',
    text:  'Variables, BEM',
    img: Sass
},
{
    nombre: '.NETCORE/C#',
    text:  'Api rest, SOLID, Microservices, Api Gateway Ocelot, CQRS Pattern, MediaTr, Fluent Validations, Data Annotations, Automapper, Unit Test(XUnit), Mock, Genfu, Repository Pattern, Swagger',
    img:  Net
}]