export default (...constants) => (prefix = 'root') => {
  return constants.reduce((action, constant) => {
    action[constant] = `${prefix}/${constant}`;
    return action;
  }, {});
};
