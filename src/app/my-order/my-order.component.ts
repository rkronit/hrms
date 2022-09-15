import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {
  firstname="";
  lastname="";
  email="";
  order="";
  customer:any=[];
  selectindex="";
  showMe=false;
  searchText:string=""
  constructor() { }

  ngOnInit(): void {
  }
 products=[
  {
    imgsrc:"../../assets/formals.jpg",
    price:"₹499",
    description:"Casual Shoes for Men Black",
    quantity:1,
    status:"Your item has been Delevered"
  },
  {
    imgsrc:"../../assets/img1.jpeg",
    price:"₹199",
    description:"Casual Shoes Polish Spray",
    quantity:1,
    status:"Your item has been Delevered"
  },
  {
    imgsrc:"../../assets/formals2.jpg",
    price:"₹729",
    description:"Casual Shoes for Men Black",
    quantity:2,
    status:"Your item has been Delevered"
  },
  {
    imgsrc:"../../assets/formalmoving.jpg",
    price:"₹523",
    description:"Casual Shoes for Men Black",
    quantity:1,
    status:"Your item has been Delevered"
  },
  {
    imgsrc:"../../assets/causals.jpg",
    price:"₹629",
    description:"Casual Shoes for Men Black",
    quantity:1,
    status:"Your item has been Delevered"
  },
  {
    imgsrc:"../../assets/formalsmoving.jpg",
    price:"₹888",
    description:"Casual Shoes for Men Black",
    quantity:1,
    status:"Your item has been Delevered"
  }
 ]

  buy(){
      let info={
        firstname:this.firstname,
        lastname:this.lastname,
        email:this.email,
        order:this.order,
      }
  }
  edit(i:any){
    this.showMe=true;
    this.selectindex=this.customer[i].firstname;
    this.selectindex=this.customer[i].lastname;
    this.selectindex=this.customer[i].email;
    this.selectindex=this.customer[i].order;
    this.clear()
  }

  delite(i:any){
   this.customer.splice(i,1)
  }

  update(){
    this.showMe=false;
    this.customer[this.selectindex].firstname=this.firstname;
    this.customer[this.selectindex].lastname=this.lastname;
    this.customer[this.selectindex].email=this.email;
    this.customer[this.selectindex].order=this.order;
    this.clear()
  }

  clear(): void{
    this.firstname="",
    this.lastname="",
    this.email="",
    this.order=""
  }
}
