'use client';

// The root layout is defined at the top level of the app directory and applies to all routes.
// This layout enables you to modify the initial HTML returned from the server.

// Good to know:

// - The app directory must include a root layout.
// - The root layout must define <html> and <body> tags since Next.js does not automatically create them.
// - You can use the built-in SEO support to manage <head> HTML elements, for example, the <title> element.
// - You can use route groups to create multiple root layouts. See an example here.
// - The root layout is a Server Component by default and can not be set to a Client Component.

// If you were to combine the two layouts above,
// the root layout (app/layout.js) would wrap the dashboard layout (app/dashboard/layout.js),
// which would wrap route segments inside app/dashboard/*.

// SEO 링크 - https://beta.nextjs.org/docs/guides/seo

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default Rootlayout;
