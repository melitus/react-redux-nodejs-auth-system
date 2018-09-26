export const createPendingLoadDetails = () => ({
  status: 'PENDING'
});

export const createSuccessLoadDetails = () => ({
  status: 'SUCCESS',
  cachedAt: new Date().toISOString(),

});

export const createErrorLoadDetails = error => ({
  status: 'ERROR',
  error
});
