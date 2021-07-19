import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      gradientLeft: string;
      gradientRight: string;
      accent: string;
      shadeOne: string;
      shadeTwo: string;
      shadeThree: string;
      background: string;
      text: string;
    };
  }
}
