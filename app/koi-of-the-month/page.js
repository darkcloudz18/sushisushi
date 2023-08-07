import Title from "../components/Title";

export default function KoiOfTheMonth() {
    return (
        <>
            <Title title="Koi of the Month" headerClass={"stores"}></Title>
            <div className={"container py-5"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <video width={1920} height={1080} src={"/images/Sushisushi_Koiofthemonth_animation.mp4"} className={"img-fluid mt-5"}
                               autoPlay muted controls></video>
                    </div>
                </div>
            </div>
        </>
    );
}