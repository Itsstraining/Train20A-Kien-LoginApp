import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
public user:firebase.User=null;
  constructor(public auth:AngularFireAuth) {
   
   }
   public async login(){
     try{
      let provide = new firebase.auth.GoogleAuthProvider;
      await this.auth.signInWithPopup(provide);
      this.user=await this.auth.currentUser;
    }catch(err)
    {
      console.error(err);
    }
  }
  public async logout(){
    await this.auth.signOut;
    this.user=null;
  }
}
