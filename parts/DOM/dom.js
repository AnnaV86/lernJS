const settingType = {
  Attribute: 'attribute',
  class: 'class',
};

const containers = document.querySelectorAll('.js_button');

const settingButtons = document.querySelectorAll('[data-setting-name]');

const setDataAttribute = ({ settingTarget }, params) => {
  const element = document.querySelector(settingTarget);
  console.log(element);

  for (const [key, value] of Object.entries(params)) {
    element.dataset[key] = value;
  }
};
const setClass = ({ settingTarget }, params) => {
  console.log('>>>', { settingTarget }, '>>>2', params);

  const element = document.querySelector(settingTarget);
  console.log('element>>>', element);
  
  for (const [key, value] of Object.entries(params)) {
    const elements = Array.from(settingButtons).filter(
      (element) => element.dataset['settingName'] === key
    );
    elements.forEach((item) =>
      element.classList.remove(item.dataset.settingValue)
    );
    element.classList.add(value);
  }
};

const setButtonActive = (params) => {
  for (const [key, value] of Object.entries(params)) {
    const activeButton = Array.from(settingButtons).find(
      (element) =>
        element.dataset['settingName'] === key &&
        element.classList.contains('active')
    );
    const setButton = Array.from(settingButtons).find(
      (element) =>
        element.dataset['settingName'] === key &&
        element.dataset['settingValue'] === value
    );
    activeButton.classList.remove('active');
    setButton.classList.add('active');
  }
};

const applySetting = (setting, params) => {
  if (setting.settingType === settingType.class) {
    setClass(setting, params);
  } else if (setting.settingType === settingType.Attribute) {
    setDataAttribute(setting, params);
  }
  setButtonActive(params);
};

const settingButtonClickHandler = (evt, setting) => {
  const button = evt.target.closest('button');
  if (!button) {
    return;
  }
  const params = {};
  const settingName = button.dataset.settingName;
  const settingValue = button.dataset.settingValue;
  params[settingName] = settingValue;
  applySetting(setting, params);
  console.log('params>>>', params, 'setting>>>', setting);
};

const init = () => {
  containers.forEach((container) => {
    const setting = container.dataset;
    console.log(setting);
    container.addEventListener('click', (evt) => {
      settingButtonClickHandler(evt, setting);
      console.log('evt>>>', evt, 'setting>>>', setting);
    });
  });
};
init();
