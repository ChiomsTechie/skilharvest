import { NextResponse } from "next/server"

export const POST= async(request)=>{

    // take incoming values
    const {email, password}=await request.json()
    try{
        if (email==''){
            return new NextResponse("pass in values",{status:429});
        }
        if (email=="obed@gmail.com" && password=="123456"){
            return new NextResponse("user credentials correct",{status:200});
        }

        else{
           return new NextResponse("user credentials incorrect",{status:500});
        }
    }
    catch(err){
        return new NextResponse("server Error",{status:500});
    }
}