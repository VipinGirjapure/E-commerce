const RedPipeAndTitle = ({title}:{title:string}) => {
    return <div style={{display:'flex',justifyContent:"flex-start",alignItems:'center',marginBottom:"20px"}}>
        <div style={{backgroundColor:"#DB4444",width:'20px',height:'40px',borderRadius:"4px",marginRight:'15px'}}/>
        <p style={{color:"#DB4444",fontSize:'16px',fontWeight:'bold',textTransform:"capitalize"}}>{title}</p>

    </div>
}

export default RedPipeAndTitle;