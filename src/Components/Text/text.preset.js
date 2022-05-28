import { colors } from "../../Theme/Colors";
import { typography } from "../../Theme/Typography";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.purpleText,
};

const BASE_BOLD = {
  fontFamily: typography.primaryBold,
  fontSize: 16,
  color: colors.purpleText,
};

const BOLD = {
  fontFamily: typography.bold,
  color: colors.purpleText,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },

  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 14,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
};
