export function MinimalAuth({ mode = "login" }) {
  const isLogin = mode === "login";
  
  return (
    <div className="min-h-screen bg-[#F5F1E8] md:flex">
      {/* Left - Brand */}
      <div className="hidden md:flex flex-1 bg-[#6BB5B0] items-center justify-center">
        <div className="text-white text-center p-8">
          <div className="text-5xl font-bold mb-4" aria-label="Emailly">emailly</div>
          <p className="text-lg">
            {isLogin ? "Welcome back" : "Join thousands of creators today"}
          </p>
        </div>
      </div>

      {/* Right - Form - Takes full half */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          {/* Mobile Logo */}
          <div className="md:hidden text-center mb-8">
            <div className="text-3xl font-bold text-[#6BB5B0]" aria-label="Emailly">emailly</div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] md:border-0 md:bg-transparent md:p-0">
            <h1 className="text-xl font-semibold text-[#4A5568] mb-4">
              {isLogin ? "Sign in to your account" : "Create your account"}
            </h1>

    


            {/* Email Form */}
            <form className="space-y-4" noValidate>
              {!isLogin && (
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#4A5568] mb-1 sr-only">
                    Full name
                  </label>
                  <input 
                    id="fullName"
                    type="text" 
                    placeholder="Full name" 
                    className="w-full p-3 border border-[#E5E7EB] rounded focus:border-[#6BB5B0] focus:ring-2 focus:ring-[#6BB5B0] focus:ring-opacity-20 outline-none transition-colors"
                    aria-required={!isLogin}
                  />
                </div>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4A5568] mb-1 sr-only">
                  Email address
                </label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="Email address" 
                  className="w-full p-3 border border-[#E5E7EB] rounded focus:border-[#6BB5B0] focus:ring-2 focus:ring-[#6BB5B0] focus:ring-opacity-20 outline-none transition-colors"
                  aria-required="true"
                  autoComplete="email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#4A5568] mb-1 sr-only">
                  Password
                </label>
                <input 
                  id="password"
                  type="password" 
                  placeholder="Password" 
                  className="w-full p-3 border border-[#E5E7EB] rounded focus:border-[#6BB5B0] focus:ring-2 focus:ring-[#6BB5B0] focus:ring-opacity-20 outline-none transition-colors"
                  aria-required="true"
                  autoComplete={isLogin ? "current-password" : "new-password"}
                />
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#4A5568] mb-1 sr-only">
                    Confirm password
                  </label>
                  <input 
                    id="confirmPassword"
                    type="password" 
                    placeholder="Confirm password" 
                    className="w-full p-3 border border-[#E5E7EB] rounded focus:border-[#6BB5B0] focus:ring-2 focus:ring-[#6BB5B0] focus:ring-opacity-20 outline-none transition-colors"
                    aria-required={!isLogin}
                    autoComplete="new-password"
                  />
                </div>
              )}

              {/* Remember me & Forgot password */}
              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-[#6BB5B0] border-[#E5E7EB] rounded focus:ring-[#6BB5B0] focus:ring-2 focus:ring-opacity-20"
                      aria-label="Remember me"
                    />
                    <span className="text-[#6B7280]">Remember me</span>
                  </label>
                  <a 
                    href="#" 
                    className="text-[#6BB5B0] hover:text-[#5BA5A0] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6BB5B0] focus:ring-offset-2 focus:rounded"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              <button 
                type="submit" 
                className="w-full bg-[#6BB5B0] text-white p-3 rounded hover:bg-[#5BA5A0] font-medium focus:outline-none focus:ring-2 focus:ring-[#6BB5B0] focus:ring-offset-2 transition-colors"
                aria-live="polite"
              >
                {isLogin ? "Sign in" : "Create account"}
              </button>
            </form>


            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-[#E5E7EB]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-[#6B7280]">Or continue with email</span>
              </div>
            </div>




        {/* OAuth Buttons */}
        <div className="space-y-3 mb-6">
              <button 
                type="button"
                className="w-full flex items-center justify-center gap-3 p-3 border border-[#E5E7EB] rounded hover:bg-[#F9FAFB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6BB5B0] focus:ring-offset-2"
                aria-label="Continue with Google"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-medium text-[#4A5568]">
                  Continue with Google
                </span>
              </button>

              <button 
                type="button"
                className="w-full flex items-center justify-center gap-3 p-3 border border-[#E5E7EB] rounded hover:bg-[#F9FAFB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6BB5B0] focus:ring-offset-2"
                aria-label="Continue with GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.337-3.369-1.337-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.335-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span className="text-sm font-medium text-[#4A5568]">
                  Continue with GitHub
                </span>
              </button>
            </div>




            {/* Terms for signup */}
            {!isLogin && (
              <p className="text-xs text-[#6B7280] text-center mt-4">
                By creating an account, you agree to our{" "}
                <a href="#" className="text-[#6BB5B0] hover:text-[#5BA5A0] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6BB5B0] focus:ring-offset-1 focus:rounded">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#6BB5B0] hover:text-[#5BA5A0] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6BB5B0] focus:ring-offset-1 focus:rounded">
                  Privacy Policy
                </a>
              </p>
            )}

            {/* Switch auth mode */}
            <p className="text-center text-sm text-[#6B7280] mt-6">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <a 
                href={isLogin ? "/signup" : "/login"} 
                className="text-[#6BB5B0] font-medium hover:text-[#5BA5A0] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6BB5B0] focus:ring-offset-2 focus:rounded"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Export individual components
export function LoginPage() {
  return <MinimalAuth mode="login" />;
}

export function SignupPage() {
  return <MinimalAuth mode="signup" />;
}