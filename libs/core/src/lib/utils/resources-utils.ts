export function resourceUrl(url: string): string {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const publicPath = __webpack_public_path__;
  const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';

  return `${publicPath}${publicPathSuffix}${
    url.startsWith('/') ? url.slice(1) : url
  }`;
}
