import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html',
    styleUrls: ['../app.component.css']
})
export class HeaderComponent {
    menus = [
        {'label': 'Home', 'href': 'src/app/home/home.component.html'},
        {'label': 'About', 'href': 'src/app/about/about.component.html'},
        {'label': 'Contact', 'href': 'src/app/contact/contact.component.html'}
    ]
}

