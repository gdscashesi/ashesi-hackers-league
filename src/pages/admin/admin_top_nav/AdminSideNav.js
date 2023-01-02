//libraries
import { useState } from "react";

//styles
import SideNavStyles from "./admin-side-nav.module.scss";

//Components
import Button from "components/button/Button";
import { NavigationButtons } from "./NavigationButtons";

//utils
import { HOME } from "utils/constants";

const AdminSideNav = () => {
  const [activePage, setActivePage] = useState(HOME);

  return (
    <nav className={SideNavStyles.wrapper}>
      <h1>Admin</h1>
      {NavigationButtons?.map((button) => {
        return (
          <Button
            key={button.text}
            text={button.text}
            to={button.to}
            styles={{
              cssText: `${
                activePage === button.text
                  ? "background-color: #f0f0f080; color: var(--gradient-green); font-size: 105%; font-weight: 800; border-right: 0.15rem solid var(--gradient-green)"
                  : "background-color: initial; color: default"
              }`,
            }}
            onClick={() => setActivePage(button.text)}
          />
        );
      })}
    </nav>
  );
};

export default AdminSideNav;
