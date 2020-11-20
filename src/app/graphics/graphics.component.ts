import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Lightbox } from "ngx-lightbox";
@Component({
  selector: "app-graphics",
  templateUrl: "./graphics.component.html",
  styleUrls: ["./graphics.component.css"]
})
export class GraphicsComponent implements OnInit {
  portfolioItems;
  _albums: any = [];
  imgHeight = 357;
  constructor(private cartService: CartService, private _lightbox: Lightbox,) {}

  ngOnInit() {
    this.portfolioItems = this.cartService.getGraphicDesignPortfolio();
    this.cartService.getGraphicDesignPortfolio().subscribe(data => {
      console.log(data);
      this._albums = data;
    });
  }

  open(index: number): void {
    // open lightbox

    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
