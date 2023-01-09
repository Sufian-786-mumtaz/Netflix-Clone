import { NextRequest, NextResponse } from "next/server";
export function middleWare(req:NextRequest, res:NextResponse){
    const login = req.cookies.get("session")
    if(req.url.includes("http://localhost:3000") && !login){
        return NextResponse.redirect("http://localhost:3000/login")
    }
    if(req.url.includes("http://localhost:3000/login") && login){
        return NextResponse.redirect("http://localhost:3000")
    }
}