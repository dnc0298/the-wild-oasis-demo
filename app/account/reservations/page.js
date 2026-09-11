import ReservationCard from "@/app/_components/ReservationCard";
import DeleteReservation from "@/app/_components/DeleteReservation";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import ReservationList from "@/app/_components/ReservationList";

export const metadata = {
  title: "Your reservations",
};

export default async function Page() {
  // CHANGE
  const session = await auth();
  const reservations = await getBookings(session.user.guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Your reservations
      </h2>

      {reservations.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList reservations={reservations}></ReservationList>
      )}
    </div>
  );
}
