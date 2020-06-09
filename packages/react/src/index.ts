import { addGlobalEventProcessor, SDK_VERSION } from '@sentry/browser';

function createReactEventProcessor(): void {
  addGlobalEventProcessor(event => {
    event.sdk = {
      ...event.sdk,
      name: 'sentry.javascript.react',
      packages: [
        ...((event.sdk && event.sdk.packages) || []),
        {
          name: 'npm:@sentry/react',
          version: SDK_VERSION,
        },
      ],
      version: SDK_VERSION,
    };

    return event;
  });
}

export * from '@sentry/browser';

export { Profiler, withProfiler, useProfiler } from './profiler';
export { ErrorBoundary, withErrorBoundary } from './errorboundary';

createReactEventProcessor();
