import { animate, state, style, transition, trigger } from '@angular/animations';

export const sitationInit = trigger('sitationInit', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(1000, style({
      opacity: 1
    }))
  ])
]);