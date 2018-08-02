const { compose } = require("react-app-rewired");
const { createEmotionRewire } = require("react-app-rewire-emotion");
/* config-overrides.js */
module.exports = function override(config, env) {
  const rewires = compose(
    //createRewireForSomeOtherPlugin(),
    // ... place more rewires
    createEmotionRewire({})
  );
  return rewires(config, env);
};
