import { COLORS } from '../../utils/colors';

export const PADDING = {
  left: 40,
  bottom: 20,
  right: 20,
  top: 20,
};
export const X_DOMAIN = {
  min: 2018,
  max: 2020,
};
export const Y_DOMAIN = {
  min: 0,
  max: 35,
};
export const scatter = {
  width: 6,
  height: 6,
  rx: 2,
};

export const stroke = {
  width: 5,
};
export const tickCount = 3;

export const AreaTheme = {
  gradient: {
    from: { color: COLORS.CONCRETE },
    to: { color: COLORS.CONCRETE },
  },
};
export const LineTheme = {
  stroke: { color: COLORS.CONIFER, width: stroke.width },
  scatter: { default: scatter },
};
