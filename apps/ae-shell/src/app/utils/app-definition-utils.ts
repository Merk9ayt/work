import { ApplicationDefinition } from '@ae-labs/configuration';

export function flattenApplications(
  applications: ApplicationDefinition[]
): ApplicationDefinition[] {
  let children: ApplicationDefinition[] = [];
  const flattenMembers = applications.map(x => {
    const module = { ...x };
    if (x.children && x.children.length) {
      children = [...children, ...x.children];
    }
    delete module.children;
    return module;
  });

  return flattenMembers.concat(
    children.length ? flattenApplications(children) : children
  );
}
