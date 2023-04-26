export interface Error {
  description?: null | string;
  descriptionKey?: null | string;
  extensions?: null | {
    [key: string]: any;
  };
  instance: string;
  stackTrace?: null | Array<string>;
  status: number;
  title: string;
  titleKey?: null | string;
}
