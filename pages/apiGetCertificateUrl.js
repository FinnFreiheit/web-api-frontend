
export default function ApiGetCertificateUrl(props){
    return(
        <div style={{
            display:"grid",
            width:'100%',
            height:'100%',
            justifyItems:"center",
            alignItems:"center"
        }}>
            <div>
                <h1>Certificat URL: </h1>
                <h2><a style={{color:"blue"}}>{props.url}</a></h2>
            </div>
        </div>
    )
}