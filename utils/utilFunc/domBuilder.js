const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id='setup'></div>
  <div id='delivery'></div>
  <div id='joke-btn'></div>
  <div id='punchline-btn'></div>
  <div id='reset-btn'></div>
  `;
};
export default domBuilder;
