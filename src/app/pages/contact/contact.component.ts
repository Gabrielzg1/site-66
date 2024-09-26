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
      name: 'John Doe',
      phone: '(123) 456-7890',
      email: 'john.doe@example.com',
      job: 'Software Engineer',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Jane Smith',
      phone: '(987) 654-3210',
      email: 'jane.smith@example.com',
      job: 'UI/UX Designer',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Sam Wilson',
      phone: '(555) 666-7777',
      email: 'sam.wilson@example.com',
      job: 'Project Manager',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      name: 'Sam Wilson',
      phone: '(555) 666-7777',
      email: 'sam.wilson@example.com',
      job: 'Project Manager',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
  ];
}
