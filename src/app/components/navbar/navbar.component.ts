import { CommonModule } from '@angular/common';
import { LayoutType } from './../../enums/layout-type';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit{

  @Output() addProductEvent = new EventEmitter<void>();
  @Output() toggleLayoutEvent = new EventEmitter<LayoutType>();

  @Input() currentlayout?: LayoutType;
  @Input() hideButtons: boolean = false;
  
  shopName: string = 'Shop Backoffice';
  layoutIcon?: LayoutType;
  

  ngOnInit(): void {
    this.layoutIcon = this.currentlayout;
  }

  onAddProduct() {
    this.addProductEvent.emit();
  }

  onToggleLayout() {
    this.layoutIcon = this.currentlayout === LayoutType.grid ? LayoutType.grid : LayoutType.panel;
    this.currentlayout = this.currentlayout === LayoutType.grid ? LayoutType.panel : LayoutType.grid;

    this.toggleLayoutEvent.emit(this.currentlayout);
  }
}
