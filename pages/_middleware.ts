import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export const middleware = async (req) => {
  // Token will exist if user is logged in 
  const secret = process.env.JWT_SECRET
  const token = await getToken({ req, secret })
  const { pathname } = req.nextUrl;

  // Allow the requests if the following is true...
  // 1) It's a request for next-auth session & provider fetching
  // 2) The token exists
  console.log(secret)
  console.log('MIDDLEWARE')
  console.log(token)

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // Redirect them to login if they don't have token and are requested a protected route
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login")
  }
}