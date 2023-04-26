import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { SampleRequest } from '../models/sample-request';
import { SampleRequestStatus } from '../models/sample-request-status.enum';

@Injectable({
  providedIn: 'root',
})
export class SampleRequestDataSourceService {
  getSampleRequests(status: SampleRequestStatus): Observable<SampleRequest[]> {
    return of([
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 1',
        },
        status: SampleRequestStatus.Requested,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 2',
        },
        status: SampleRequestStatus.Requested,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 3',
        },
        status: SampleRequestStatus.Requested,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 12',
        },
        status: SampleRequestStatus.InProgress,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 13',
        },
        status: SampleRequestStatus.Received,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 22',
        },
        status: SampleRequestStatus.Requested,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 1',
        },
        status: SampleRequestStatus.Requested,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 2',
        },
        status: SampleRequestStatus.Requested,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 3',
        },
        status: SampleRequestStatus.Requested,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 12',
        },
        status: SampleRequestStatus.InProgress,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 13',
        },
        status: SampleRequestStatus.Received,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: 'Амиак 22',
        },
        status: SampleRequestStatus.Requested,
      },
      {
        plannedDate: '2023-01-23T00:00:00Z',
        source: {
          name: "I'm cancelled guy",
        },
        status: SampleRequestStatus.Canceled,
      },
    ]).pipe(map(requests => requests.filter(x => x.status === status)));
  }
}
