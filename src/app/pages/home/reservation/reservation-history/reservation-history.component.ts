import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ReservationService } from '../../../../shared/services/reservation.service';
import { ReservationResponse } from '../../../../shared/models/response/reservation-response.model';

@Component({
  selector: 'app-reservation-history',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './reservation-history.component.html',
  styleUrl: './reservation-history.component.scss'
})
export class ReservationHistoryComponent implements OnInit {

  private reservationService = inject(ReservationService);

  reservations: ReservationResponse[] = [];
  displayedColumns: string[] = ['reservationDate', 'restaurant', 'numberOfPeople', 'totalAmount', 'status'];

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationService.getReservationsByClientId()
     .subscribe(data => {
        this.reservations = data;
      });
  }

  onPayWithPayPal(reservationId: number): void {
    console.log('Payment initiated for reservation ID:', reservationId);   
  }

}
