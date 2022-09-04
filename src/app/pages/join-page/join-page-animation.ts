import { animate, style, transition, trigger } from '@angular/animations';

export const joinPageAnimation = trigger('joinPageAnimation', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(500, style({
      opacity: 1
    }))
  ]),
]);
