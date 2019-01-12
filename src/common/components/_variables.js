export const num_4xs = "1px";
export const num_3xs = "2px";
export const num_2xs = "3px";
export const num_xs = "5px";
export const num_s = "8px";
export const num_m = "13px";
export const num_l = "21px";
export const num_xl = "34px";
export const num_2xl = "55px";
export const num_3xl = "89px";
export const num_4xl = "144px";
export const num_5xl = "233px";

export const opacity_3xs = 0.08;
export const opacity_2xs = 0.13;
export const opacity_xs = 0.21;
export const opacity_s = 0.34;
export const opacity_m = 0.55;
export const opacity_l = 0.89;

/* Typography tokens */

export const line_height = 1.61;
export const line_height_sm = 1.21;

export const font_family = "IBM Plex Sans";
export const font_family_code = "IBM Plex Mono";
export const font_family_display = "lazer84";
export const font_fallbacks =
    // eslint-disable-next-line quotes
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const letter_spacing = "1px";
export const letter_spacing_xs = "0.25px";

export const diff_black = "#131313";
export const diff_dark_grey = "#555555";
export const diff_grey = "#8c8c8c";
export const diff_white = "#f1f1f1";
export const diff_highlight_mix =
    "linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0) 100%)";

export const diff_white_purple = "#af84e4";
export const diff_white_golden = "#e5e380";

export const diff_purple_bright = "#7d59aa";
export const diff_purple_dark = "#59437b";
export const diff_golden_bright = "#b0ae42";
export const diff_golden_dark = "#8b892c";

export const diff_brand_purple = "rgb(34, 0, 81)";
export const diff_brand_violet = "rgb(44, 0, 50)";

export const diff_confirmation_green = "#3eeb82";
export const diff_important_red = "#ff3a3a";
export const diff_alert_orange = "#ffb027";

/* Gradient definitions */

export const diff_brand_mix = `linear-gradient(-45deg, transparent 0%, ${diff_brand_violet} 80%, ${diff_brand_purple} 100%)`;
export const diff_purple_mix = `linear-gradient(45deg, ${diff_purple_bright} 0%, ${diff_purple_dark} 67%, ${diff_purple_bright} 100%)`;
export const diff_golden_mix = `linear-gradient(45deg, ${diff_golden_bright} 0%, ${diff_golden_dark} 67%, ${diff_golden_bright} 100%)`;
export const diff_bright_mix = `linear-gradient(45deg, ${diff_golden_bright} 0%, ${diff_purple_bright} 100%, ${diff_golden_bright} 100%)`;
export const diff_dark_mix = `linear-gradient(45deg, ${diff_golden_dark} 0%, ${diff_purple_dark} 100%, ${diff_golden_dark} 100%)`;
export const diff_ellipsis_mix =
    "radial-gradient(ellipse at top left, rgba(34,0,81,1) 0%,rgba(44,0,50,0.83) 17%,rgba(19,19,19,0.3) 70%,rgba(19,19,19,0) 100%)";
export const diff_fluent_mix =
    "linear-gradient( 45deg, rgba(67,67,67, 0.55) 0%, rgba(52, 52, 52, 0.34) 100%), linear-gradient( 45deg, rgba(52,52,52,.93) 0%, rgba(33,33,33,0.93) 100%)";

/* Typography definitions */

export const bold = 500;
export const font_default = `400 14px/${line_height} ${font_family}, ${font_fallbacks}`;

export const font_m = `400 13px/${line_height_sm} ${font_family}, ${font_fallbacks}`;
export const font_s = `400 12px/${line_height_sm} ${font_family}, ${font_fallbacks}`;
export const font_xs = `400 11px/${line_height_sm} ${font_family}, ${font_fallbacks}`;
export const font_2xs = `400 10px/${line_height_sm} ${font_family}, ${font_fallbacks}`;

export const font_h1 = `${bold} 42px/${line_height_sm} ${font_family}, ${font_fallbacks}`;
export const font_h2 = `400 30px/${line_height_sm} ${font_family}, ${font_fallbacks}`;
export const font_h3 = `${bold} 20px/${line_height_sm} ${font_family}, ${font_fallbacks}`;
export const font_h4 = `400 ${16 /
    line_height_sm} ${font_family}, ${font_fallbacks}`;
export const font_h5 = `${bold} ${15 /
    line_height_sm} ${font_family}, ${font_fallbacks}`;
export const font_h6 = `${bold} 11px/${line_height_sm} ${font_family}, ${font_fallbacks}`;

export const font_em = `400 89%/${line_height_sm}px 'lazer84', ${font_fallbacks}`;
export const font_em_bg = `400 ${48 /
    line_height_sm}px 'lazer84', ${font_fallbacks}`;

export const font_code = `400 ${13 /
    line_height}px ${font_family_code}, ${font_fallbacks}`;
export const font_link = `${bold} 100%/${line_height_sm} ${font_family}, ${font_fallbacks}`;

export const font_display_xl = `400 ${96 /
    line_height_sm}px ${font_family_display}, ${font_fallbacks}`;

/* Container tokens */

export const border_decorative = "1px solid";
export const border_actionable = "2px solid";

export const border_bright_mix = `${diff_golden_dark} ${diff_golden_bright} ${diff_purple_dark} ${diff_purple_bright}`;
export const border_primary = `${diff_purple_bright}`;
export const border_secondary = `${diff_golden_dark}`;
export const border_white = `${diff_white}`;

export const corners_xs = `${num_3xs} ${num_3xs} ${num_3xs} ${num_3xs}`;
export const corners_s = `${num_2xs} ${num_2xs} ${num_s} ${num_2xs}`;
export const corners_m = `${num_xs} ${num_xs} ${num_m} ${num_xs}`;
export const corners_l = `${num_s} ${num_s} ${num_l} ${num_s}`;
export const corners_avatar = `50% 50% ${num_xs} 50%`;
export const corners_radial = "50%";

export const transition_quick = "89ms";
export const transition_regular = "280ms";
export const transition_regular_num = 280;
export const transition_slow = "500ms";

export const acceleration_default = "ease";
export const acceleration_sine = "cubic-bezier(0.390, 0.575, 0.565, 1.000)";
export const acceleration_bounce = "cubic-bezier(0.175, 0.885, 0.320, 1.275)";

export const anim_group_delay = "1000ms";

export const card_vertical_width = "229px";
export const card_vertical_height = `calc(${card_vertical_width} * 1.6)`;

export const img_horizontal_height = "120px";
export const img_horizontal_width = `calc(${img_horizontal_height} * 1.6)`;

export const img_slider_horizontal_height = "100px";
export const img_slider_horizontal_width = `calc(${img_slider_horizontal_height} * 1.6)`;
