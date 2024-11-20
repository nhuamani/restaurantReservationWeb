export interface ReservationRequest {
  restaurantId: number;
  reservationData: string;
  numberOfPeople: number;
  additionalInfo?: string;
}