import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {


  public images: string[];
  public index: number;
  public urlImage: string;
  constructor() {
    this.index = 0;
    this.images = [
      "https://tse2.mm.bing.net/th?id=OIP.eoBuER0jLtA7gv7v0QIHpwEsDQ&pid=15.1&H=110&W=160",
      "https://tse4.mm.bing.net/th?id=OIP.lYnrXqw-iom3OptM-FJw2QEsC7&pid=15.1&H=99&W=160",
      "https://tse1.mm.bing.net/th?id=OIP.QZsKtySFHE1jB7NdJP8BJQEsC7&pid=15.1&H=99&W=160"
    ];
    this.urlImage = this.image;
    setInterval(() => {
      this.urlImage = this.image;
    }, 2000)
  }



  public get image(): string {
    this.index++;
    this.index %= this.images.length;
    return this.images[this.index];
  }

  ngOnInit() {
  }

}
