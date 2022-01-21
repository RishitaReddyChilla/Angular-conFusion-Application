import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';//to track history
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Comment} from '../shared/comment';


//hello

/*const DISH = {
  id: '0',
  name: 'Uthappizza',
  image: '/assets/images/uthappizza.png',
  category: 'mains',
  featured: true,
  label: 'Hot',
  price: '4.99',
  // tslint:disable-next-line:max-line-length
  description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
  comments: [
       {
           rating: 5,
           comment: 'Imagine all the eatables, living in conFusion!',
           author: 'John Lemon',
           date: '2012-10-16T17:57:28.556094Z'
       },
       {
           rating: 4,
           comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
           author: 'Paul McVites',
           date: '2014-09-05T17:57:28.556094Z'
       },
       {
           rating: 3,
           comment: 'Eat it, just eat it!',
           author: 'Michael Jaikishan',
           date: '2015-02-13T17:57:28.556094Z'
       },
       {
        rating: 4,
        comment: 'Ultimate, Reaching for the stars!',
        author: 'Ringo Starry',
        date: '2013-12-02T17:57:28.556094Z'
    },
    {
        rating: 2,
        comment: 'It\'s your birthday, we\'re gonna party!',
        author: '25 Cent',
        date: '2011-12-02T17:57:28.556094Z'
    }
]
};*/
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  //dish = DISH;
//@Input()
  dish!: Dish;
  dishIds!: string[];
  prev!: string;
  next!: string;

  commentForm!: FormGroup;
  comment!: Comment;//datamodel 

  date!:Date;
  dateISO!:string;

  errMess!:string;

  //for saving to server
  dishcopy!:Dish;

  @ViewChild('cform') commentFormDirective!:  NgForm;

  formErrors:any= {
    'author': '',
    'rating': '',
    'comment' : ''
  };

  validationMessages:any = {
    'author': {
      'required': 'Author name is required',
      'minlength': 'Author name must be at least 2 characters long',
      'maxlength': 'Author name cannot be more than 25 characters'
    },
    'rating': {
      'required': 'Last Name is required.',
    },
    'comment': {
      'required': 'Comment is required.',
    }
  };

  constructor(private dishService: DishService ,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('BaseURL') public BaseURL : string) {
      
     }

     createForm(){
      this.commentForm = this.fb.group({
        author: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
        rating: 5,
        comment:['',Validators.required]
      });

      this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data)); //if any error is detected it will be added to js object formerrors above
      //what to do when value changes
      this.onValueChanged(); //reset form validation messages
    }

    onValueChanged(data?: any){//?-data parameter is optional
      if(!this.commentForm) {
        return;
      }
      const form = this.commentForm;
      for (const field in this.formErrors) {
        if (this.formErrors.hasOwnProperty(field)) {
          // clear previous error message (if any)
          this.formErrors[field] = '';
          const control = form.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
              if (control.errors.hasOwnProperty(key)) {
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }
    }

  ngOnInit(){
    this.createForm();
   // let id = this.route.snapshot.params['id'];
    this.dishService.getDishIds()
    .subscribe((dishIds)=>this.dishIds = dishIds);

   this.route.params.pipe(switchMap((params:Params) => this.dishService.getDish(params['id'])))
    .subscribe({next:(dish) => {
      this.dish = dish; this.dishcopy=dish;this.setPrevNext(dish.id);
    },
    error: errmess => this.errMess = <any>errmess});
  }

  setPrevNext(dishId:string){
    const index =  this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];

  }
  goBack():void{
  this.location.back();
}

onSubmit(){
  this.comment = this.commentForm.value;
  console.log(this.comment);
  //date
  this.date = new Date();
  //ISOstring
  this.dateISO = this.date.toISOString();
  this.commentForm.value.date = this.dateISO;
  this.comment = this.commentForm.value;
 // console.log(this.comment);
 //pushing the comment to display below the previous comments
  //this.dish.comments.push(this.comment);
  
  //saving to server
  this.dishcopy.comments.push(this.comment);
  
  this.dishService.putDish(this.dishcopy)
  .subscribe({next:dish => {
    this.dish = dish;
    this.dishcopy = dish;
  },
  error: errmess =>{ this.dish=null!; this.dishcopy=null!; this.errMess=<any>errmess;
  }} );
  //Reset the form
  this.commentFormDirective.resetForm();
  this.commentForm.reset({
    author: '',
    rating: 5 ,
    comment: ''
  });
  
}
}
