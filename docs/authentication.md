# Authentication — Clerk

## Rules

- **Clerk is the only authentication method.** Do not implement any other auth (e.g. NextAuth, custom JWT, sessions).
- All sign-in and sign-up flows must use **Clerk modals** (`<SignInButton mode="modal">` / `<SignUpButton mode="modal">`). Never navigate to a dedicated sign-in or sign-up page.

## DO NOT

- ❌ Do NOT use NextAuth, Auth.js, Lucia, custom JWT, or session-based auth.
- ❌ Do NOT create `/sign-in` or `/sign-up` pages — auth must be modal only.
- ❌ Do NOT use `<SignIn />` or `<SignUp />` as full-page (non-modal) components.
- ❌ Do NOT protect routes manually — use `clerkMiddleware` with `createRouteMatcher`.
- ❌ Do NOT access user identity via anything other than Clerk's `auth()` or `currentUser()`.

## Route Protection

- `/dashboard` is a **protected route**. Users who are not signed in must be redirected to the homepage (or sign-in modal).
- Protect routes via Clerk's `clerkMiddleware` in `middleware.ts`. Mark `/dashboard` (and any sub-routes) as protected using `createRouteMatcher`.

```ts
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
```

## Authenticated User Redirect

- If a **signed-in** user visits `/`, redirect them to `/dashboard`.
- Implement this in the homepage component using `auth()` from `@clerk/nextjs/server`.

```ts
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) redirect('/dashboard');
  // render landing page ...
}
```

## Modal Sign-in / Sign-up

```tsx
import { SignInButton, SignUpButton } from '@clerk/nextjs';

<SignInButton mode="modal"><button>Sign in</button></SignInButton>
<SignUpButton mode="modal"><button>Sign up</button></SignUpButton>
```
