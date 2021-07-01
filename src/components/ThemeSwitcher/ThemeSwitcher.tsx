import { FC } from "react";
import { motion } from "framer-motion";

import { Themes } from "../../utils/themeManagement";
import { CgSun, CgMoon } from "react-icons/cg";
import "./ThemeSwitcher.scss";

interface ThemeSwitcherProps {
  theme: Themes;
  changeTheme: (theme: Themes) => void;
  className: string;
  closeMenu: () => void; // function to close nav-bar deriving from Header component
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = props => {
  const changeTheme = () => {
    if (props.theme === Themes.light) {
      props.changeTheme(Themes.dark);
    } else {
      props.changeTheme(Themes.light);
    }
  };

  return (
    <motion.div
      className={`theme-switcher ${props.className}`}
      onClick={() => {
        changeTheme();
        props.closeMenu(); // when theme change close nav-bar
      }}
      whileTap={{ scale: 1.25 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        animate={{ top: props.theme === Themes.light ? "50%" : 100 }}
        className="theme-switcher__icon"
      >
        <CgSun />
      </motion.div>

      <motion.div
        animate={{ top: props.theme === Themes.dark ? "50%" : 100 }}
        className="theme-switcher__icon"
      >
        <CgMoon />
      </motion.div>
    </motion.div>
  );
};

export default ThemeSwitcher;
