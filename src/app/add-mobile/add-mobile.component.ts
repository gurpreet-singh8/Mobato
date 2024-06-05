import { Component, OnInit, model } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobatoService } from '../mobato.service';

@Component({
  selector: 'app-add-mobile',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './add-mobile.component.html',
  styleUrl: './add-mobile.component.css'
})
export class AddMobileComponent implements OnInit{
  
  myForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.myForm = new FormGroup({
      "brand":new FormControl(null),
      "price":new FormControl(null),
      "color":new FormControl(null),
      "storage":new FormControl(null),
      "description":new FormControl(null),
      "model":new FormControl(null)
    });
  }
  constructor(private mobileService: MobatoService){}

  errorMessageList = {
    brand:"",
    price:"",
    color:"",
    storage:"",
    description:"",
    model:""
  }
  isFormValid(payload:any):boolean{
    let isValid = true;
    // console.log(payload.brand.length ==1);
    
    if(payload.brand == null){
      this.errorMessageList.brand = "brand is required!"
      isValid=false;
    }else if(payload.brand.length ==1){
      this.errorMessageList.brand="brand must be at least 2 characters long!"
      isValid=false;

    }
    if(payload.price==null){
      this.errorMessageList.price = "price is required"
      isValid=false;

    }else if(payload.price < 0){
      this.errorMessageList.price="price must be greater than zero!"
      isValid=false;

    }
    if(payload.color==null){
      this.errorMessageList.color = "price is required"
      isValid=false;

    }else if(payload.color.length ==1){
      this.errorMessageList.color="color must be at least 2 characters long!"
      isValid=false;

    }
    if(payload.storage==null){
      this.errorMessageList.storage = "storage is required"
      isValid=false;

    }else if(payload.storage < 0){
      this.errorMessageList.storage="storage must be greater than zero!"
      isValid=false;

    }
    if(payload.description == null){
      this.errorMessageList.description = "description is required!"
      isValid=false;

    }else if(payload.description.length ==1){
      this.errorMessageList.description="description must be at least 10 characters long!"
      isValid=false;

    }

    if(payload.model == null){
      this.errorMessageList.model = "model is required!"
      isValid=false;

    }else if(payload.model.length ==1){
      this.errorMessageList.model="model must be at least 2 characters long!"
      isValid=false;

    }
    
    return isValid;
  }
  respones:any={message:""};
  onSubmit(){
    this.errorMessageList = {
      brand:"",
      price:"",
      color:"",
      storage:"",
      description:"",
      model:""
    }
    const payload={
      "brand":this.myForm.value.brand,
      "price":this.myForm.value.price,
      "color":this.myForm.value.color,
      "storage":this.myForm.value.storage,
      "description":this.myForm.value.description,
      "model":this.myForm.value.model
    }
    if (this.isFormValid(payload)){
      
      console.log(payload);
      
      this.mobileService.addMobile(payload).subscribe((res)=>{
        this.respones=res;
        this.myForm.get('brand')?.setValue("");
        this.myForm.get('price')?.setValue("");
        this.myForm.get('color')?.setValue("");
        this.myForm.get('storage')?.setValue("");
        this.myForm.get('description')?.setValue("");
        this.myForm.get('model')?.setValue("");
      });
    }else{

      console.log(this.errorMessageList);
      
    }
   
  }

}
