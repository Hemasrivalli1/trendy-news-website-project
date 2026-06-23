function AboutPage(){
    return (
    <div className="container pageSection py-5 left">
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="glassCard p-4 p-md-5 rounded-4">
                    <h2 className="sectionTitle">About this Project</h2>
                    <p className="sectionText right">
                        This is News Channel project here we 
                        used react to built the web Application.it uses routing 
                        to separate pages,Bootstrap for the layout.
                    </p>

                    <p className="sectionText mb-0 right">
                        We learned how datamoves from card via props,use of
                         useEffect loads the first news feed ,and how that event handlers
                         poer search and category buttons.

                         <h5>This project Develope by Teks Students 
                            - @Vardhan,@Vishal,@Hemashri ,@Harisankeerthan </h5>
                    </p>
                </div>
            </div>
        </div>

    </div>
    )
}
export default AboutPage;