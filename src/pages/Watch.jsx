import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
export default function Watch() {
  const { id, title } = useParams();
  // console.log(id);
  // console.log(title);
  

  return (
    <>
      <YouTube videoId={id} />
      <h1 className="text-white">{title}</h1>
    </>
  );
}
