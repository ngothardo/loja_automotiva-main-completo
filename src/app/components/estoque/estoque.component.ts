import { Component } from '@angular/core';
import { PecaService } from '../../services/peca.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {
  constructor(public pecaService: PecaService) {}
}
