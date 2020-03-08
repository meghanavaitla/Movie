import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  msgArray = [];
  isMsgValid=false;
  tweet = {msg:'Test msg'};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.tweet.msg.length>0){
      var obj = {msg:'',likeCount:0};
      obj.msg=this.tweet.msg;
      this.msgArray.unshift(obj);
      alert(JSON.stringify(this.msgArray));
    this.tweet.msg = '';
    this.isMsgValid=false;
    }
  }

  enableSubmitButton(){
    if(this.tweet.msg.length>0){
      this.isMsgValid=true;
    }
    else{
      this.isMsgValid=false;
    }
  }

  like(i){
    this.msgArray[i].likeCount++;
  }

}
