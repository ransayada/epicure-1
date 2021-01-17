import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DishDialogComponent } from '../dish-dialog/dish-dialog.component';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css']
})
export class DishCardComponent implements OnInit {
  @Input() img_src: string
  @Input() restaurant: string
  @Input() chef: string
  @Input() icon: string
  @Input() price: string
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DishDialogComponent, {
      data: {
        img_src: this.img_src,
        dish_name: this.restaurant,
        description: this.chef,
        price: this.price
      },
      height: "1080px"
    })
  }

}

