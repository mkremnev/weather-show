import './styles/main.scss';

export const App = () => {
  const container = document.createElement('div');

  const button = document.createElement('button');
  button.innerText = 'Нажми на меня';
  button.addEventListener('click', () => console.log('click'));

  container.appendChild(button);
  return container;
};
