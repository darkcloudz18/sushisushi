import ToolBoxLinks from "./tool-boxLinks";
import ToolBoxSection from "../components/tool-box/ToolBoxSection";
import Title from "../components/Title";

export default function ToolBox() {
    const toolBoxSections = ToolBoxLinks.map((section) =>
        <ToolBoxSection key={section.section_title} section={section}></ToolBoxSection>
    );
    return (
        <>
            <Title title="Tool Box" headerClass={"aboutus"} />
            <div className={"off-white-bg py-3"}>
                <div className={"container"}>
                    {toolBoxSections}
                </div>
            </div>
        </>
    );

}