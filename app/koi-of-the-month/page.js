import Title from "../components/Title";

export default function KoiOfTheMonth() {
    return (
        <>
            <Title title="Family and Friends Discount" headerClass={"stores"}></Title>
            <div className={"container"}>
                <video src={"/images/Sushisushi_Koiofthemonth_animation.mp4"}></video>
            </div>
        </>
    );
}