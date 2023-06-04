import { Component} from '@angular/core';

// Service
import { ViaCEPService } from 'src/app/service/via-cep.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {

  message: string = 'Allowed only 8 numbers, no characters.'

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
      if (data.erro) {
        // CEP inválido, exibir mensagem de erro
        this.message = 'Invalid CEP. Please enter a valid 8-digit number.'
        this.street =  ''
        this.neighborhood = ''
        this.city = ''
        this.state = ''
      } else {
        // Realizando atribuições para gerar o resultado da pesquisa
      this.message = 'Allowed only 8 numbers, no characters.'
      this.street = data.logradouro
      this.neighborhood = data.bairro
      this.city = data.localidade
      this.state = data.uf
      }
    })
  }
}
