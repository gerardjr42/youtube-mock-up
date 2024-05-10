import { useParams } from "react-router-dom"
export default function VideoPlayer () {

    const { video } = useParams()

    return (
        <>
            <h1> This is VideoPlayer </h1>
        </>
    )
};