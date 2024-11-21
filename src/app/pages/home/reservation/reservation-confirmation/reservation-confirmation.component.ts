import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ReservationService } from '../../../../shared/services/reservation.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { ReservationResponse } from '../../../../shared/models/response/reservation-response.model';


@Component({
  selector: 'app-reservation-confirmation',
  standalone: true,
  imports: [
    MatIconModule,
    MatSnackBarModule,
    RouterLink
  ],
  templateUrl: './reservation-confirmation.component.html',
  styleUrl: './reservation-confirmation.component.scss'
})
export class ReservationConfirmationComponent {

  private reservationService = inject(ReservationService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  reservation!: ReservationResponse;
  reservationIdStr!: string;
  
  loading = false;

  ngOnInit(): void {
    const reservationId = localStorage.getItem('reservationId');

    if (reservationId) {
      this.loadReservationDetails(+reservationId);  // Convertir a número si es necesario
      //localStorage.removeItem('reservationId'); // Eliminar el ID después de cargar los datos
    }
  }

  loadReservationDetails(reservationId: number): void {
    this.reservationService.getReservationById(reservationId).subscribe({
      next: (reservation) => {
        this.reservation = reservation;
      },
      error: () => this.showSnackBar('Failed to load reservation details!')
    });
  }

  get user() {
    return this.authService.getCurrentUser();
  }

  onContinueShopping(): void {
    this.router.navigate(['/pages/restaurants']);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }

  removeReservationId() {
    localStorage.removeItem('reservationId'); // Eliminar el ID después de cargar los datos
    localStorage.removeItem('restaurantId');
  }

  ngOnDestroy(): void {
    localStorage.removeItem('reservationId'); // Eliminar el ID después de cargar los datos
    localStorage.removeItem('restaurantId');
  }
}
