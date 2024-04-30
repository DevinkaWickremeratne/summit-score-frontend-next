import { withAuth } from 'next-auth/middleware';

export default withAuth(
  function middleware (req) {
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (
          req.nextUrl.pathname.endsWith('details') &&
          token === null
        ) {
          return false
        }
        return true
      }
    }
  }
)