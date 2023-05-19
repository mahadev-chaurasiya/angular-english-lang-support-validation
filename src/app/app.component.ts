import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eng-validator';
  regex = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9 -]+$/;

  pasteOnlyEnglishEvnt(event: any){
    let clipboardData = event.clipboardData || window.Clipboard;
    let pastedText = clipboardData.getData('text');
    console.log("Paste : "+pastedText);
    if (this.regex.test(pastedText)) {
         return true;
     }
  //   //e.preventDefault();
     return false;
  }

   allowEnglishWord (e:any) { 
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
     console.log("KeyPress : "+str);
     if (this.regex.test(str)) {
         return true;
     }
     //e.preventDefault();
     return false;
   }
  
}
