import Label from "../label/label";

const Title = ({props}) => {
    return ( 
    <div className="bg-3 fs-2 p-1 pt-2 shadow row rounded-4 mx-1 mt-2">
        <Label title={"Title"} />
        <input type="text" 
        className="input-d ps-3 col-11 text-1" 
        placeholder="title ..."  
        onChange={e => props[1](e.target.value)}
        value={props[0]}
        />
    </div> );
}
 
export default Title;