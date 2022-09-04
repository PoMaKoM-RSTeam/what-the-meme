import { Component, EventEmitter, Input, Output } from '@angular/core';
import { modalInit } from './modal-animation';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations: [modalInit]
})
export class ModalComponent {

  @Input() title = '';
  @Input() text = ''
  @Input() actionButton = false;
  @Input() actionButtonText = 'Копировать ссылку';
  @Output() copyLink = new EventEmitter();
  @Output() close = new EventEmitter<void>()

}