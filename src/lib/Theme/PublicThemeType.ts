import type {ThemeType} from './theme.ts';

export type PublicThemeType = Pick<
    ThemeType,
    | 'fontFamily'
    | 'fontFamilyMonospace'
    | 'fontSizeH1'
    | 'fontSizeH2'
    | 'fontSizeH3'
    | 'fontSizeH4'
    | 'fontSizeH5'
    | 'fontSizeH6'
    | 'fontSizeText'
    | 'fontSizeMedium'
    | 'fontSizeLarge'
    | 'fontSizeSmall'
    | 'fontSizeExtraSmall'
    | 'fontWeightNormal'
    | 'fontWeightBolder'
    | 'fontWeightBold'
    | 'textColor'
    | 'background000'
    | 'background100'
    | 'background200'
    | 'background300'
    | 'background400'
    | 'background500'
    | 'background600'
    | 'colorDo'
    | 'colorRe'
    | 'colorMi'
    | 'colorFa'
    | 'colorSol'
    | 'colorLa'
    | 'colorError'
    | 'colorWarning'
    | 'colorSuccess'
    | 'colorAction'
>;