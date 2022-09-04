import { animate, state, style, transition, trigger } from '@angular/animations';

export const modalInit = trigger('modalInit', [
  transition(':enter', [
    style({ opacity: 0 }), animate('0.3s 0s cubic-bezier(.5,.50,.6,1.1)', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('.8s 0s cubic-bezier(.5,.50,.6,1.1)', style({ opacity: 0 }))]
  )
]);
