import Label from "../label/label";

const Text = ({props}) => {
    return ( 
    <div className="bg-3 fs-2 p-1 pt-2 shadow row rounded-4 mx-1 mt-2 mt-3">
        <Label title={"Detail"} />
        <textarea  
        type="text" 
        className="input-d input-text-mline ps-3 col-11 text-1" 
        placeholder="detail ..." 
        onChange={e => props[1](e.target.value)}
        value={props[0]}
        />
    </div> 
    );
}
 
export default Text;