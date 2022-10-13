//components
import { PublishedIcon, NewIcon } from "components/icons/Icons";

//utils
import {
  HOME,
  ADMIN,
  PUBLISHED,
  CREATE,
  SETTINGS,
  UPDATE_TABLE,
} from "utils/constants";

export const NavigationButtons = [
  {
    icon: <NewIcon />,
    text: CREATE,
    to: `${ADMIN}${HOME}${CREATE}`,
  },
  {
    icon: <PublishedIcon />,
    text: PUBLISHED,
    to: `${ADMIN}${HOME}${PUBLISHED}`,
  },
  {
    icon: <PublishedIcon />,
    text: UPDATE_TABLE,
    to: `${ADMIN}${HOME}${UPDATE_TABLE}`,
  },
  {
    icon: <PublishedIcon />,
    text: SETTINGS,
    to: `${ADMIN}${HOME}${SETTINGS}`,
  },
];
