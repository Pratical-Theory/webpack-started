
import css from '../css/componentes.css';

imfort webpacklogo from '..assets/webpack-logo.png';

export const saludar = ( nombre ) => {
    console.log('Creando etiqueta h1');
    console.log(nombre);
    const h1 = document.createElement('h1');
    h1.innerText = `Hola , ${ nombre }!!!`
    document.body.append( h1 );
}
