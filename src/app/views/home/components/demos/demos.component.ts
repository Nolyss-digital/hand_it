import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type DemoType = {
  name: string;
  image: string;
  link: string
}

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './demos.component.html',
  styles: ``
})
export class DemosComponent {
  demosPages: DemoType[] = [
    {
      image: "images/demo/1.png",
      name: "Product",
      link: "landing/product"
    },
    {
      image: "images/demo/2.png",
      name: "Startup",
      link: "landing/startup"
    },
    {
      image: "images/demo/3.png",
      name: "Software",
      link: "landing/software"
    },
    {
      image: "images/demo/4.png",
      name: "Business",
      link: "landing/business"
    },
    {
      image: "images/demo/5.png",
      name: "App",
      link: "landing/app"
    },
    {
      image: "images/demo/6.png",
      name: "Agency",
      link: "landing/agency"
    }
  ]
}
