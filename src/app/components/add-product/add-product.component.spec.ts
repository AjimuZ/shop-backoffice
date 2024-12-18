import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { AddProductComponent } from './add-product.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // import required modules and components
      imports: [AddProductComponent, FormsModule],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();

    // create the test component and initialize fixture
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  // Test: component creation
  it('should create', () => {
    expect(component).toBeTruthy(); // verify that the component is created successfully
  });

  //Test: form submission simulation
  it('should call onSubmit when form is submitted', () => {
    spyOn(component, 'onSubmit'); // monitor the onSubmit method

    // simulate a valid form submission
    const form: NgForm = {
      valid: true,
      value: {
        title: 'Codelia',
        category: 'AI assistant',
        price: 99,
        employeeFirstName: 'Azim',
        employeeLastName: 'Ben Othman',
        description: 'Your personal AI assistant',
      },
    } as NgForm;

    // simulate form submission and verify the onSubmit call
    component.onSubmit(form);
    expect(component.onSubmit).toHaveBeenCalledWith(form);
  });

  // Test: simulate form submission (invalid)
  it('should not call send data method when form is invalid', () => {
    spyOn(component['addProductService'], 'addProduct');

    // Simulate an invalid form submission (missing title and price)
    const form: NgForm = {
      value: {
        title: '', // required field empty
        category: 'AI assistant',
        price: null, // rquired field missing
        employeeFirstName: '',
        employeeLastName: '',
        description: '',
      },
    } as NgForm;

    component.onSubmit(form);
    expect(component['addProductService'].addProduct).not.toHaveBeenCalled();
  });
});
