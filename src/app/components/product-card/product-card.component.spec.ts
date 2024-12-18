import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Test: call onDelete when delete button is clicked
  it('should call onDelete when delete button is clicked', () => {
    // simulate a product to ensure the component renders correctly
    component.product = {
      id: '1',
      data: {
        title: 'Codelia',
        category: 'AI assistant',
        price: 100,
        employee: 'Azim Ben Othman',
        description: 'Your personal AI assistant',
        reviews: [],
      },
    };
    fixture.detectChanges();

    // spy on the onDelete method
    spyOn(component, 'onDelete');

    // find the delete button
    const deleteButton = compiled.querySelector(
      '.delete-btn'
    ) as HTMLButtonElement;

    // ensure the button exists
    expect(deleteButton).toBeTruthy();

    // simulate a click on the delete button
    deleteButton.click();

    // verify the onDelete method was called
    expect(component.onDelete).toHaveBeenCalled();
  });
});
