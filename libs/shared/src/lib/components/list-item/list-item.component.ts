import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '@ng-state-mgmt-examples/shared';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: Todo = null

  @Output() delete = new EventEmitter<Todo>()
  @Output() complete = new EventEmitter<Todo>()
  @Output() select = new EventEmitter<Todo>()
  constructor() { }

  ngOnInit(): void {
  }

  onComplete() {
    this.complete.emit(this.item)
  }

  onDelete() {
    this.delete.emit(this.item)
  }

  onSelect() {
    this.select.emit(this.item)
  }
}
