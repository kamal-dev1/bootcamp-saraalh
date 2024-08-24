import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  constructor(private appService:AppService,

    private fb:FormBuilder
  ) {
    this.createForm()
  }
  form:any
chatIds:any[]=[420955418,266516329,5873685054,6509391542]
  sendMEssage(){
    // this.appService.sendSms({
    //   chat_id:420955418,
    //   text:this.form.get('text').value
    // }).subscribe({
    //   next:(data)=>{
    //     console.log(data);

    //   },error:(err)=>{
    //     console.log(err);

    //   }
    // })
    this.chatIds.forEach(element => {
      this.appService.sendSms({
        chat_id:element,
        caption:this.form.get('text').value,

        reply_markup:[
          [
            { text: 'Button 1-1', callback_data: 'action_1_1' },

          ],

        ]
      }).subscribe({
        next:(data)=>{

        },error:(data)=>{
          console.log(data);

        }
      })
    });

  }
  createForm(){
    this.form=this.fb.group({
      text:['']
    })
  }
}
