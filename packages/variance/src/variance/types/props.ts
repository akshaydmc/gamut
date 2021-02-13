export type AbstractProps = Record<string, unknown>;

export interface BaseTheme {
  [key: string]: any;
}

export interface AbstractTheme extends BaseTheme {
  breakpoints?: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface ThemeProps<T extends AbstractProps> {
  theme?: T;
}

export interface CSSObject {
  [key: string]: string | number | CSSObject | undefined;
}

export interface MediaQueryArray<T> {
  0?: T;
  1?: T;
  2?: T;
  3?: T;
  4?: T;
  5?: T;
}
export interface MediaQueryMap<T> {
  base?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

export type ResponsiveProp<T> = T | MediaQueryMap<T> | MediaQueryArray<T>;

export type Chained = `&` | `>` | '~' | '+';

export type SelectorLiterals =
  | `&:${string}`
  | `${Chained} ${string}`
  | `[${string}]`;

export type Selectors<T> = T extends SelectorLiterals ? T : never;

export type SelectorMap<
  Config extends AbstractProps,
  Selectors extends string,
  Props extends AbstractProps
> = {
  [K in keyof Config]: K extends Selectors
    ? Props
    : K extends keyof Props
    ? Props[K]
    : never;
};
