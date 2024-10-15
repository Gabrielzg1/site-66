import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, MatListModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
   contacts = [
    {
      name: 'Isadora Abbondanza',
      phone: '(11) 99662-6522',
      email: 'isaabbondanza1@gmail.com',
      job: 'Aluna',
      avatar: 'profile.png'
    },
    {
      name: 'Giuliana Ruzene Luciano',
      phone: '(19) 99390-2671',
      email: 'ruzenegiuliana@gmail.com',
      job: 'Aluna',
      avatar: 'profile.png'
    },
    {
      name: 'Ana Luiza Biasi Beretta',
      phone: '(19) 99905-6767',
      email: 'berettaana@gmail.com',
      job: 'Aluna',
      avatar: 'profile.png'
    },
    {
      name: 'Giovana California',
      phone: '19 99423-9173',
      email: 'giovanacalifornia@gmail.com',
      job: 'Aluna',
      avatar: 'profile.png'
    },
    {
      name: 'Julia Noumi Mellis',
      phone: '19 99219-9930',
      email: 'juliamellis13@gmail.com',
      job: 'Aluna',
      avatar: 'profile.png'
    },
    {
      name: 'Giulia Dovichi',
      phone: '19 99898-5279',
      email: 'giuliadovichicruz@gmail.com',
      job: 'Aluna',
      avatar: 'profile.png'
    }
];

}
