render() {
        
        return (
            <div>
                {
                    this.state.Colors.map((p,index) =>{
                        return <Button  color = {p} key = {index}  ParentColorHandler={this.ParentColorHandler}/>
                     })    
                }

                <div className={"box " + this.state.color}>

                </div>

            </div>
        )
    }