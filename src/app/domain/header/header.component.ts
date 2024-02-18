import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() navigate = new EventEmitter<string>();

    onRecipeClick(navigation: string) {
        this.navigate.emit(navigation);
    }

    onShopClick(navigation: string) {
        this.navigate.emit(navigation);
    }
}