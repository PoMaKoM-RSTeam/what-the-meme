import { animate, state, style, transition, trigger } from '@angular/animations';

export const gamePageAnimation = trigger('gamePage', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(1000, style({
      opacity: 1
    }))
  ])
]);

export const chatInit = trigger('chatInit', [
  transition(':enter', [
    style({
      left: '-600px'
    }),
    animate('.8s 0s cubic-bezier(.5,.50,.6,1.1)', style({
      left: 0
    }))
  ])
]);

export const scoreInit = trigger('scoreInit', [
  transition(':enter', [
    style({
      left: '600px'
    }),
    animate('.8s 0s cubic-bezier(.5,.50,.3,1.1)', style({
      left: 0
    }))
  ])
]);

export const headerInit = trigger('headerInit', [
  transition(':enter', [
    style({
      top: '-300px'
    }),
    animate('1s 0s cubic-bezier(.5,.50,.3,1.1)', style({
      top: 0
    }))
  ])
]);

export const memeInit = trigger('memeInit', [
  transition(':enter', [
    style({
      bottom: '-300px'
    }),
    animate('1s 0s cubic-bezier(.5,.50,.3,1.1)', style({
      bottom: 0
    }))
  ])
]);

export const gameTableInit = trigger('gameTableInit', [
  transition(':enter', [
    style({
      height: 0
    }),
    animate(700, style({
      height: '*'
    }))
  ])
]);