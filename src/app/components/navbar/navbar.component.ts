import { NavbarService } from './navbar.service';
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

  @Output() openModalAddProductEvent = new EventEmitter<boolean>();
  @Output() toggleLayoutEvent = new EventEmitter<LayoutType>();

  @Input() currentlayout?: LayoutType;
  @Input() hideButtons: boolean = false;
  
  shopName: string = '';
  layoutIcon?: LayoutType;
  
  constructor(private navbarService: NavbarService) {}

  async ngOnInit(): Promise<void> {
    this.layoutIcon = this.currentlayout === LayoutType.grid ? LayoutType.panel: LayoutType.grid;
    this.shopName = await this.navbarService.loadShopName();
  }

  onAddProduct() {
    this.openModalAddProductEvent.emit(true);
  }

  onToggleLayout() {
    this.layoutIcon = this.layoutIcon === LayoutType.grid ? LayoutType.panel: LayoutType.grid;
    this.currentlayout = this.currentlayout === LayoutType.grid ? LayoutType.panel : LayoutType.grid;

    this.toggleLayoutEvent.emit(this.currentlayout);
  }
  
}
