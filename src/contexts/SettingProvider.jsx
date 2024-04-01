import { createContext } from "react";

import PropTypes from "prop-types";

import useSetting from "~/hooks/useSetting";

export const SettingContext = createContext({ state: {}, dispatch: () => {} });

const url = "28912ddd5410287eb4c0";
export const SettingProvider = ({ children }) => {
  const { state, dispatch } = useSetting(url);

  return state.setting.menu.length > 0 ? (
    <SettingContext.Provider value={{ state, dispatch }}>{children}</SettingContext.Provider>
  ) : null;
};
SettingProvider.propTypes = {
  children: PropTypes.node.isRequired
};
