import { Component, OnInit, Renderer } from '@angular/core';
// import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
        ngb-progressbar {
            margin-top: 5rem;
        }
    `]
})

export class ComponentsComponent implements OnInit {
    images:any[] = [];
    imgs = [
        {
            "img": "./assets/img/image-pompom.jpg",
            "description":"POM POM"
        },
        {
            "img": "./assets/img/image-pampers.jpg",
            "description":"PAMPERS"
        },
        {
            "img": "./assets/img/image-huggies.jpg",
            "description":"HUGGIES"
        }
    ];
    
    constructor(config: NgbCarouselConfig) {
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = true;
        config.pauseOnHover = true;
        
        this.images = this.imgs;
    }

    ngOnInit() {
    }
}
