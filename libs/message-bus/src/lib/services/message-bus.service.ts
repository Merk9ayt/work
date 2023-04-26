import { Injectable } from '@angular/core';
import { filter, Observable, Subject, take } from 'rxjs';
import { EventData } from '../models/event-data';

/**
 * The message bus service implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class MessageBusService {
  private readonly messageBus: Subject<EventData> = new Subject<EventData>();

  private readonly separator = ':';

  /**
   * publishes a message/event to the bus.
   * @param type   The type identifier of the message.
   * @param [data]  Optional: Additional data to be sent with the message/event.
   * @throws {Error} when the key parameter is an empty string.
   */
  public emit(type: string, data?: unknown): void {
    if (!type.trim().length) {
      throw new Error('The type parameter shall not be an empty string.');
    }

    const eventData: EventData = {
      type,
      data,
    };

    this.messageBus.next(eventData);
  }

  /**
   * Subscribes to an event of the specified type.
   * The type could contain wildcard definition, e.g. feature:* that means all
   * messages related to the 'feature' scope.
   * @param type The type identifier of the message.
   */
  public on(type: string): Observable<EventData> {
    return this.messageBus
      .asObservable()
      .pipe(filter((event: EventData) => this.typeMatch(event.type, type)));
  }

  /**
   * Subscribes to the first emission of an event of the specified type.
   * The type could contain wildcard definition, e.g. feature:* that means all
   * messages related to the 'feature' scope.
   * @param type The type identifier of the message.
   */
  public once(type: string): Observable<EventData> {
    return this.on(type).pipe(take(1));
  }

  private typeMatch(type: string, pattern: string): boolean {
    const patternMatcher = this.makeRegexp(pattern);
    return patternMatcher.test(type);
  }

  private makeRegexp(pattern: string): RegExp {
    const regexpPattern = this.transform(pattern);
    return new RegExp(`^${regexpPattern}$`);
  }

  private escapeRegExpChar(char: string): string {
    if (
      char === '-' ||
      char === '^' ||
      char === '$' ||
      char === '+' ||
      char === '.' ||
      char === '(' ||
      char === ')' ||
      char === '|' ||
      char === '[' ||
      char === ']' ||
      char === '{' ||
      char === '}' ||
      char === '*' ||
      char === '?' ||
      char === '\\'
    ) {
      return `\\${char}`;
    } else {
      return char;
    }
  }

  private escapeRegExpString(str: string): string {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += this.escapeRegExpChar(str[i]);
    }
    return result;
  }

  private transform(pattern: string | string[]): string {
    if (Array.isArray(pattern)) {
      const regExpPatterns = pattern.map(p => `^${this.transform(p)}$`);
      return `(?:${regExpPatterns.join('|')})`;
    }

    let separatorMatcher = '';
    let wildcard = '.';

    separatorMatcher = this.escapeRegExpString(this.separator);

    if (separatorMatcher.length > 1) {
      separatorMatcher = `(?:${separatorMatcher})`;
      wildcard = `((?!${separatorMatcher}).)`;
    } else {
      wildcard = `[^${separatorMatcher}]`;
    }

    const requiredSeparator = `${separatorMatcher}+?`;
    const optionalSeparator = `${separatorMatcher}*?`;

    const segments = pattern.split(this.separator);
    let result = '';

    for (let s = 0; s < segments.length; s++) {
      const segment = segments[s];
      const nextSegment = segments[s + 1];
      let currentSeparator = '';

      if (!segment && s > 0) {
        continue;
      }

      if (s === segments.length - 1) {
        currentSeparator = optionalSeparator;
      } else if (nextSegment !== '**') {
        currentSeparator = requiredSeparator;
      } else {
        currentSeparator = '';
      }

      if (segment === '**') {
        if (currentSeparator) {
          result += s === 0 ? '' : currentSeparator;
          result += `(?:${wildcard}*?${currentSeparator})*?`;
        }
        continue;
      }

      for (let c = 0; c < segment.length; c++) {
        const char = segment[c];

        if (char === '\\') {
          if (c < segment.length - 1) {
            result += this.escapeRegExpChar(segment[c + 1]);
            c++;
          }
        } else if (char === '?') {
          result += wildcard;
        } else if (char === '*') {
          result += `${wildcard}*?`;
        } else {
          result += this.escapeRegExpChar(char);
        }
      }

      result += currentSeparator;
    }

    return result;
  }
}
