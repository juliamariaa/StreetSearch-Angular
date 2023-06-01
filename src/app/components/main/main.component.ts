import { Component} from '@angular/core';

// Service
import { ViaCEPService } from 'src/app/service/via-cep.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

  valueInput: string = ''

  street: string = 'Street: XXXX XXXX'
  neighborhood: string = 'Neighborhood XXXX XXXX'
  city: string = 'City XXXX'
  state: string = 'State XX'

  constructor(private viacepservice : ViaCEPService){}

  limitInputLength(event: any) {
    const maxLength = 8; // Definindo o número max de caracteres
    if (event.target.value.length > maxLength) {
        event.target.value = event.target.value.slice(0, maxLength);
      }
  }

   generateResults() {
    this.viacepservice.getCEP(`${this.valueInput}`).subscribe((data) => {
      // Realizando atribuições para gerar o resultado da pesquisa
      this.street = data.logradouro
      this.neighborhood = data.bairro
      this.city = data.localidade
      this.state = data.uf
    }, (error) => {
      // Erro adicionado para tratar falha na solicitação
      console.error("Ocorreu um erro ao obter o CEP:", error);
    })
  }
}
