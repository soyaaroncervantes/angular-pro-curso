import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './core/components/navbar.component';

@Component({
  imports: [RouterModule, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {
    class: 'flex flex-col md:flex-row min-h-screen bg-zinc-900 text-teal-50 gap-4',
  }
})
export class AppComponent {}
