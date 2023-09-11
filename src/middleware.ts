import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get('token')?.value;

  const signInUrl = new URL('/signin', request.url);
  const homeUrl = new URL('/home', request.url);

  if (!token) {
    if (request.nextUrl.pathname === '/signin') {
      return NextResponse.next();
    }

    return NextResponse.redirect(signInUrl);
  } else {
    if (
      request.nextUrl.pathname === '/:path*' ||
      request.nextUrl.pathname === '/signin' ||
      request.nextUrl.pathname === '/'
    ) {
      return NextResponse.redirect(homeUrl);
    }
  }
};

export const config = {
  matcher: [
    '/home/:path*',
    '/signin',
    '/',
    '/lista-requisicoes',
    '/registrar-certificado/:path*',
    '/confirmacao-cadastro',
    '/visualizar-certificado/:path*',
    '/perfil-usuario',
    '/duvidas-frequentes/:path*'
  ]
};
