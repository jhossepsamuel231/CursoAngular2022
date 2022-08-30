import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

public image:string = "http://4.bp.blogspot.com/-qOdgW3LUEJE/Upfashu8MYI/AAAAAAAAAFE/UrCKG895rhQ/s1600/vlcsnap-438245.png"
public Titulo:string = "Curso de Angular con Interpolación"

  constructor() { }

  ngOnInit(): void {
  }

}
