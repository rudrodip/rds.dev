/*
  Quote Component
  Created by: Rudrodip Sarker
  Date: August 24, 2023
  Inspired by: https://github.com/enjidev/enji.dev
  GitHub: https://github.com/rudrodip
*/

'use client'

import { cn } from '@lib/utils';
import { ComponentProps } from 'react';

const CodeQuote = () => {
  return (
    <blockquote
      className={cn(
        'flex gap-2 pt-2 text-3xl',
        'md:text-4xl lg:pt-0 lg:text-5xl',
        'mb-6 lg:mb-24'
      )}
    >
      <QuoteIcon
        className={cn(
          '-mt-1 h-10',
          'md:-mt-3 md:h-16 lg:h-24',
        )}
      />
      <span className={cn('flex flex-col')}>
        <span className={cn('leading-[1.15]')}>
          <em>Coding</em>{' '}
        </span>
        <span
          className={cn('flex items-center gap-2 leading-[1.15]', 'lg:gap-4')}
        >
          <span
            className={cn(
              'mt-1 h-0.5 w-8 rounded-full bg-slate-400',
              'lg:h-1 lg:w-24',
              'dark:bg-slate-600'
            )}
          />
          <span>
            <strong
              className={cn(
                'font-extrabold',
              )}
            >
              is the
            </strong>{' '}
            poetry{' '}
            <strong
              className={cn(
                'font-extrabold',
              )}
            >
              of{' '}
            </strong>
          </span>
          <span
            className={cn(
              'mt-1 h-0.5 w-8 rounded-full bg-slate-400',
              'lg:h-1 lg:w-24',
              'dark:bg-slate-600'
            )}
          />
        </span>
        <span className={cn('leading-[1.15]')}>
          logic's{' '}
          <strong
            className={cn(
              'relative font-extrabold',
            )}
          >
            <span
              className={cn(
                'absolute -left-0.5 right-0 top-1 bottom-0 z-[-1] rounded-md px-1',
                'lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0',
              )}
            />
            symphony.
          </strong>
        </span>
        <span className={cn('flex text-sm items-center gap-2 leading-[1.15]', 'lg:gap-4')}>
          <span
            className={cn(
              'mt-1 h-0.5 w-4 rounded-full bg-slate-400',
              'lg:h-0.5 lg:w-4',
              'dark:bg-slate-600'
            )}
          />
          <span className={cn('leading-[1.15]')}>
            <em>gpt-4</em>
          </span>
        </span>
      </span>
    </blockquote>

  );
};


export default CodeQuote

function QuoteIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      role="img"
      fill="currentColor"
      {...props}
    >
      <path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z" />
    </svg>
  );
}
