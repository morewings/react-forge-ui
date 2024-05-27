export const theme = {
    fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    fontFamilyMonospace: `"SF Mono", "Courier New", FreeMono, "Nimbus Mono PS", Cousine, monospace`,
    sizeUnit: '6px',
    inputWidth: '240px',
    inputHeight: '38px',
    // font sizes
    fontSizeH1: '36px',
    fontSizeH2: '28px',
    fontSizeH3: '24px',
    fontSizeH4: '22px',
    fontSizeH5: '18px',
    fontSizeH6: '16px',
    fontSizeText: '16px',
    fontSizeMedium: '16px',
    fontSizeLarge: '18px',
    fontSizeSmall: '14px',
    fontSizeExtraSmall: '12px',
    // font weights
    fontWeightNormal: 400,
    fontWeightBolder: 500,
    fontWeightBold: 600,
    // colors
    textColor: '#111111',
    background000: 'white',
    background100: '#dedede',
    background200: '#bdbdbd',
    background300: '#808080',
    background400: '#525252',
    background500: '#363636',
    background600: '#000000',
    // theme
    colorDo: '#e3a075',
    colorRe: '#61483a',
    colorMi: '#ffdea6',
    colorFa: '#597480',
    colorSol: '#99DFFF',
    // info colors
    colorError: '#FF0000',
    colorWarning: 'orange',
    colorSuccess: 'green',
    colorAction: 'blue',
    // shadow config
    shadowColor: 'color-mix(in srgb, var(--fg-background-600) 11%, transparent)',
    shadow050: '3px 3px 3px 0 var(--fg-shadow-Color)',
    shadow100: '6px 6px 3px 0 var(--fg-shadow-Color)',
    shadow200: '9px 9px 3px 0 var(--fg-shadow-Color)',
    textShadow: '1px 1px 1px rgb(0 0 0 / 66%)',
};

export type ThemeType = Partial<typeof theme>;
