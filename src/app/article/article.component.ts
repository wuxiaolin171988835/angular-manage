import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  data = [
    {
      title: 'Title 1',
      img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&fm=27&gp=0.jpg'
    },
    {
      title: 'Title 2',
      img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=234634259,4236876085&fm=27&gp=0.jpg'
    },
    {
      title: 'Title 3',
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2035447233,1717815544&fm=27&gp=0.jpg'
    },
    {
      title: 'Title 4',
      img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1519175636,579560806&fm=27&gp=0.jpg'
    }
  ];
}
