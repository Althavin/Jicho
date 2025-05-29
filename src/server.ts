import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();

  // Handle API routes if needed
  // const pathname = new URL(request.url).pathname;
  // if (pathname.startsWith('/api/')) {
  //   return handleApiRequest(request);
  // }

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

// Export the handler for Netlify
export default netlifyAppEngineHandler;

// For Angular CLI compatibility
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);