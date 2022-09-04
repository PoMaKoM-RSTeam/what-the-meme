import { animate, style, transition, trigger } from '@angular/animations';

export const createPageAnimation = trigger('createPageAnimation', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(500, style({
      opacity: 1
    }))
  ]),
]);

export const passContainer = trigger('passContainer', [
  transition(':enter', [
    style({
      height: '20px',
      opacity: 0
    }),
    animate(200, style({
      height: '*',
      opacity: 1
    }))
  ]),
  transition(':leave', [
    style({
      height: '*',
      opacity: 1
    }),
    animate(200, style({
      height: 0,
      opacity: 0
    }))
  ])
])
