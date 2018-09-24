export const createPendingLoadDetails = () => ({
  status: "PENDING"
});

export const createSuccessLoadDetails = () => ({
  status: "SUCCESS",
  cachedAt: Date.now()
});

export const createErrorLoadDetails = error => ({
  status: "ERROR",
  error
});
