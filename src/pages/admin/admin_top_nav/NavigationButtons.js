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
    text: CREATE,
    to: `${ADMIN}${HOME}${CREATE}`,
  },
  {
    text: PUBLISHED,
    to: `${ADMIN}${HOME}${PUBLISHED}`,
  },
  {
    text: UPDATE_TABLE,
    to: `${ADMIN}${HOME}${UPDATE_TABLE}`,
  },
  {
    text: SETTINGS,
    to: `${ADMIN}${HOME}${SETTINGS}`,
  },
];
