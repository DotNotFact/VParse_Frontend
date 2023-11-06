import { BeatLoader } from "react-spinners";
import "./Loader.css";

export const Loader = ({ load }: { load: boolean }) => {
  return (
    <div
      style={
        load
          ? {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
            }
          : { display: "none" }
      }
      id={"loader-container"}
    >
      <p>Загрузка</p>
      <BeatLoader size={10} color="black" loading={load} />
    </div>
  );
};
