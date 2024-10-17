import { ChangeDetectorRef, Component, OnInit, afterNextRender, afterRender } from "@angular/core";
import { MenuItem, MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { MenubarModule } from "primeng/menubar";
import { SplitButtonModule } from "primeng/splitbutton";
import { EMBALS_PATHES } from "../../../properties/properties";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [MenubarModule, ButtonModule, SplitButtonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  profileItems: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: "Home",
        icon: "pi pi-home",
        route: EMBALS_PATHES.HOME,
      },
      {
        label: "Near me",
        icon: "pi pi-search",
        route: EMBALS_PATHES.SEARCH,
      },
    ]
  }
}
