import {
  Directive,
  Inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

class LetContext<T> {
  constructor(private readonly dir: LetDirective<T>) {}

  get aeLet(): T | undefined {
    return this.dir.aeLet;
  }
}

@Directive({
  selector: '[aeLet]',
})
export class LetDirective<T> {
  @Input()
  aeLet?: T;

  constructor(
    @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
    @Inject(TemplateRef) templateRef: TemplateRef<LetContext<T>>
  ) {
    viewContainer.createEmbeddedView(templateRef, new LetContext<T>(this));
  }
}
