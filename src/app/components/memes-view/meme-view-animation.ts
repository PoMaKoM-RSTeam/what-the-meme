import { animate, style, transition, trigger } from '@angular/animations';

export const memeInit = trigger('memeInit', [
  transition(':enter', [
    style({
      height: 0,
      opacity: 0
    }),
    animate(400, style({
      height: '*',
      opacity: 1
    }))
  ])
]);
