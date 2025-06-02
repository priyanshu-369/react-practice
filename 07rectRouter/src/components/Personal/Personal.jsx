

function Personal({name, college, dob}){
    return(
        <div className="w-screen flex flex-col items-center gap-1">
            <div className="w-3xl border-2 rounded-sm">
                <h1>My name is {name}</h1>
            </div>
            <div className="w-3xl border-2 rounded-sm">
                <p>
                    My college degree is from {college}
                </p>
            </div>
            <div className="w-3xl border-2 rounded-sm ">
                <p>
                    My Date of Birth is {dob}
                </p>
            </div>
        </div>
    )
    
}

export default Personal