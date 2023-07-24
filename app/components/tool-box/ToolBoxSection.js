
export default function ToolBoxSection({section}){
    return(
        <div key={section.section_title}>
            <h2 className="my-5">{section.section_title}</h2>
            <div className="row mb-4">
                {section.section_links.map((link) => {
                    return(
                        <div key={link.title} className="col-6 col-lg-3 mb-3">
                            <a href={link.link}><div className="card h-100">
                                <div className="card-body row row-cols-1">
                                    <div className={"col align-self-center"}>
                                        <img
                                            src={`/images/tool-box/${link.title}.png`}
                                            className="card-img align-self-center"
                                            alt={link.title}
                                        />
                                    </div>
                                        <div className="col align-self-end">
                                            <span className="btn btn-sushi-secondary w-100 mt-3">{link.title}</span>
                                        </div>
                                    </div>
                            </div></a>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}