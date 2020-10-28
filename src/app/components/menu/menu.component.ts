import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  public logueado: boolean = true;
  public userName: string = 'Usuario';
  constructor() { }

  ngOnInit(): void {
  }

}
