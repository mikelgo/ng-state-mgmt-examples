import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '@ng-state-mgmt-examples/shared';
import { FormControl } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() openItems: Todo[] = [];
  @Input() completeItems: Todo[] = [];

  @Output() select = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();
  @Output() add = new EventEmitter<Todo>();
  @Output() complete = new EventEmitter<Todo>();

  public taskFormControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {}

  onItemSelect(item: Todo) {
    this.select.emit(item);
  }

  onDelete(item: Todo) {
    this.delete.emit(item);
  }

  onAdd() {
    this.add.emit({
      completed: false,
      task: this.taskFormControl.value,
      id: this.addId()
    });
    this.taskFormControl.patchValue('')
  }

  onComplete(item: Todo) {
    this.complete.emit(item);
  }

  private addId(): string {
    return uuidv4();
  }
}
