import { Component } from "@angular/core";
import { ColorSchemeService } from "./color_scheme.service";

@Component({
    selector: 'xc-portfolio-colorscheme',
    templateUrl: './color_scheme.component.html',
    styleUrls: ['./color_scheme.component.scss']
})
export class ColorSchemeComponent{
    public themes = [
        {
            name: 'dark',
            icon: 'brightness_3'
        },
        {
            name: 'light',
            icon: 'wb_sunny'
        }
    ];
    constructor(public _colorScheme: ColorSchemeService){}

    setTheme(theme: string) {
        this._colorScheme.update(theme);
    }
}