/* tslint:disable */
/* eslint-disable */
export interface ErrorDto {
  description?: null | string;
  extensions?: null | {
[key: string]: any;
};
  instance: string;
  stackTrace?: null | Array<string>;
  status: number;
  title: string;
}
