import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  title = "Grocery";

  items = [
    {
      name: "Fairlife Milk 2%",
      quantity: 1
    },
      
    {
        name: "Sara Lee Honey Wheat Bread",
        quantity: 1
    },

    {
      name: "Coca Cola Bottles",
      quantity: 6
    },

    {
      name: "Jimmy Dean Sausage Links",
      quantity: 2
    },
  ];


  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item, index) {
    console.log("Removing Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.items.splice(index, 1);
   
  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();

  }

  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },

        {
          name: 'quantity',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Save clicked', item);
            this.items.push(item);

        }
      }
    ]
      
    });
    prompt.present();
  } 

}
