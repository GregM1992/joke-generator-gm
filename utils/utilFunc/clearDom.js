const clearDom = () => {
  document.querySelector('#setup').innerHTML = '';
  document.querySelector('#delivery').innerHTML = '';
  document.querySelector('#joke-btn').innerHTML = '';
  document.querySelector('#punchline-btn').innerHTML = '';
  document.querySelector('#reset-btn').innerHTML = '';
};

export default clearDom;
