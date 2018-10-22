type RouteType = '/' | '/signup' | '/signin'

enum RoutePath {
  Home = '/',
  Signup = '/signup',
  Signin = '/signin',
}

const redirectTo = (url: RouteType) => ({
  // redirect logic here...
})

const SignupPath = '/signup'

redirectTo(RoutePath.Signup)
redirectTo(SignupPath)
redirectTo('/signup')
