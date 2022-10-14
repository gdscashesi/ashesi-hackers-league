import React from "react";
import Button from "components/button/Button";

const Settings = () => {
  return (
    <div>
      <Button text="new season" onClick={() => prompt("season name")} />
    </div>
  );
};

export default Settings;
