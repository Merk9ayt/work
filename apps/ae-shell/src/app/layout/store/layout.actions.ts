export class ToggleMenu {
  static readonly type = '[LayoutState] Toggle Menu';
}

export class SetActiveMenu {
  static readonly type = '[LayoutState] Set Active Menu';

  constructor(public index?: number) {}
}

export class ShowFullMenu {
  static readonly type = '[LayoutState] Show Full Menu';

  constructor(public show: boolean) {}
}
