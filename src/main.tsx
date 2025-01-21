import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  src1 from './assets/1.jpg'
import  src2 from './assets/2.jpg'
import  src3 from './assets/3.jpg'


const srcs =[src1, src2, src3]

let index = 0
let timer: number | undefined;

const container = document.getElementById('root');
const root = createRoot(container!);

function render(){
  root.render(
    <StrictMode>
      <img src={srcs[index]} alt='' />
    </StrictMode>,
  )
}

function start(){
    stop();
    timer = setInterval(() => {
      render();
      index =(index + 1) % srcs.length;
  }, 1000)
}

function stop(){
  clearInterval(timer);
}

start();

container?.addEventListener('mouseenter', stop);
container?.addEventListener('mouseleave', start);


