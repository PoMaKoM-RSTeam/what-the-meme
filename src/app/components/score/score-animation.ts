import { animate, state, style, transition, trigger } from '@angular/animations';

export const playerInit = trigger('playerInit', [
  transition(':enter', [
    style({ left: '-600px' }), animate('1s 0.5s cubic-bezier(.5,.50,.6,1.1)', style({ left: 0 }))]
  ),
  transition(':leave',
    [style({ right: 0 }), animate('.8s 0s cubic-bezier(.5,.50,.6,1.1)', style({ right: '-600px' }))]
  )
]);
