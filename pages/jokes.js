import renderToDom from '../utils/utilFunc/renderToDom';

const showSetup = (response) => {
  const setup = `<p>${response.setup}</p>`;

  renderToDom('#setup', setup);
};

const showDelivery = (response) => {
  const delivery = `<p>${response.delivery}</p>`;

  renderToDom('#delivery', delivery);
};

export { showSetup, showDelivery };
