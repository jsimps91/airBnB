import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { User } from '../user'
import { Property } from '../property'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { PropertyService } from '../property.service';


@Component({
  selector: 'app-host-form',
  templateUrl: './host-form.component.html',
  styleUrls: ['./host-form.component.css']
})
export class HostFormComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;
  mapData = null
  images = []
  long: any;
  lat: any;
  country: any;
  state: any;
  city: any;
  streetName: any;
  streetNumber: any;
  autoCompleteCallback1(selectedData:any) {
        this.mapData = selectedData;
        this.streetNumber = selectedData.address_components[0].short_name;
        this.streetName = selectedData.address_components[1].short_name;
        this.city = selectedData.address_components[2].long_name;
        this.state = selectedData.address_components[5].short_name;
        this.country = selectedData.address_components[6].short_name;
        this.lat = selectedData.geometry.location.lat;
        this.long = selectedData.geometry.location.lng;
        this.checkLocation()
      }
  constructor(private _userService: UserService, private _router: Router, private _propertyService: PropertyService) { }
  property
  form1Visible 
  form2Visible 
  form3Visible 
  form4Visible
  form5Visible
  form6Visible
  form7Visible
  form8Visible
  currentUser
  mapInputValid
  currUser 
  ngOnInit() {
    this.currUser = this._userService.currUserId
    console.log("CURRENT USER IS", this.currUser)
    this.property = new Property()
    this.property._user = this.currUser
    this.streetNumber
    this.form1Visible = true;
    this.form2Visible = false;
    this.form3Visible = false;
    this.form4Visible = false;
    this.form5Visible = false;
    this.form6Visible = false;
    this.form7Visible = false;
    this.form8Visible = false;
  }

  
  checkLocation(){
    if(!this.mapData){
      this.mapInputValid = false;
    }
    else{
      this.mapInputValid = true;
    }
  }
  createProperty(){
    this.property.streetNumber = this.streetNumber;
    this.property.streetName = this.streetName;
    this.property.city = this.city;
    this.property.state = this.state;
    this.property.country = this.country;
    this.property.lat = this.lat
    this.property.long = this.long;
    console.log("HIT CREATE PROPERTY")
    console.log(this.property)
    this._propertyService.createProperty(this.property)
    .then(data => {
      var place_id = data[0].pk
      this._router.navigateByUrl(`/rentals/${place_id}`)
    }).catch(err => console.log(err))
  }
  upload(){
    console.log("UPLOADING PHOTOS")
    var files = this.fileInput.nativeElement.files;
    for(var i in files){
      console.log(files[i])
      this.images.push(files[i])
    }
    this.property.photos = this.images
  }
  back1(){
    this.form1Visible=true;
    this.form2Visible = false;
  }
  back2(){
    this.form3Visible = false;
    this.form2Visible = true;
  }
  back3(){
    this.form3Visible = true;
    this.form4Visible = false;
  }
  back4(){
    this.form4Visible = true;
    this.form5Visible = false;
  }
  back5(){
    this.form5Visible = true;
    this.form6Visible = false;
  }
  back6(){
    this.form6Visible = true;
    this.form7Visible = false;
  }
  back7(){
    this.form7Visible = true;
    this.form8Visible = false;
  }
  view2(){
    this.form1Visible = false;
    this.form2Visible = true;
  }
  view3(){
    this.form3Visible = true;
    this.form2Visible = false;
  }
  view4(){
    this.form4Visible = true;
    this.form3Visible = false;
  }
  view5(){
    this.form5Visible = true;
    this.form4Visible = false; 
  }
  view6(){
    this.form6Visible = true;
    this.form5Visible = false;
  }
  view7(){
    this.form6Visible = false;
    this.form7Visible = true;
  }
  view8(){
    this.form8Visible = true;
    this.form7Visible = false;
  }
}
