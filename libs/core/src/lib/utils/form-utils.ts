import { FormGroup } from '@angular/forms';
import { PatchOperation } from '../models';
import { OperationType } from '../models/operation-type';

export function toPatchOperation(source: FormGroup): PatchOperation[] {
  const result: PatchOperation[] = [];
  for (const controlName in source.controls) {
    const control = source.controls[controlName];
    if (!control.dirty) {
      continue;
    }
    result.push({
      op: OperationType.Replace,
      value: control.value,
      path: controlName,
    });
  }

  return result;
}
