import { animate, style, transition, trigger } from '@angular/animations';

export const mainPageAnimation = trigger('mainPageAnimation', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(1000, style({
      opacity: 1
    }))
  ]),
]);
