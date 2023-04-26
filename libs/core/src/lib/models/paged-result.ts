export interface PagedResult<TResult> {
    entries: TResult[];
    page?: number | null;
    pageSize?: number | null;
    total?: number | null;
}
