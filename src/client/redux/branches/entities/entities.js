// selectEntities is used by all branches inside entities so it can't be defined in ./index.ts
// otherwise a circular reference is created
/* eslint-disable import/prefer-default-export */
export const selectEntities = state => state.entities;
