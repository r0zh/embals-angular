import { Component } from "@angular/core";
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: "app-home",
  standalone: true,
  imports: [SliderModule, FormsModule, InputNumberModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  value: number = 50;

  
}
