const isProd = typeof window !== 'undefined' ? window.location.hostname !== 'localhost' : process.env.NODE_ENV === 'production';
export const basePath = isProd ? '/stackuptech' : '';
export const getAssetPath = (path) => `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
