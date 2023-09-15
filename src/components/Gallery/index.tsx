import { Profile } from "../Profile";

export function getImageUrl(imageId: string, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACCCAMAAAADi7iSAAAAOVBMVEX///+hoaGdnZ3q6uqurq74+PjIyMiamprV1dXi4uLu7u62trb8/PzOzs7Ly8vx8fHb29vAwMCnp6erU/cCAAABoElEQVR4nO3Z7W6CMBSAYc8pUAqIwP1f7ORDhsCysi05XfI+vwxC8gqlRb3dAAAAAAAAAAAAAADAb4XsJ+5GtYVXf5kOuVVtW7lrqk4ys9ry8jEVtVGW2saFR/Qx1rWPWmSIvtGNa/NBRcTH5hrXll5GQxN3jHFtr1Otj2wwri3+Va2bRoL2J++H7hhmPSfcvaofTuaw0vvsMJqta2+u6M9mhPAcIlrvt5rXnmuGaYR0u82J1tbL3efeN6dZ282xIruhm2TtPFOczBYp1jaZrPzb0E2mdnPJe/2sFa02O6VSG+r1mndeturN50ikNnh5LQaVvsWK3wzdNGrzcXrVdnpd72pFw7pfErXNXOjHrN7LwTp0k6hdnnLl+bwQ9mdWtitwCrVO1yx3bB1PeptO7XZ6HU5rRV0ytYfb6kyeSG0XE7uswOa1Lib29bXYvDaLq51XYOvaIjJWpk7j2nCyFnx1cnvr2ur5HTLauL9pbVdc0TamtU1+kbOr1eH63w5qVVtG319bfeTve3/u4p8OM6NTCwAAAAAAAAAAAADANz4AyPET28Hf74MAAAAASUVORK5CYII="
        title="Maria Skłodowska-Curie"
        achivements={[{ title: "pouriya", description: "babaali" }]}
      />
      <Profile
        imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACCCAMAAAADi7iSAAAAOVBMVEX///+hoaGdnZ3q6uqurq74+PjIyMiamprV1dXi4uLu7u62trb8/PzOzs7Ly8vx8fHb29vAwMCnp6erU/cCAAABoElEQVR4nO3Z7W6CMBSAYc8pUAqIwP1f7ORDhsCysi05XfI+vwxC8gqlRb3dAAAAAAAAAAAAAADAb4XsJ+5GtYVXf5kOuVVtW7lrqk4ys9ry8jEVtVGW2saFR/Qx1rWPWmSIvtGNa/NBRcTH5hrXll5GQxN3jHFtr1Otj2wwri3+Va2bRoL2J++H7hhmPSfcvaofTuaw0vvsMJqta2+u6M9mhPAcIlrvt5rXnmuGaYR0u82J1tbL3efeN6dZ282xIruhm2TtPFOczBYp1jaZrPzb0E2mdnPJe/2sFa02O6VSG+r1mndeturN50ikNnh5LQaVvsWK3wzdNGrzcXrVdnpd72pFw7pfErXNXOjHrN7LwTp0k6hdnnLl+bwQ9mdWtitwCrVO1yx3bB1PeptO7XZ6HU5rRV0ytYfb6kyeSG0XE7uswOa1Lib29bXYvDaLq51XYOvaIjJWpk7j2nCyFnx1cnvr2ur5HTLauL9pbVdc0TamtU1+kbOr1eH63w5qVVtG319bfeTve3/u4p8OM6NTCwAAAAAAAAAAAADANz4AyPET28Hf74MAAAAASUVORK5CYII="
        title="Katsuko Saruhashi"
        achivements={[{ title: "amin", description: "hadadi" }]}
      />
    </div>
  );
}
