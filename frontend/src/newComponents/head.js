import "./head.css";

function Head({num,step,w,h}){
    return(
        <div className="head_main">
            <div className="head_num">{num}</div>
            <div className="head_step" style={{width:w,height:h}}>{step}</div>
        </div>
    )
}
export default Head;