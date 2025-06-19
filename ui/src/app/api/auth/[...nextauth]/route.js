import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  site: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Add your own authentication logic here
        if (credentials?.email === 'demo1234@gmail.com' && credentials?.password === 'demo1234') {
          // Return user object if credentials are valid
          return Promise.resolve({ 
            id: '1', 
            name: 'Demo User', 
            email: 'demo1234@gmail.com' 
          });
        } else {
          // Return null if credentials are invalid
          return Promise.resolve(null);
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/auth1/login',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log('NextAuth redirect callback - url:', url, 'baseUrl:', baseUrl);
      
      // If it's a relative URL, prepend the base URL
      if (url.startsWith('/')) {
        // Check if user is trying to access a specific page
        if (url.includes('/Agency')) {
          console.log('Redirecting to Agency page');
          return `${baseUrl}/Agency`;
        }
        // Default redirect after login
        console.log('Redirecting to default Agency page');
        return `${baseUrl}/Agency`;
      }
      
      // If it's an absolute URL within the same domain
      if (url.startsWith(baseUrl)) {
        return url;
      }
      
      // Default fallback to Agency page
      console.log('Fallback redirect to Agency page');
      return `${baseUrl}/Agency`;
    },
  },
  session: {
    strategy: 'jwt',
  },
  events: {
    async signIn({ user, account, profile }) {
      console.log('NextAuth signIn event:', { user: user.email, account: account?.provider });
    },
    async session({ session, token }) {
      console.log('NextAuth session event:', { user: session.user?.email });
    },
  },
  debug: process.env.NODE_ENV === 'development', // Enable debug logs in development
});

export { handler as GET, handler as POST };