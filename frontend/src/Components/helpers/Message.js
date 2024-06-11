const showMsg = (msg , i)=>{
    if(i === 0){
        return(
        <div className="alert alert-danger text-center" role='alert'>
            {msg}
        </div>
        )
    }else{
        return(
            <div className="alert alert-success text-center" role='alert'>
                {msg}
            </div>
            )
    }
}
export default showMsg;